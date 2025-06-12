// src/components/Products.tsx
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  loadProducts,
  setSearchTerm,
  Product,
} from "../../features/products/productsSlice";
import { addToCart, fetchCart } from "../../features/cart/cartSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  Col,
  Row,
  Spin,
  Alert,
  Select,
  Input,
  Pagination,
  message,
  Drawer,
  Button,
} from "antd";
import ProductCard from "./ProductCard";
// import Cart from "../../features/cart/Cart";

const { Option } = Select;

const Products = () => {
  const dispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const userId = user?.uid || "123";

  const { products, loading, error, searchTerm } = useSelector(
    (state: RootState) => state.products
  );
  const cart = useSelector((state: RootState) => state.cart);

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedProductId, setExpandedProductId] = useState<number | null>(
    null
  );
  const [sortOption, setSortOption] = useState<string>("none");
  const [currentPage, setCurrentPage] = useState(1);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const productsPerPage = 8;

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  useEffect(() => {
    if (userId) {
      dispatch(fetchCart(userId));
    }
  }, [dispatch, userId]);

  const categories = Array.from(
    new Set(
      products
        .filter((p) => typeof p.category === "string")
        .map((p) => p.category.trim().toLowerCase())
    )
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
    setCurrentPage(1);
  };

  const handleSort = (value: string) => setSortOption(value);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "priceAsc") return a.price - b.price;
    if (sortOption === "priceDesc") return b.price - a.price;
    if (sortOption === "ratingDesc") return (b.rating || 0) - (a.rating || 0);
    return 0;
  });

  const filteredProducts = sortedProducts.filter((product) => {
    const matchCategory =
      selectedCategory === "All" ||
      product.category?.trim().toLowerCase() === selectedCategory.toLowerCase();
    const matchSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (page: number) => setCurrentPage(page);
  const handleAddToCart = async (product: Product) => {
    try {
      await dispatch(
        addToCart({ userId, productId: String(product.id), quantity: 1 })
      );
      await dispatch(fetchCart(userId)); // Await to ensure cart is updated before opening drawer
      message.success("Added to cart!");
      setDrawerVisible(true); // Open the cart drawer on the right side
    } catch (error) {
      message.error("Failed to add to cart.");
    }
  };

  const [submittingRating, setSubmittingRating] = useState(false);

  const handleRatingChange = async (productId: number, rating: number) => {
    if (rating === 0) {
      message.warning("Please select a rating before submitting");
      return;
    }

    setSubmittingRating(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw37rwT1_bq5PoYTLkW5RMPSrgKVAm_vXx1zTfmXui2Sy5r3IodivysGXiwuGWJ8jI5/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ productId, rating }),
        }
      );

      const text = await response.text();
      const data = JSON.parse(text);

      if (response.ok && data.success) {
        message.success("Thanks for your rating!");
        // Optionally reload products or update rating here
        dispatch(loadProducts()); // Reload products to get updated ratings
      } else {
        message.error(
          "Failed to submit rating: " + (data.message || "Unknown error")
        );
      }
    } catch (error: any) {
      message.error("Network error submitting rating: " + error.message);
      console.error(error);
    } finally {
      setSubmittingRating(false);
    }
  };

  if (loading) return <Spin size="large" />;
  if (error) return <Alert message={error} type="error" />;

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: 24,
        }}
      >
        <Select
          value={selectedCategory}
          style={{ width: 200 }}
          onChange={(value) => {
            setSelectedCategory(value);
            setCurrentPage(1);
          }}
        >
          <Option value="All">All</Option>
          {categories.map((category) => (
            <Option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Option>
          ))}
        </Select>
        <Input
        className="ant-input"
          placeholder="Search by title, description, or category"
          onChange={handleSearch}
          value={searchTerm}
          style={{ width: 300 }}
          allowClear
        />
        <Select value={sortOption} style={{ width: 200 }} onChange={handleSort}>
          <Option value="none">Sort by</Option>
          <Option value="priceAsc">Price: Low to High</Option>
          <Option value="priceDesc">Price: High to Low</Option>
          <Option value="ratingDesc">Rating: High to Low</Option>
        </Select>
      </div>

      <Row gutter={[16, 16]}>
        {currentProducts.map((product) => (
          <Col key={product.id} span={6}>
            <ProductCard
              product={product}
              isExpanded={expandedProductId === product.id}
              onToggleExpand={(id) =>
                setExpandedProductId((prev) => (prev === id ? null : id))
              }
              onAddToCart={handleAddToCart}
              onRatingChange={handleRatingChange}
            />
          </Col>
        ))}
      </Row>

      <div style={{ marginTop: 32, textAlign: "center" }}>
        <Pagination
          current={currentPage}
          pageSize={productsPerPage}
          total={filteredProducts.length}
          onChange={handlePageChange}
        />
      </div>

      <Drawer
        title="Your Cart"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
        width={350}
      >
        <Button
          onClick={() => setDrawerVisible(false)}
          block
          style={{ marginTop: "1rem" }}
        >
          Close Cart
        </Button>
      </Drawer>
    </>
  );
};

export default Products;

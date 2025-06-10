import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { loadProducts, setSearchTerm, Product } from "../../features/products/productsSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
//import { addToCart } from "../../features/cart/cartSlice";
import {
  Card,
  Col,
  Row,
  Spin,
  Alert,
  Select,
  Input,
  Button,
  Pagination,
} from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import "./ProductsPage.css";
//import Cart from "../../features/cart/cart";

const { Option } = Select;




const ProductsPage = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const userId = user?.uid;
  const dispatch = useAppDispatch();
  const { products, loading, error, searchTerm } = useSelector(
    (state: RootState) => state.products
  );

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedProductId, setExpandedProductId] = useState<number | null>(null);
  const [sortOption, setSortOption] = useState<string>("none");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

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

  const handleSort = (value: string) => {
    setSortOption(value);
  };

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
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // const handleAddToCart = (product: Product) => {
  //   dispatch(addToCart(product));
  // };

  if (loading) return <Spin size="large" />;
  if (error) return <Alert message={error} type="error" />;

  return (
    <>
      <h2 style={{ marginBottom: "16px" }}>Filter Products</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "1rem",
          marginBottom: 24,
          flexWrap: "wrap",
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
        {currentProducts.map((product) => {
          const isExpanded = expandedProductId === product.id;

          return (
            <Col key={product.id} span={6}>
              <div className="product-card">
                <div className="image-container">
                  <img alt={product.title} src={product.image} />
                  <div className="overlay">
                    <Button
                      type="primary"
                      icon={isExpanded ? <UpOutlined /> : <DownOutlined />}
                      onClick={() =>
                        setExpandedProductId((prevId) =>
                          prevId === product.id ? null : product.id
                        )
                      }
                    >
                      {isExpanded ? "Hide Details" : "View Details"}
                    </Button>

                    {/* <Button
                      type="default"
                      onClick={() => handleAddToCart(product)}
                      style={{ marginLeft: 8 }}
                    >
                      Add to Cart
                    </Button> */}
                  </div>
                </div>

                <Card title={product.title} bordered={false}>
                  <p>
                    <em>Category: {product.category}</em>
                  </p>
                  <p>{product.description.slice(0, 60)}...</p>
                  <p>
                    <strong>${product.price}</strong>
                  </p>

                  <div
                    className={`product-details ${isExpanded ? "expanded" : "collapsed"}`}
                    aria-expanded={isExpanded}
                  >
                    <p><strong>Description:</strong> {product.description}</p>
                    <p><strong>Info:</strong> {product.info}</p>
                    <p><strong>Rating:</strong> ⭐ {product.rating ?? "N/A"} / 5</p>
                  </div>
                </Card>
              </div>
            </Col>
          );
        })}
      </Row>

      <div style={{ marginTop: 32, textAlign: "center" }}>
        <Pagination
          current={currentPage}
          pageSize={productsPerPage}
          total={filteredProducts.length}
          onChange={handlePageChange}
        />
   {/* {userId ? <Cart userId={userId} /> : <p>Please log in to see your cart</p>} */}


      </div>
    </>
  );
};

export default ProductsPage;


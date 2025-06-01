import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { getProducts, setSearchTerm } from "../../features/products/productsSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  Card,
  Col,
  Row,
  Spin,
  Alert,
  Select,
  Input,
  Button
} from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import "./ProductsPage.css";

const { Option } = Select;

const ProductsPage = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error, searchTerm } = useSelector(
    (state: RootState) => state.products
  );

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedProductId, setExpandedProductId] = useState<number | null>(null);

  useEffect(() => {
    dispatch(getProducts());
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
  };

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === "All" ||
      product.category?.trim().toLowerCase() === selectedCategory.toLowerCase();

    const matchSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

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
          flexWrap: "wrap"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Select
            value={selectedCategory}
            style={{ width: 200 }}
            onChange={(value) => setSelectedCategory(value)}
          >
            <Option value="All">All</Option>
            {categories.map((category) => (
              <Option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Option>
            ))}
          </Select>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: 4, fontWeight: 500 }}>Search</label>
          <Input
            placeholder="By title, description, or category"
            onChange={handleSearch}
            value={searchTerm}
            style={{ width: 400 }}
            allowClear
          />
        </div>
      </div>

      <Row gutter={[16, 16]}>
        {filteredProducts.map((product) => (
          <Col key={product.id} span={6}>
            <div className="product-card">
              <div className="image-container">
                <img alt={product.title} src={product.image} />
                <div className="overlay">
                  <Button
                    type="primary"
                    icon={
                      expandedProductId === product.id ? <UpOutlined /> : <DownOutlined />
                    }
                    onClick={() =>
                      setExpandedProductId((prevId) =>
                        prevId === product.id ? null : product.id
                      )
                    }
                  >
                    {expandedProductId === product.id ? "Hide Details" : "View Details"}
                  </Button>
                </div>
              </div>

              <Card title={product.title} bordered={false}>
                <p>
                  <em>Category: {product.category}</em>
                </p>
                <p>{product.description}</p>
                <p>
                  <strong>${product.price}</strong>
                </p>

                <div
                  className={`details-section ${
                    expandedProductId === product.id ? "expanded" : "collapsed"
                  }`}
                >
                  <hr />
                  <p><strong>More info:</strong></p>
                  <ul style={{ paddingLeft: 16 }}>
                    <li>Info: {product.info}</li>
                    <li>Rating: ⭐ {product.rating ?? "N/A"} / 5</li>
                  </ul>
                </div>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductsPage;

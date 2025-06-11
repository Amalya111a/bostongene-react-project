import React from "react";
import { Card, Button, Rate, message } from "antd";
import { Product } from "../../features/products/productsSlice";
import "./ProductsPage.css";

type Props = {
  product: Product;
  isExpanded: boolean;
  onToggleExpand: (id: number) => void;
  onAddToCart: (product: Product) => void;
  onRatingChange?: (id: number, rating: number) => void; // optional prop
};

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const scriptUrl =
  "https://script.google.com/macros/s/AKfycbw37rwT1_bq5PoYTLkW5RMPSrgKVAm_vXx1zTfmXui2Sy5r3IodivysGXiwuGWJ8jI5/exec";

const ProductCard: React.FC<Props> = ({
  product,
  isExpanded,
  onToggleExpand,
  onAddToCart,
  onRatingChange,
}) => {
  const handleRatingChange = async (productId: number, rating: number) => {
    try {
      const response = await fetch(proxyUrl + scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, rating }),
      });

      const text = await response.text();
      console.log("📦 Raw server response:", text);

      try {
        const data = JSON.parse(text);
        console.log("✅ Parsed JSON:", data);

        if (response.ok) {
          message.success("Thanks for your rating!");
        } else {
          message.error("Failed to submit rating.");
        }
      } catch (parseError) {
        message.error("Server did not return valid JSON.");
      }
    } catch (error: any) {
      console.error("🚨 Error rating product:", error.message);
      message.error("Network or server error.");
    }
  };
  

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.title} />
        <div className="overlay">
          <Button onClick={() => onAddToCart(product)}>Add to Cart</Button>
        </div>
      </div>

      <div className="product-info" style={{ padding: "16px" }}>
        <h3>{product.title}</h3>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <Rate
          allowHalf
          defaultValue={product.rating || 0}
          onChange={(value) => {
            if (onRatingChange) {
              onRatingChange(product.id, value);
            }
            handleRatingChange(product.id, value); // always call this
          }}
        />
       {/* <p>
          <strong>Rating Count:</strong> {product.ratingCount}
        </p> */}
        <Button
          type="link"
          onClick={() => onToggleExpand(product.id)}
          style={{ marginTop: "10px", paddingLeft: 0 }}
        >
          {isExpanded ? "Hide Details" : "View Details"}
        </Button>

        <div className={`product-details ${isExpanded ? "expanded" : ""}`}>
          <p>  <strong>Skin Type:</strong>{product.skinType}</p>
          <p> <strong>Info:</strong>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
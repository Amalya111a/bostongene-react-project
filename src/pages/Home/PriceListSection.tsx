import React from "react";
import { Typography, Row, Col, Card } from "antd";

const { Title, Text } = Typography;

const priceList = [
  {
    title: "Consultation",
    description: "Initial skin consultation with our expert doctors.",
    price: "$50 - $80",
  },
  {
    title: "Skin Analysis",
    description: "AI-powered detailed skin health analysis.",
    price: "$30",
  },
  {
    title: "Acne Treatment",
    description: "Customized treatment plans for acne-prone skin.",
    price: "$100 - $200",
  },
  {
    title: "Laser Surgery",
    description: "Advanced laser treatments for various skin conditions.",
    price: "$300 - $600",
  },
  {
    title: "Anti-Aging Therapy",
    description: "Treatments aimed to reduce wrinkles and rejuvenate skin.",
    price: "$150 - $350",
  },
  {
    title: "Cosmetic Consultations",
    description: "Personalized advice for aesthetic procedures and treatments.",
    price: "$75 - $120",
  },
];

const PriceListSection = () => (
  <section
    className="price-list"
    style={{
      marginTop: 80,
      marginBottom: 120,
      padding: "0 20px",
      background: "#f4fbf7",
    }}
  >
    <Title
      level={2}
      style={{
        textAlign: "center",
        color: "#14532D",
        fontSize: 36,
        marginBottom: 60,
        fontWeight: 700,
      }}
    >
      Our Price List
    </Title>

    <Row
      gutter={[24, 32]}
      justify="center"
      style={{ maxWidth: 1100, margin: "0 auto" }}
    >
      {priceList.map(({ title, description, price }, idx) => (
        <Col xs={24} sm={12} md={8} key={idx}>
          <Card
            hoverable
            style={{
              borderRadius: 20,
              backgroundColor: "transparent",
              boxShadow: "none",
              padding: "24px 20px",
              height: "100%",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            bodyStyle={{ padding: 0 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(20, 83, 45, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <Title
              level={4}
              style={{
                color: "#114D4D",
                marginBottom: 10,
                fontWeight: 600,
                textShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              {title}
            </Title>
            <Text
              style={{
                color: "#0e3d3d",
                fontSize: 14,
                display: "block",
                marginBottom: 20,
                textShadow: "0 1px 2px rgba(0,0,0,0.05)",
              }}
            >
              {description}
            </Text>
            <div
              style={{
                fontWeight: "bold",
                fontSize: 22,
                color: "#016936",
                borderTop: "1px solid #cce3d9",
                paddingTop: 16,
                textShadow: "0 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              {price}
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  </section>
);

export default PriceListSection;

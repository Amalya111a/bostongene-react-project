import React, { useState } from "react";
import { Typography, Row, Col, Card } from "antd";

const { Title, Paragraph } = Typography;

interface Service {
  title: string;
  description: string;
  emoji: string;   // added emoji field
}

const services: Service[] = [
  {
    emoji: "🔍",
    title: "Skin Analysis",
    description:
      "A comprehensive evaluation of your skin to identify your skin type, concerns, and recommend suitable treatments or products.",
  },
  {
    emoji: "🌿",
    title: "Acne Treatment",
    description:
      "Personalized treatments aimed at reducing acne, including topical solutions, medications, and lifestyle guidance.",
  },
  {
    emoji: "⏳",
    title: "Anti-Aging Therapy",
    description:
      "Advanced therapies focused on reducing wrinkles, fine lines, and restoring youthful skin appearance.",
  },
  {
    emoji: "🔬",
    title: "Laser Surgery",
    description:
      "Precision laser treatments for skin resurfacing, scar removal, and pigmentation correction.",
  },
  {
    emoji: "💼",
    title: "Center Consultations",
    description:
      "Expert consultations to discuss your cosmetic goals and design a customized treatment plan.",
  },
];

const ServicesSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      style={{
        padding: "60px 20px",
        backgroundColor: "#f0f5f2",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <Title
        level={2}
        style={{
          textAlign: "center",
          color: "#14532D",
          marginBottom: 50,
          fontSize: 35,
          fontWeight: "bold",
        }}
      >
        Our Services
      </Title>

      <Row gutter={[24, 24]} justify="center">
        {services.map((service, index) => (
          <Col xs={24} sm={24} md={12} key={index}>
            <Card
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                backgroundColor: "#14532D",
                color: "#e0f7f4",
                borderRadius: 16,
                padding: 20,
                boxShadow: "0 4px 12px rgba(6, 49, 23, 0.3)",
                minHeight: 220,
                transition: "all 0.3s ease",
                overflow: "hidden",
              }}
              bodyStyle={{ padding: 0 }}
            >
              <div style={{ padding: 20 }}>
                <Title
                  level={4}
                  style={{
                    color: "#e0f7f4",
                    marginBottom: 16,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    userSelect: "none",
                  }}
                >
                  <span role="img" aria-label={service.title}>
                    {service.emoji}
                  </span>
                  {service.title}
                </Title>
              </div>

              <div
                style={{
                  maxHeight: hoveredIndex === index ? 300 : 0,
                  overflow: "hidden",
                  opacity: hoveredIndex === index ? 1 : 0,
                  transition: "all 0.4s ease",
                  padding: hoveredIndex === index ? "0 20px 20px" : "0 20px",
                }}
              >
                <Paragraph style={{ color: "#e0f7f4", margin: 0 }}>
                  {service.description}
                </Paragraph>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default ServicesSection;

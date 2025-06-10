import React from "react";
import { Typography, Row, Col } from "antd";

const { Title, Paragraph } = Typography;

const AboutSection = () => {
  return (
    <section className="about-section" style={{ marginTop: 60 }}>
      <Row gutter={48} align="middle">
        <Col xs={24} md={12}>
          <img
            src="images/AboutImage.jpg"
            alt="About SkinCare+"
            style={{
              width: "100%",
              borderRadius: 20,
              boxShadow: "0 8px 24px rgba(0,77,51,0.3)",
            }}
          />
        </Col>
        <Col xs={24} md={12}>
          <Title level={2} style={{ color: "#145c4c" }}>
            About Skin&Health
          </Title>
          <Paragraph style={{ fontSize: 16, color: "#2c3e2f" }}>
            Skin&Health is committed to bringing you the most advanced,
            science-backed skincare solutions, combining AI and top
            dermatologists’ expertise. Your skin health journey begins here
            with personalized insights and trusted care.
          </Paragraph>
          <Paragraph style={{ fontSize: 16, color: "#2c3e2f" }}>
            Join thousands who have transformed their skin with our
            cutting-edge platform.
          </Paragraph>
        </Col>
      </Row>
    </section>
  );
};

export default AboutSection;

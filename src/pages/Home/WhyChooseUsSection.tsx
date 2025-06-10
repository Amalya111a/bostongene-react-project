import React from "react";
import { Typography, Row, Col } from "antd";
import {
  SkinOutlined,
  HeartOutlined,
  BulbOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const WhyChooseUsSection = () => {
  return (
    <section
      className="why-choose-us"
      style={{
        backgroundColor: "#e9f5f2",
        padding: "80px 20px",
      }}
    >
      <Title
        level={2}
        style={{
          textAlign: "center",
          color: "#114d4d",
          marginBottom: 60,
          fontSize: 32,
        }}
      >
        Why Choose Us
      </Title>
      <Row gutter={[40, 40]} justify="center">
        <Col xs={24} sm={12} md={6} style={{ textAlign: "center" }}>
          <div
            style={{
              backgroundColor: "#d4f4ee",
              borderRadius: "50%",
              width: 80,
              height: 80,
              margin: "0 auto 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SkinOutlined style={{ fontSize: 36, color: "#007a5c" }} />
          </div>
          <Title level={4} style={{ color: "#114d4d", marginBottom: 12 }}>
            Personalized Care
          </Title>
          <Text style={{ fontSize: 15, color: "#2a4d3c" }}>
            Tailored skincare plans based on your unique skin type and needs.
          </Text>
        </Col>

        <Col xs={24} sm={12} md={6} style={{ textAlign: "center" }}>
          <div
            style={{
              backgroundColor: "#fde2e2",
              borderRadius: "50%",
              width: 80,
              height: 80,
              margin: "0 auto 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <HeartOutlined style={{ fontSize: 36, color: "#d94f4f" }} />
          </div>
          <Title level={4} style={{ color: "#114d4d", marginBottom: 12 }}>
            Expert Doctors
          </Title>
          <Text style={{ fontSize: 15, color: "#2a4d3c" }}>
            Access to Armenia’s top dermatologists and cosmetic surgeons.
          </Text>
        </Col>

        <Col xs={24} sm={12} md={6} style={{ textAlign: "center" }}>
          <div
            style={{
              backgroundColor: "#fff5e1",
              borderRadius: "50%",
              width: 80,
              height: 80,
              margin: "0 auto 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BulbOutlined style={{ fontSize: 36, color: "#f39c12" }} />
          </div>
          <Title level={4} style={{ color: "#114d4d", marginBottom: 12 }}>
            Innovative Technology
          </Title>
          <Text style={{ fontSize: 15, color: "#2a4d3c" }}>
            AI-powered skin analysis for accurate diagnosis and treatment.
          </Text>
        </Col>

        <Col xs={24} sm={12} md={6} style={{ textAlign: "center" }}>
          <div
            style={{
              backgroundColor: "#dafaf3",
              borderRadius: "50%",
              width: 80,
              height: 80,
              margin: "0 auto 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ClockCircleOutlined style={{ fontSize: 36, color: "#16a085" }} />
          </div>
          <Title level={4} style={{ color: "#114d4d", marginBottom: 12 }}>
            24/7 Support
          </Title>
          <Text style={{ fontSize: 15, color: "#2a4d3c" }}>
            Always available to answer your questions and provide guidance.
          </Text>
        </Col>
      </Row>
    </section>
  );
};

export default WhyChooseUsSection;

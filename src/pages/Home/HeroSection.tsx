import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Typography, Button, Input, Form } from "antd";

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  const [loading, setLoading] = useState(false);
  const [skinType, setSkinType] = useState("");
  const [skinIssue, setSkinIssue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!skinType.trim() || !skinIssue.trim()) return;

    setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skinType, skinIssue }),
      });

      const result = await response.json();

      setLoading(false);

      if (result.disease === "Acne") {
        navigate("/Conditions");
      } else if (result.disease === "Eczema") {
        navigate("/Doctors");
      } else {
        navigate("/Products");
      }
    } catch (error) {
      setLoading(false);
      alert("Something went wrong!");
    }
  };

  return (
    <Row gutter={16} justify="center" align="middle" style={{ minHeight: "300px" }}>
      <Col xs={24} md={12}>
        <Title level={2} style={{ color: "#114d4d" }}>
          Skin Health Analysis
        </Title>
        <Paragraph>Enter your skin type and main skin issue below:</Paragraph>

        <Form
          onFinish={handleSubmit}
          layout="vertical"
        >
          <Form.Item label="Skin Type" required>
            <Input
              placeholder="e.g. Oily, Dry, Combination"
              value={skinType}
              onChange={(e) => setSkinType(e.target.value)}
              disabled={loading}
            />
          </Form.Item>

          <Form.Item label="Skin Issue" required>
            <Input
              placeholder="e.g. Acne, Redness, Eczema"
              value={skinIssue}
              onChange={(e) => setSkinIssue(e.target.value)}
              disabled={loading}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              loading={loading}
              disabled={!skinType.trim() || !skinIssue.trim()}
              style={{ background: "#114d4d", borderColor: "#114d4d" }}
            >
              Start Skin Analysis
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};


export default HeroSection;

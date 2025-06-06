import React from "react";
import { Typography, Row, Col, Card, Avatar } from "antd";

import {
  UserOutlined,
  MedicineBoxOutlined,
} from "@ant-design/icons";

import { bestDoctors } from "./bestDoctors";

const { Title, Text } = Typography;

const DoctorsSection = () => {
  return (
    <>
      <Title
        level={3}
        style={{
          textAlign: "center",
          color: "#1B4D3E",
          fontWeight: "700",
          marginBottom: 30,
          textTransform: "uppercase",
          letterSpacing: "2px",
          textShadow: "1px 1px 4px rgba(27, 77, 62, 0.5)",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        Meet Our Best Specialist Doctors
      </Title>

      <Row
        gutter={0}
        style={{
          flexWrap: "nowrap",
          overflowX: "auto",
          justifyContent: "center",
          padding: 20,
          overflow: "visible",
        }}
      >
        {bestDoctors.map((doc, idx) => (
          <Col
            key={idx}
            style={{
              minWidth: 280,
              marginRight: idx !== bestDoctors.length - 1 ? 16 : 0,
            }}
          >
            <Card
              hoverable
              bordered={false}
              style={{
                width: "280px",
                minHeight: "380px",
                textAlign: "center",
                borderRadius: 12,
                boxShadow:
                  "0 8px 20px rgba(27, 77, 62, 0.15), 0 4px 10px rgba(0,0,0,0.05)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                background: "#EAF5EF",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(27, 77, 62, 0.3), 0 6px 20px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(27, 77, 62, 0.15), 0 4px 10px rgba(0,0,0,0.05)";
              }}
            >
              <Avatar
                size={100}
                icon={<UserOutlined />}
                src={doc.photoUrl}
                alt={doc.name}
                style={{
                  backgroundColor: "#1B4D3E",
                  verticalAlign: "middle",
                  boxShadow: "0 4px 8px rgba(27, 77, 62, 0.4)",
                  marginBottom: 16,
                }}
              />
              <Text
                strong
                style={{
                  display: "block",
                  marginBottom: 6,
                  fontSize: 18,
                  color: "#14532D",
                  fontWeight: 600,
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {doc.name}
              </Text>
              <Text
                type="secondary"
                style={{
                  fontStyle: "italic",
                  fontSize: 14,
                  color: "#2F855A",
                  display: "block",
                  marginBottom: 12,
                }}
              >
                {doc.specialty}
              </Text>
              <MedicineBoxOutlined
                style={{ fontSize: 24, color: "#1B4D3E", marginBottom: 12 }}
              />
              <Text
                style={{
                  fontSize: 14,
                  color: "#14532D",
                  lineHeight: 1.4,
                  display: "block",
                  padding: "0 10px",
                  minHeight: 60,
                }}
              >
                {doc.bio}
              </Text>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default DoctorsSection;

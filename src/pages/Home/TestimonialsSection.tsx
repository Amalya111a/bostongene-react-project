import React from "react";
import { Row, Col, Card, Typography, Carousel } from "antd";

const { Text, Paragraph } = Typography;

const testimonials = [
  {
    quote:
      "Dr. Silvie is a great doctor! He's very understanding and listens to your concerns. He takes time with the patient to help them with their health issues! I highly recommend him to anyone looking for a specialist.",
    author: "Cole Lee",
  },
  {
    quote:
      "Dr. Jhon helped me regain my confidence. Truly knowledgeable and kind.",
    author: "Anna Petrosyan",
  },
  {
    quote:
      "Professional service and excellent results. Highly recommended clinic!",
    author: "Tigran Sargsyan",
  },
  {
    quote:
      "I was nervous at first, but the staff made me feel comfortable immediately.",
    author: "Ann Smith",
  },
  {
    quote:
      "Very modern facilities and friendly team. I felt in good hands the whole time.",
    author: "David Avetisyan",
  },
];

const TestimonialSection = () => {
  return (
    <Row
      justify="center"
      style={{
        marginTop: 60, // Adds space above so it’s separate from Doctors section
        marginBottom: 60, // Adds space below for breathing room
      }}
    >
      <Col xs={24} sm={20} md={14} lg={12} xl={10}>
        <Carousel autoplay autoplaySpeed={3000} dots>
          {testimonials.map((t, idx) => (
            <Card
              key={idx}
              style={{
                textAlign: "center",
                padding: 16,
                borderRadius: 10,
                boxShadow:
                  "0 6px 15px rgba(27, 77, 62, 0.12), 0 3px 8px rgba(0,0,0,0.04)",
                backgroundColor: "#F9FFFC",
                fontSize: 14,
                maxWidth: "100%",
              }}
            >
              <Text type="secondary" style={{ fontSize: 12 }}>
                What our clients say
              </Text>
              <Paragraph
                style={{
                  fontSize: 14,
                  marginTop: 12,
                  fontStyle: "italic",
                  color: "#14532D",
                  marginBottom: 8,
                }}
              >
                “{t.quote}”
              </Paragraph>
              <Text strong style={{ fontSize: 14, display: "block" }}>
                — {t.author}
              </Text>
            </Card>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
};

export default TestimonialSection;

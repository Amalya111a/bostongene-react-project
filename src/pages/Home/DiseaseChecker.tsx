// src/pages/DiseaseChecker.tsx
import React, { useState } from "react";
import { Form, Input, Select, Button, Typography, message, Spin } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;
const { Option } = Select;

type FormValues = {
  age: number;
  gender: string;
  skinType: string;
  symptoms: string;
  duration: string;
};

const DiseaseChecker: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [specialtyRoute, setSpecialtyRoute] = useState<string | null>(null);
  const navigate = useNavigate();

  const onFinish = async (values: FormValues) => {
    const { age, gender, skinType, symptoms, duration } = values;
    const question = `
I'm a ${age}-year-old ${gender} with ${skinType} skin. 
I've had ${symptoms} for ${duration}. 
What disease might I have and what should I do? 
Answer ONLY 4-5 short sentences about the most likely disease and what to do.

Then, in a new line, output the related doctor specialty and route as a JSON object like this:
{
  "specialty": "[matching specialty from list]",
  "route": "/doctors?specialty=[URL-encoded specialty]"
}
Choose ONLY ONE specialty from this list: 
Medical Dermatology, Cosmetic Dermatology, Pediatric Dermatology, Geriatric Dermatology, Surgical Dermatology, Mohs Surgery, Laser Dermatology, Dermatopathology, Immunodermatology, Allergic Contact Dermatitis, Photodermatology, Pigmentary Disorders, Hair and Scalp Dermatology, Nail Disorders, Acne and Rosacea Specialist, Psoriasis Specialist, Eczema and Atopic Dermatitis, Hidradenitis Suppurativa Specialist, Skin Cancer Dermatology, Actinic Keratosis Specialist, Dermato-oncology, Infectious Dermatology, Tropical Dermatology, Genodermatoses Specialist, Occupational Dermatology, Dermatoendocrinology, Dermatoepidemiology, Wound Healing Specialist, Scar Management Specialist, Burn Care Dermatology, Laser Hair Removal, Chemical Peel Therapy, Cryotherapy Specialist, Phototherapy Specialist, Microneedling and Dermarolling, Platelet-Rich Plasma (PRP) Therapy, Anti-aging Dermatology, Ethnic Skin Dermatology, Tattoo Removal Specialist, Botox and Fillers Specialist, Keratoderma Specialist, Hyperhidrosis Specialist, Urticaria and Hives Specialist, Drug Reaction Dermatology, Autoimmune Blistering Diseases, Cutaneous Lymphoma Specialist, Vascular Dermatology, Mucosal Dermatology, Neurodermatology, Teledermatology.
`;

    setLoading(true);
    setResult(null);
    setSpecialtyRoute(null);

    try {
      const response = await axios.post("http://localhost:3000/ask", {
        question,
      });
      const answer = response.data.answer || "";
      setResult(answer);

      // Extract JSON object for specialty and route
      const jsonMatch = answer.match(/{[^}]+}/);
      if (jsonMatch) {
        const specialtyData = JSON.parse(jsonMatch[0]);
        if (specialtyData?.route) {
          setSpecialtyRoute(specialtyData.route);
        }
      }
    } catch (error) {
      console.error(error);
      message.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  // Navigate when button clicked
 const handleNavigate = () => {
if (specialtyRoute) {
  const url = new URL('http://dummy.com' + specialtyRoute);
  const specialtyParam = url.searchParams.get('specialty') || '';

  navigate(`/doctors?specialty=${encodeURIComponent(specialtyParam)}`);
}

};


  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          flex: 1,
          padding: "2rem 3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 560,
            background: "#f7fff8cc",
            padding: "1.8rem 2.2rem",
            borderRadius: 14,
            boxShadow: "0 8px 30px rgba(9, 97, 9, 0.36)",
          }}
        >
          <Title
            level={3}
            style={{
              color: "#2a5d34",
              fontWeight: 700,
              letterSpacing: "0.05em",
              marginBottom: 16,
            }}
          >
            Disease Checker
          </Title>
          <Paragraph
            style={{
              color: "#4a7a47",
              fontSize: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            Fill out the form with your symptoms. Our AI-powered system analyzes
            the data to provide a possible diagnosis and recommendations.
          </Paragraph>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
          >
            <Form.Item
              name="age"
              label="Age"
              rules={[{ required: true, message: "Please enter your age" }]}
            >
              <Input
                type="number"
                placeholder="Enter your age"
                size="middle"
                style={{
                  borderRadius: 10,
                  borderColor: "#a5c4a1",
                  fontSize: 14,
                  padding: "8px 12px",
                }}
              />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true, message: "Please select your gender" }]}
            >
              <Select
                placeholder="Select gender"
                size="middle"
                style={{ borderRadius: 10, fontSize: 14 }}
                popupClassName="custom-select-dropdown"
              >
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="skinType"
              label="Skin Type"
              rules={[
                { required: true, message: "Please select your skin type" },
              ]}
            >
              <Select
                placeholder="Select skin type"
                size="middle"
                style={{ borderRadius: 10, fontSize: 14 }}
                popupClassName="custom-select-dropdown"
              >
                <Option value="dry">Dry</Option>
                <Option value="oily">Oily</Option>
                <Option value="combination">Combination</Option>
                <Option value="sensitive">Sensitive</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="symptoms"
              label="Symptoms"
              rules={[
                { required: true, message: "Please describe your symptoms" },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Describe your skin issue or symptoms"
                size="middle"
                maxLength={500}
                showCount
                style={{ borderRadius: 10, fontSize: 14, padding: 10 }}
              />
            </Form.Item>

            <Form.Item
              name="duration"
              label="Duration"
              rules={[{ required: true, message: "Please specify duration" }]}
            >
              <Input
                placeholder="How long have you had these symptoms?"
                size="middle"
                style={{
                  borderRadius: 10,
                  borderColor: "#a5c4a1",
                  fontSize: 14,
                  padding: "8px 12px",
                }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="middle"
                loading={loading}
                style={{
                  borderRadius: 50,
                  width: 140,
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  background: "linear-gradient(135deg, #2e7d32, #1b5e20)",
                  boxShadow: "0 6px 18px #2e7d3288",
                  transition: "all 0.4s ease",
                  border: "none",
                  fontSize: 15,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #1b5e20, #2e7d32)";
                  e.currentTarget.style.boxShadow = "0 8px 22px #1b5e2088";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #2e7d32, #1b5e20)";
                  e.currentTarget.style.boxShadow = "0 6px 18px #2e7d3288";
                }}
              >
                Analyze
              </Button>
            </Form.Item>
          </Form>

          {loading && (
            <div style={{ marginTop: 20 }}>
              <Spin size="large" tip="Analyzing your symptoms..." />
            </div>
          )}

          {result && !loading && (
            <div
              style={{
                marginTop: 28,
                background: "linear-gradient(135deg, #d0f0c0, #a0d468)",
                border: "1px solid rgb(31, 92, 5)",
                borderRadius: 14,
                padding: "1.3rem 1.5rem",
                boxShadow: "0 8px 22px rgba(20, 119, 94, 0.67)",
                fontSize: "1.1rem",
                color: "#2e5d23",
                lineHeight: 1.5,
                fontWeight: 600,
                whiteSpace: "pre-line",
              }}
            >
              <Title
                level={4}
                style={{
                  color: "#33691e",
                  marginBottom: "0.8rem",
                  fontWeight: 700,
                }}
              >
                AI Diagnosis Result
              </Title>
              <Paragraph>{result}</Paragraph>

              {/* Show button only if route is available */}
              {specialtyRoute && (
                <Button
                  type="primary"
                  onClick={handleNavigate}
                  style={{
                    marginTop: 20,
                    borderRadius: 50,
                    width:280,
                    fontWeight: 700,
                    letterSpacing: "0.07em",
                    background: "linear-gradient(135deg, #4caf50, #388e3c)",
                    border: "none",
                    fontSize: 16,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, #388e3c, #4caf50)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, #4caf50, #388e3c)";
                  }}
                >
                  Watch Proper Specialists
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          flex: 1,
          backgroundImage: `url('/images/Homeimage.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderTopLeftRadius: 40,
          borderBottomLeftRadius: 40,
          height: "100vh",
          overflow: "hidden",
        }}
      />
    </div>
  );
};

export default DiseaseChecker;

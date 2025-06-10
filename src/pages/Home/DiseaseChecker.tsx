import React, { useState } from 'react';
import { Form, Input, Select, Button, Typography, message, Spin } from 'antd';
import axios from 'axios';

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

  const onFinish = async (values: FormValues) => {
    const { age, gender, skinType, symptoms, duration } = values;
    const question = `I'm a ${age}-year-old ${gender} with ${skinType} skin. I've had ${symptoms} for ${duration}. What disease might I have and what should I do? Answer ONLY 4-5 short sentences about the most likely disease and what to do. No extra details.`;

    setLoading(true);
    setResult(null);

    try {
      const response = await axios.post('http://localhost:3000/ask', { question });
      setResult(response.data.answer || JSON.stringify(response.data, null, 2));
    } catch (error) {
      console.error(error);
      message.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* LEFT FORM SIDE */}
      <div
        style={{
          flex: 1,
          padding: '2rem 3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflowY: 'auto',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 560,
            background: '#f7fff8cc',
            padding: '1.8rem 2.2rem',
            borderRadius: 14,
            boxShadow: '0 8px 30px rgba(9, 97, 9, 0.36)',
          }}
        >
          <Title
            level={3}
            style={{ color: '#2a5d34', fontWeight: 700, letterSpacing: '0.05em', marginBottom: 16 }}
          >
            Disease Checker
          </Title>
          <Paragraph
            style={{ color: '#4a7a47', fontSize: '1rem', marginBottom: '1.5rem' }}
          >
            Fill out the form with your symptoms. Our AI-powered system analyzes the data
            to provide a possible diagnosis and recommendations.
          </Paragraph>

          <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
            <Form.Item
              name="age"
              label="Age"
              rules={[{ required: true, message: 'Please enter your age' }]}
            >
              <Input
                type="number"
                placeholder="Enter your age"
                size="middle"
                style={{
                  borderRadius: 10,
                  borderColor: '#a5c4a1',
                  fontSize: 14,
                  padding: '8px 12px',
                }}
              />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true, message: 'Please select your gender' }]}
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
              rules={[{ required: true, message: 'Please select your skin type' }]}
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
              rules={[{ required: true, message: 'Please describe your symptoms' }]}
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
              rules={[{ required: true, message: 'Please specify duration' }]}
            >
              <Input
                placeholder="How long have you had these symptoms?"
                size="middle"
                style={{
                  borderRadius: 10,
                  borderColor: '#a5c4a1',
                  fontSize: 14,
                  padding: '8px 12px',
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
                  letterSpacing: '0.05em',
                  background: 'linear-gradient(135deg, #2e7d32, #1b5e20)',
                  boxShadow: '0 6px 18px #2e7d3288',
                  transition: 'all 0.4s ease',
                  border: 'none',
                  fontSize: 15,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    'linear-gradient(135deg, #1b5e20, #2e7d32)';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    '0 8px 22px #1b5e2088';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    'linear-gradient(135deg, #2e7d32, #1b5e20)';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    '0 6px 18px #2e7d3288';
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
                background: 'linear-gradient(135deg, #d0f0c0, #a0d468)',
                border: '1px solidrgb(31, 92, 5)',
                borderRadius: 14,
                padding: '1.3rem 1.5rem',
                boxShadow: '0 8px 22pxrgba(20, 119, 94, 0.67)',
                fontSize: '1.1rem',
                color: '#2e5d23',
                lineHeight: 1.5,
                fontWeight: 600,
                whiteSpace: 'pre-line',
              }}
            >
              <Title
                level={4}
                style={{ color: '#33691e', marginBottom: '0.8rem', fontWeight: 700 }}
              >
                AI Diagnosis Result
              </Title>
              <Paragraph>{result}</Paragraph>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT IMAGE SIDE (fixed height, no stretching) */}
      <div
        style={{
          flex: 1,
          backgroundImage: `url('/images/Homeimage.jpg')`, // your image path here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderTopLeftRadius: 40,
          borderBottomLeftRadius: 40,
          height: '100vh',  // FIXED height so it won't stretch vertically
          minHeight: 'auto',
          overflow: 'hidden',
        }}
      />
    </div>
  );
};

export default DiseaseChecker;

import React, { useState } from "react";
import { Form, Input, Button, message, Typography } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";

import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const { Text } = Typography;

export default function Registration() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    const { username, email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      message.error("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      message.success("Registration successful! Redirecting to login...");
      navigate("/login");
    } catch (error: any) {
      let errorMessage = "Registration failed.";
      if (error.code) {
        switch (error.code) {
          case "auth/email-already-in-use":
            errorMessage = "Email is already in use.";
            break;
          case "auth/invalid-email":
            errorMessage = "Invalid email address.";
            break;
          case "auth/weak-password":
            errorMessage = "Weak password. Use at least 6 characters.";
            break;
          default:
            errorMessage = error.message || errorMessage;
        }
      }
      message.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 420,
        margin: "80px auto 40px",
        padding: "3rem 2.5rem",
        backgroundColor: "#D1E7CE",
        boxShadow: "0 12px 30px rgba(20, 83, 45, 0.4)",
        borderRadius: 0, // No border-radius
      }}
    >
      <Form
        name="registration"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label={
            <Text strong style={{ color: "#14532D" }}>
              Username
            </Text>
          }
          name="username"
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input placeholder="Enter your username" />
        </Form.Item>

        <Form.Item
          label={
            <Text strong style={{ color: "#14532D" }}>
              Email
            </Text>
          }
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input type="email" placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label={
            <Text strong style={{ color: "#14532D" }}>
              Password
            </Text>
          }
          name="password"
          rules={[{ required: true, message: "Please create a password" }]}
          hasFeedback
        >
          <Input.Password
            placeholder="Create a password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <Form.Item
          label={
            <Text strong style={{ color: "#14532D" }}>
              Confirm Password
            </Text>
          }
          name="confirmPassword"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true, message: "Please confirm your password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("Passwords do not match!");
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Confirm your password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loading}
            style={{
              backgroundColor: "#1E7F3E",
              borderColor: "#14532D",
              borderRadius: "15px",
              fontWeight: 700,
              fontSize: "1.2rem",
              boxShadow: "0 4px 10px rgba(20, 83, 45, 0.4)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1E7F3E";
              e.currentTarget.style.borderColor = "#1E7F3E";
              e.currentTarget.style.boxShadow =
                "0 6px 14px rgba(20, 83, 45, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#14532D";
              e.currentTarget.style.borderColor = "#14532D";
              e.currentTarget.style.boxShadow =
                "0 4px 10px rgba(20, 83, 45, 0.4)";
            }}
          >
            Sign Up
          </Button>
        </Form.Item>

        <Form.Item style={{ textAlign: "center" }}>
          <span style={{ color: "#14532D", fontWeight: 600, fontSize: 15 }}>
            Already have an account?{" "}
          </span>
          <Link to="/login">
            <Button
              type="link"
              style={{ color: "#1E7F3E", fontWeight: 700, padding: 0 }}
            >
              Log In
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}

import styles from "./Registration.module.scss";
import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";

export default function Registration() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("user", JSON.stringify({
      username: form.username,
      email: form.email,
      password: form.password,
    }));

    alert("Registration successful!");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <span>Username:</span>
        <Input
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Enter your username"
        />
      </div>

      <div className={styles.item}>
        <span>Email:</span>
        <Input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>

      <div className={styles.item}>
        <span>Password:</span>
        <Input.Password
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Create a password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </div>

      <div className={styles.item}>
        <span>Confirm Password:</span>
        <Input.Password
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </div>

      <div className={styles.actions}>
        <Button type="primary" block onClick={handleRegister}>
          Sign Up
        </Button>
        <div className={styles.signup}>
          <span>Already have an account?</span>{" "}
          <Link to="/login">
            <Button type="link">Log In</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

import styles from "./Login.module.scss";
import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (
      username === savedUser.username &&
      password === savedUser.password
    ) {
      alert("Login successful!");
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <span>Login:</span>
        <Input
          placeholder="Input Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className={styles.item}>
        <span>Password:</span>
        <Input.Password
          placeholder="Input Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </div>

      <div className={styles.actions}>
        <Button type="primary" block onClick={handleLogin}>
          Log In
        </Button>
        <div className={styles.signup}>
          <span>First time here?</span>{" "}
          <Link to="/registration">
            <Button type="link">Sign Up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

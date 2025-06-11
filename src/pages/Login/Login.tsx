import styles from "./Login.module.scss";
import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../../features/auth/authSlice";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(userLoggedIn(userCredential.user));
      message.success("Login successful!");
      navigate("/home");
    } catch (error: any) {
      let errorMessage = "Login failed: An unknown error occurred.";
      switch (error.code) {
        case 'auth/invalid-email':
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          errorMessage = "Invalid email or password.";
          break;
        case 'auth/user-disabled':
          errorMessage = "Your account has been disabled.";
          break;
        case 'auth/too-many-requests':
          errorMessage = "Too many login attempts. Please try again later.";
          break;
        default:
          errorMessage = `Login failed: ${error.message}`;
      }
      message.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <span>Email:</span>
        <Input
          placeholder="Input Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
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
          disabled={loading}
        />
      </div>

      <div className={styles.actions}>
        <Button
          type="primary"
          block
          onClick={handleLogin}
          loading={loading}
          disabled={loading}
        >
          Log In
        </Button>
        <div className={styles.signup}>
          <span>First time here?</span>
          <Link to="/registration">
            <Button type="link" disabled={loading}>
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

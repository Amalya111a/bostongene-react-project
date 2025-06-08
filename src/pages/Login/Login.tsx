// src/pages/Login.tsx
import styles from "./Login.module.scss";
import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux"; // Correct useDispatch import
import { userLoggedIn } from "../../features/auth/authSlice"; // Use the new action name

import { auth } from "../../firebase"; // <<< YOU MISSED THIS IMPORT IN YOUR PROVIDED CODE
import { signInWithEmailAndPassword } from "firebase/auth"; // Correct import for sign-in method


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch(); // <<< useDispatch must be called inside the component

  const handleLogin = async () => {
    setLoading(true); // Start loading state
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth, // Use the imported 'auth' instance
        email,
        password
      );

      // On successful Firebase login, tell Redux the user is logged in
      // The `onAuthStateChanged` listener in App.tsx will also catch this
      // but dispatching here provides immediate UI update for the Login component itself.
      dispatch(userLoggedIn(userCredential.user)); // Dispatch the action with the user object

      message.success("Login successful!");
      navigate("/home"); // Redirect to home on successful login

    } catch (error: any) {
      console.error("Login failed:", error);
      let errorMessage = "Login failed: An unknown error occurred.";

      if (error.code) {
        switch (error.code) {
          case 'auth/invalid-email':
          case 'auth/user-not-found':
            errorMessage = "Invalid email or password.";
            break;
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
            break;
        }
      } else if (error.message) {
        errorMessage = `Login failed: ${error.message}`;
      }
      message.error(errorMessage);

    } finally {
      setLoading(false); // Ensure loading state is reset
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
          <span>First time here?</span>{" "}
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
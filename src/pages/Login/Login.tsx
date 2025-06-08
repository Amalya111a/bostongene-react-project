// src/pages/Login.tsx
import styles from "./Login.module.scss";
import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, message } from "antd"; // Import 'message' for Ant Design notifications
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../../firebase"; // Only need 'auth' now
import { signInWithEmailAndPassword } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore"; // No longer needed if not fetching username from Firestore

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true); // Start loading state
    try {
      // 1. Authenticate user with email and password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // --- REMOVED FIRESTORE getDoc CALL ---
      // Since you removed storing username in Firestore during registration,
      // fetching it here will always result in "No user data found".
      // If you need a display name, consider Firebase Auth's updateProfile during registration
      // and then access userCredential.user.displayName here.
      /*
      const userId = userCredential.user.uid;
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const username = docSnap.data().username;
        message.success(`Welcome, ${username}!`); // Use Ant Design message
      } else {
        message.warning("User data not found in Firestore. Logging in without profile data."); // Use Ant Design message
      }
      */
      // --- END REMOVED BLOCK ---

      message.success("Login successful!"); // General success message
      navigate("/home"); // Redirect to home on successful login

    } catch (error: any) {
      console.error("Login failed:", error); // Log the full error object
      let errorMessage = "Login failed: An unknown error occurred.";

      if (error.code) {
        // Firebase Auth specific errors
        switch (error.code) {
          case 'auth/invalid-email':
          case 'auth/user-not-found': // user-not-found is often for email
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
        // Other types of errors (e.g., network)
        errorMessage = `Login failed: ${error.message}`;
      }
      message.error(errorMessage); // Use Ant Design message for errors

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
          disabled={loading} // Disable input while loading
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
          disabled={loading} // Disable input while loading
        />
      </div>

      <div className={styles.actions}>
        <Button
          type="primary"
          block
          onClick={handleLogin}
          loading={loading} // Apply loading prop
          disabled={loading} // Explicitly disable
        >
          Log In
        </Button>
        <div className={styles.signup}>
          <span>First time here?</span>{" "}
          <Link to="/registration">
            <Button type="link" disabled={loading}> {/* Disable link button while loading */}
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
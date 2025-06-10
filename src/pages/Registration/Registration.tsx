// src/pages/Registration.tsx
import React, { useState } from "react";
import { Input, Button, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";

import { auth } from "../../firebase"; // No longer need 'db' if not using Firestore for profiles
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore"; // Remove Firestore imports if not used

import styles from "./Registration.module.scss";

export default function Registration() {
  const [form, setForm] = useState({
    username: "", // You still capture this in the form, but it won't be stored in Firestore by this page.
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    // Basic client-side validation
    if (!form.username || !form.email || !form.password || !form.confirmPassword) {
      message.warning("Please fill in all fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      message.error("Passwords do not match!");
      return;
    }

    setLoading(true); // Start loading state
    console.log("Registration process started...");

    try {
      console.log("Attempting to create user with email:", form.email);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      // const user = userCredential.user; // If not using user.uid for Firestore, this line is not strictly needed here
      console.log("User created successfully in Firebase Auth. UID:", userCredential.user.uid);

      // --- REMOVED FIRESTORE setDoc CALL ---
      // If you don't need to store username/email in Firestore, remove this block:
      /*
      console.log("Attempting to set user document in Firestore for UID:", user.uid);
      await setDoc(doc(db, "users", user.uid), {
        username: form.username,
        email: form.email,
        createdAt: new Date().toISOString(),
      });
      console.log("User document successfully written to Firestore.");
      */
      // --- END REMOVED BLOCK ---


      message.success("Registration successful! Redirecting to login...");
      console.log("Attempting to navigate to /login...");
      navigate("/login");
      console.log("Navigation to /login initiated.");

    } catch (error: any) {
      console.error("Registration failed:", error); // Log the full error object
      let errorMessage = "An unknown error occurred during registration.";

      if (error.code) {
        // Firebase Auth specific errors
        switch (error.code) {
          case 'auth/email-already-in-use':
            errorMessage = "This email is already in use. Please try another or log in.";
            break;
          case 'auth/invalid-email':
            errorMessage = "The email address is not valid.";
            break;
          case 'auth/weak-password':
            errorMessage = "The password is too weak. Please use at least 6 characters.";
            break;
          // 'permission-denied' case is no longer relevant if setDoc is removed
          default:
            errorMessage = `Firebase error: ${error.message}`;
            break;
        }
      } else if (error.message) {
        // Other types of errors (e.g., network, or non-Firebase specific issues)
        errorMessage = `Error: ${error.message}`;
      }

      message.error(errorMessage);

    } finally {
      setLoading(false); // Ensure loading state is reset
      console.log("Registration process finished (loading state reset).");
    }
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
          disabled={loading}
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
          disabled={loading}
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
          disabled={loading}
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
          disabled={loading}
        />
      </div>

      <div className={styles.actions}>
        <Button
          type="primary"
          block
          onClick={handleRegister}
          loading={loading}
          disabled={loading}
        >
          Sign Up
        </Button>

        <div className={styles.signup}>
          <span>Already have an account?</span>{" "}
          <Link to="/login">
            <Button type="link" disabled={loading}>
              Log In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
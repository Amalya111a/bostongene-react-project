// src/App.tsx
import React, { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import AppFooter from "./components/Foooter";
import "./App.css";

import { auth } from "./firebase"; // Make sure 'auth' is imported from your firebase config
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector
import { userLoggedIn, userLoggedOut } from "./features/auth/authSlice"; // Use the new action names
import { RootState } from "./app/store"; // Import RootState for type checking

const App = () => {
  const dispatch = useDispatch();
  // Get the loading state from Redux to show a temporary loading screen
  const authLoading = useSelector((state: RootState) => state.auth.loading);

  useEffect(() => {
    // This listener automatically updates your Redux state
    // whenever the user logs in, logs out, or on initial app load.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in according to Firebase
        console.log("Firebase detected: User is logged in. Dispatching userLoggedIn.");
        dispatch(userLoggedIn(user)); // Dispatch action with the user object
      } else {
        // User is logged out according to Firebase
        console.log("Firebase detected: User is logged out. Dispatching userLoggedOut.");
        dispatch(userLoggedOut()); // Dispatch action to clear user
      }
      // The loading state is now managed within userLoggedIn/userLoggedOut actions.
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, [dispatch]); // dispatch is a stable function, but include it for linting.

  // Display a loading message while Firebase checks the initial auth status
  if (authLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '24px' }}>
        Checking authentication status...
      </div>
    );
  }

  // Once authentication status is known, render the main app
  return (
    <>
      <Navbar /> {/* Navbar will now use Redux to check auth status */}
      <div>
        <AppRoutes />
      </div>
      <AppFooter />
    </>
  );
};

export default App;
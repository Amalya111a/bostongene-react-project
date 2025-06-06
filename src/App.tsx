import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import AppFooter from "./components/Foooter";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <AppRoutes />
      </div>
      <AppFooter />
    </>
  );
};

export default App;

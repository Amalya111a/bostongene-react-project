import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import AppFooter from "./components/Foooter";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <AppRoutes />
      </div>
      <AppFooter />
    </BrowserRouter>
  );
};

export default App;
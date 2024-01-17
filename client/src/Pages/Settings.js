import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import Button from "@mui/material/Button";

const Settings = () => {
  // Styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    fontSize: "1rem",
  };

  return (
    <div style={containerStyle}>
      <Header />
      <div style={contentStyle}>Settings</div>
      <Footer />
    </div>
  );
};

export default Settings;

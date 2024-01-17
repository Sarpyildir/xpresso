import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import Button from "@mui/material/Button";
// TODO: session storage ile userData'yı bağla.
const Settings = () => {
  // Styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    fontSize: "1rem",
  };
  const storedUserData = JSON.parse(sessionStorage.getItem("user"));
  const userData = {
    username: "Sarpyildir",
    name: "Sarp",
    surname: "Yıldırım",
    email: "sarpyildir@gmail.com",
  };
  return (
    <div style={containerStyle}>
      <Header />
      <div>
        <h1>User Information</h1>
        <div>
          <p>Username: {userData.username} </p>
        </div>
        <div>
          <p>Name: {userData.name} </p>
        </div>
        <div>
          <p>Surname: {userData.surname} </p>
        </div>
        <div>
          <p>Email: {userData.email} </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;

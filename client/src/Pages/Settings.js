import React from "react";
import { useState } from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import SettingsEdit from "./SettingsEdit.js";
import SettingsChangePass from "./SettingsChangePass.js";
import Button from "@mui/material/Button";

const Settings = () => {
  // Styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    fontSize: "1rem",
  };
  const contentStyle = {
    display: "flex",
    flexDirection: "row",
    flexGrow: "1",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#783F0B",
  };
  const userInfoStyle = {
    marginTop: "0px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#FFF8EA",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "9px",
    fontSize: "1.2rem",
  };
  const buttonStyle = {
    color: "#9E7676", // This is for the text color
    borderRadius: "25px", // Adjust the border-radius to match the button's curvature
    padding: "0px 20px 0px 20px", // Adjust the padding to match the button's size
    cursor: "pointer",
    borderWidth: "3px",
    borderColor: "#9E7676",
    letterSpacing: "1px",
    fontWeight: "bold", // If the text is bold
    height: "50px",
    marginLeft: "10px",
    ":hover": {
      borderWidth: "3px",
      color: "#FFF8EA",
      backgroundColor: "#9E7676",
      borderColor: "#FFF8EA",
    },
  };
  const buttonStyle2 = {
    color: "#FFF8EA", // This is for the text color
    borderRadius: "25px", // Adjust the border-radius to match the button's curvature
    padding: "10px 20px", // Adjust the padding to match the button's size
    cursor: "pointer",
    borderWidth: "3px",
    borderColor: "#9E7676",
    letterSpacing: "2px",
    fontWeight: "bold", // If the text is bold
    height: "50px",
    marginLeft: "10px",
    marginRight: "10px",
    backgroundColor: "#9E7676",
    ":hover": {
      borderWidth: "3px",
      color: "#9E7676",
      backgroundColor: "#FFF8EA",
      borderColor: "#9E7676",
    },
  };
  const editFormStyle = {
    marginLeft: "50px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#FFF8EA",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: "500px",
  };
  const passwordFormStyle = {
    marginRight: "50px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#FFF8EA",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: "400px",
  };
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const handleEdit = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };
  const handleChangePassword = () => {
    setIsChangingPassword((prevIsChangingPassword) => !prevIsChangingPassword);
  };
  const userData = JSON.parse(sessionStorage.getItem("user"));
  console.log(userData);
  /*
  const userData = {
    username: "Sarpyildir",
    name: "Sarp",
    surname: "Yıldırım",
    email: "sarpyildir@gmail.com",
  };*/
  return (
    <div style={containerStyle}>
      <Header title="SETTINGS" />
      <div style={contentStyle}>
        {isChangingPassword && (
          <div style={passwordFormStyle}>
            {/* Render your form here */}
            <SettingsChangePass onCancel={handleChangePassword} />
          </div>
        )}
        <div style={userInfoStyle}>
          <h1>User Information</h1>
          <img
            src={userData.profilePicture}
            alt="Preview of uploaded file"
            style={{ width: "150px", height: "150px", margin: "10px" }}
          />
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
          <div>
            <Button
              variant="outlined"
              sx={buttonStyle}
              onClick={handleChangePassword}
            >
              Change Password
            </Button>
            <Button variant="outlined" sx={buttonStyle2} onClick={handleEdit}>
              Edit
            </Button>
          </div>
        </div>
        {isEditing && (
          <div style={editFormStyle}>
            {/* Render your form here */}
            <SettingsEdit userData={userData} onCancel={handleEdit} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Settings;

import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import TextField from "@mui/material/TextField";
import axios from "axios";
//TODO: save tuşununun fonksiyonalitesini ayarla.
const SettingsChangePass = (props) => {
  const gridContainerStyle = {
    height: "100%",
    padding: "10px 20px 0px 20px",
  };

  const gridInputContainerStyle = {
    display: "grid",
    gridTemplateRows: "2fr 1fr",
  };
  const gridInputsStyle = {
    display: "grid",
    gridTemplateRows: "1fr 1fr 1fr",
    height: "100%",
    gap: "20px",
  };
  const gridButtonsStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const userString = sessionStorage.getItem("user");
  const user = JSON.parse(userString);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match.");
      return;
    }

    try {
      const response = await axios.put(
        "http://localhost:5000/api/user/changePassword",
        {
          email: user.email, // Make sure 'user.email' is correctly defined
          password: currentPassword,
          newPassword: newPassword,
        }
      );

      alert("Password changed successfully");
      props.onCancel(); // Close form or redirect
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error data:", error.response.data);
        alert(error.response.data.message || "Error occurred");
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error", error.message);
      }
    }
  };

  return (
    <form
      style={{
        height: "100%",
        textAlign: "center",
      }}
      onSubmit={handleSubmit}
    >
      <h1>Change Password</h1>
      <div style={gridContainerStyle}>
        <div style={gridInputContainerStyle}>
          <div style={gridInputsStyle}>
            <TextField
              id="outlined-basic"
              label="Current Password"
              variant="outlined"
              size="small"
              type="password"
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="New Password"
              variant="outlined"
              size="small"
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <TextField
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              size="small"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div style={gridButtonsStyle}>
            <div className="ui buttons">
              <button
                className="ui button"
                type="button"
                style={{
                  backgroundColor: "#9E7676",
                  color: "#FFF8EA",
                  borderRadius: "50px",
                }}
                onClick={props.onCancel}
              >
                Cancel
              </button>
              <div className="or"></div>
              <button
                className="ui positive button"
                type="submit"
                style={{ borderRadius: "50px" }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SettingsChangePass;

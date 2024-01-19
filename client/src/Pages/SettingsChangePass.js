import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import TextField from "@mui/material/TextField";
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

  return (
    <form
      style={{
        height: "100%",
        textAlign: "center",
      }}
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
            />
            <TextField
              id="outlined-basic"
              label="New Password"
              variant="outlined"
              size="small"
              type="password"
            />

            <TextField
              id="outlined-basic"
              label="New Password"
              variant="outlined"
              size="small"
              type="password"
            />
          </div>
          <div style={gridButtonsStyle}>
            <div class="ui buttons">
              <button
                class="ui button"
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
              <div class="or"></div>
              <button
                class="ui positive button"
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

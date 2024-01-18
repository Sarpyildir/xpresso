import React from "react";
import "semantic-ui-css/semantic.min.css";
import TextField from "@mui/material/TextField";
//TODO: save tuşununun fonksiyonalitesini ayarla.
const SettingsEdit = (props) => {
  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    height: "100%",
    gap: "20px",
    padding: "20px",
  };
  const gridImageContainerStyle = {
    height: "100%",
  };
  const gridInputContainerStyle = {
    display: "grid",
    gridTemplateRows: "2fr 1fr",
  };
  const gridInputsStyle = {
    height: "100%",
  };
  const gridButtonsStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <form style={{ height: "100%" }}>
      <h1>Edit Information</h1>
      <div style={gridContainerStyle}>
        <div style={gridImageContainerStyle}>
          <div
            style={{
              display: "grid",
              placeItems: "center",
            }}
          >
            <img
              src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
              alt="Preview of uploaded image"
              style={{ width: "150px", height: "150px", margin: "10px" }}
            />

            {/* handleimagechange*/}
          </div>
        </div>
        <div style={gridInputContainerStyle}>
          <div style={gridInputsStyle}>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              size="small"
              style={{ margin: "0px 0px 10px 0px" }}
              value={props.userData.username}
            />
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              size="small"
              value={props.userData.name}
              style={{ margin: "10px 0 10px 0" }}
            />

            <TextField
              id="outlined-basic"
              label="Surname"
              variant="outlined"
              size="small"
              style={{ margin: "10px 0 10px 0" }}
              value={props.userData.surname}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              size="small"
              type="email"
              value={props.userData.email}
              style={{ margin: "10px 0 0px 0" }}
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

export default SettingsEdit;

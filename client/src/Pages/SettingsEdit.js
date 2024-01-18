import React from "react";
import "semantic-ui-css/semantic.min.css";

const SettingsEdit = (props) => {
  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 3fr",
    height: "100%",
    gap: "20px",
  };
  const gridImageContainerStyle = {
    height: "100%",
  };
  const gridInputContainerStyle = {
    display: "grid",
    gridTemplateRows: "2fr 1fr",
  };
  const gridInputsStyle = {
    display: "grid",
    gridTemplateRows: "1fr 1fr 1fr",
    gridTemplateColumns: "1fr 2fr",

    height: "100%",
  };
  const gridButtonsStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px",
  };
  const centeredStyle = {
    marginLeft: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  };
  const centeredInputStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
    height: "70%",
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
            <label style={centeredStyle} htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={props.userData.username}
              style={centeredInputStyle}
            />
            <label style={centeredStyle} htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={props.userData.name}
              style={centeredInputStyle}
            />

            <label style={centeredStyle} htmlFor="surname">
              Surname:
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={props.userData.surname}
              style={centeredInputStyle}
            />
            <label style={centeredStyle} htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={props.userData.email}
              style={centeredInputStyle}
            />
          </div>
          <div style={gridButtonsStyle}>
            <div class="ui buttons">
              <button class="ui button" type="button" onClick={props.onCancel}>
                Cancel
              </button>
              <div class="or"></div>
              <button class="ui positive button" type="submit">
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

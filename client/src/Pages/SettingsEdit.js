import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import TextField from "@mui/material/TextField";
import FileUpload from "../Components/FileUpload.js";
import resizeAndBase64 from "../utils/resizeAndBase64.js";
import axios from "axios";

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
  const [previewFile, setPreviewFile] = useState(props.userData.profilePicture);
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [profilePicture, setProfilePicture] = React.useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setProfilePicture(await resizeAndBase64(file));
    setPreviewFile(URL.createObjectURL(file));
  };
  const handleSaveClick = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    axios
      .put("http://localhost:5000/api/user/editProfile", {
        name: name,
        surname: surname,
        username: username,
        oldEmail: props.userData.email.toLowerCase(),
        email: email.toLowerCase(),
        profilePicture: profilePicture,
      })
      .then(() => {
        const userString = sessionStorage.getItem("user");
        const oldUser = JSON.parse(userString);
        localStorage.clear();
        sessionStorage.clear();

        sessionStorage.setItem(
          "user",
          JSON.stringify({
            name: name || oldUser.name,
            surname: surname || oldUser.surname,
            username: username || oldUser.username,
            email: email ? email.toLowerCase() : oldUser.email,
            profilePicture: profilePicture || oldUser.profilePicture,
          })
        );
        window.location.reload();
      })
      .catch((err) => {
        // Error handling
        if (err.response) {
          // The server responded with a status code outside the 2xx range
          console.log("Error data:", err.response.data);
          alert("Update of information failed: " + err.response.data);
        } else if (err.request) {
          // The request was made but no response was received
          console.log("No response was received");
          alert("No response from the server");
        } else {
          // Something happened in setting up the request
          console.log("Error:", err.message);
          alert("An error occurred: " + err.message);
        }
      });
  };
  return (
    <form style={{ height: "100%", textAlign: "center" }}>
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
              src={previewFile}
              alt="Preview of uploaded file"
              style={{ width: "150px", height: "150px", margin: "10px" }}
            />

            {/* handleimagechange*/}
            <FileUpload text="change" onChange={handleFileChange} />
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
              defaultValue={props.userData.username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              size="small"
              defaultValue={props.userData.name}
              style={{ margin: "10px 0 10px 0" }}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <TextField
              id="outlined-basic"
              label="Surname"
              variant="outlined"
              size="small"
              style={{ margin: "10px 0 10px 0" }}
              defaultValue={props.userData.surname}
              onChange={(e) => {
                setSurname(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              size="small"
              type="email"
              defaultValue={props.userData.email}
              style={{ margin: "10px 0 0px 0" }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
                onClick={handleSaveClick}
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

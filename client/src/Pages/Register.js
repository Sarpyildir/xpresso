import React from "react";
import TextField from "@mui/material/TextField";
import FileUpload from "../Components/FileUpload";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DoubleButton from "../Components/DoubleButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import resizeAndBase64 from "../../utils/resizeAndBase64";

// TODO: form'da profil fotoğrafını da kaydetmeliyiz.
// TODO: TERMS & CONDITIONS yazısı, yazıyı gösterme lazım - sona bırakılabilir.

const Register = () => {
  const gridStyle = {
    height: "80%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    zIndex: 2, // Ensure it's above the backDiv
    position: "relative", // Needed to establish a stacking context for z-index
    width: "100%",
    // ... other styles
  };

  const leftGridStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    maxWidth: "100%",
    justifySelf: "end",
    padding: "2em",
    boxSizing: "border-box",
  };
  const rightGridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr 6fr",
    width: "90%",
    maxWidth: "100%",
    padding: "2em",
    boxSizing: "border-box",
  };
  const rightGridFormStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto auto auto auto auto ",
    gap: "0.4em",
  };
  const [buttonText, setButtonText] = React.useState("Upload Profile Picture");
  const [previewFile, setPreviewFile] = React.useState("");
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [profilePicture, setProfilePicture] = React.useState("");
  const [termsAndConditions, setTermsAndConditions] = React.useState(false);
  const handleRegister = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (!termsAndConditions) {
      alert("Please accept terms and conditions");
    } else {
      axios
        .post("http://localhost:5000/api/register/newUser", {
          name: name,
          surname: surname,
          username: username,
          email: email,
          password: password,
          profilePicture: profilePicture,
        })
        .then((res) => {
          navigate("/login");
        })
        .catch((err) => {
          // Error handling
          if (err.response) {
            // The server responded with a status code outside the 2xx range
            console.log("Error data:", err.response.data);
            console.log("Error status:", err.response.status);
            alert("Registration failed: " + err.response.data);
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
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setProfilePicture(await resizeAndBase64(file));
    setPreviewFile(URL.createObjectURL(file));
    setButtonText("Change");
  };
  const navigate = useNavigate();
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div style={gridStyle}>
        <div style={leftGridStyle}>
          <img src="./coffee.png" alt="Logo of website" width={"200px"} />

          <div
            style={{
              display: "grid",
              placeItems: "center",
              textAlign: "center",
            }}
          >
            <h1> WELCOME TO XPRESSO</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              convallis sem nec tortor ullamcorper, ut tincidunt nibh aliquet.
              Curabitur consequat quis tellus at posuere. Sed vestibulum ornare
              enim, id laoreet neque dapibus placerat. Sed nibh orci, vestibulum
              at elementum eu, dictum vel sem. Proin tristique nisl ac leo
              luctus, a lobortis mauris bibendum. Quisque vel lacus leo. Nunc
              mauris erat, commodo eu interdum vel
            </p>
          </div>
        </div>
        <div style={rightGridStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <h1>REGISTERATION FORM</h1>
          </div>
          <form>
            <div style={rightGridFormStyle}>
              <div style={{ display: "grid", placeItems: "center" }}>
                {previewFile && (
                  <img src={previewFile} alt="Preview of uploaded file" />
                )}
              </div>

              <FileUpload onChange={handleFileChange} text={buttonText} />
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                size="small"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                style={{ margin: "1em 0 0.25em 0" }}
              />
              <TextField
                id="outlined-basic"
                label="Surname"
                variant="outlined"
                size="small"
                style={{ margin: "0.25em 0 0.25em 0" }}
                value={surname}
                onChange={(e) => {
                  setSurname(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                size="small"
                style={{ margin: "0.25em 0 0.25em 0" }}
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />

              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                size="small"
                type="email"
                value={email}
                style={{ margin: "0.25em 0 0.25em 0" }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                size="small"
                value={password}
                style={{ margin: "0.25em 0 0 0" }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <div>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="I accept Terms & Conditions"
                  onChange={(e) => {
                    setTermsAndConditions(e.target.checked);
                  }}
                />
              </div>

              <DoubleButton
                firstText="Have an account?"
                firstOnClick={() => {
                  navigate("/login");
                }}
                secondText="Register"
                secondOnClick={(e) => {
                  handleRegister(e);
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;

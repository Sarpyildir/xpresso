import React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DoubleButton from "../Components/DoubleButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// TODO: Password'u bcrypt ile hashle (server side da yapılacaksa nasıl kontrol edeceğiz passwordler uyuyormu diye)

const Login = () => {
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
    display: "flex", // Changed from 'grid' to 'flex' for vertical centering
    flexDirection: "column", // Stack children vertically
    justifyContent: "center", // Center children vertically
    alignItems: "center", // Center children horizontally (if needed)
    width: "90%",
    maxWidth: "100%",
    padding: "2em",
    boxSizing: "border-box",
    height: "100%", // Set the height to enable vertical centering
  };
  const rightGridFormStyle = {
    display: "grid",
    gap: "0.4em",
  };
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);
  const handleLogin = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    axios
      .post("http://localhost:5000/api/login/login", {
        email: email.toLowerCase(),
        password: password,
      })
      .then((res) => {
        // Do not store password in local storage or session storage.

        const userData = {
          email: res.data.email,
          name: res.data.name,
          surname: res.data.surname,
          username: res.data.username,
          profilePicture: res.data.profilePicture,
          _id: res.data._id,
        };

        // if user selects "remember me"
        if (rememberMe) {
          localStorage.setItem("user", JSON.stringify(userData));
          // to retrieve data: const storedUserData = JSON.parse(localStorage.getItem('user'));
        }
        // We set the user data to sessionStorage no matter of remember me selection.
        sessionStorage.setItem("user", JSON.stringify(userData));
        // to retrieve data: const storedUserData = JSON.parse(sessionStorage.getItem('user'));

        navigate("/home");
      })
      .catch((err) => {
        if (err.response) {
          console.log("Error data: ", err.response.data);
          console.log("Error status: ", err.response.status);
          if (err.response.status === 401) {
            alert("Wrong password");
          } else if (err.response.status === 404) {
            alert("User not found");
          }
        } else {
          alert("No response from server");
          console.log("No respone from server");
        }
      });
  };
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
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              padding: "1em",
            }}
          >
            <h1>LOGIN FORM</h1>
          </div>
          <form>
            <div style={rightGridFormStyle}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                size="small"
                value={email}
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
                style={{ marginTop: "0.5em" }}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <div style={{ padding: "0.2em" }}>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Remember Me"
                  onChange={(e) => {
                    setRememberMe(e.target.checked);
                  }}
                />
              </div>

              <DoubleButton
                firstText="Don't Have an Account?"
                firstOnClick={() => {
                  navigate("/register");
                }}
                secondText="Login"
                secondOnClick={(e) => {
                  handleLogin(e);
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;

import React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DoubleButton from "../Components/DoubleButton";
//import resizeAndBase64 from "../../utils/resizeAndBase64";

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
              />

              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                size="small"
                style={{ marginTop: "0.5em" }}
              />

              <div style={{ padding: "0.2em" }}>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Remember Me"
                />
              </div>

              <DoubleButton
                firstText="Don't Have an Account?"
                firstOnClick={() => {}}
                secondText="Login"
                secondOnClick={() => {}}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;

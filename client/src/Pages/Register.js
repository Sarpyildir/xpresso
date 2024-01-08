import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

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
    gridTemplateRows: "2fr 6fr",
    width: "90%",
    maxWidth: "100%",
    padding: "2em",
    boxSizing: "border-box",
  };
  const rightGridFormStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "2fr 2fr 2fr 2fr 2fr 2fr 1fr 2fr",
    gap: "10px",
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
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <p>REGISTER</p>
          </div>
          <form>
            <div style={rightGridFormStyle}>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Upload file
              </Button>
              <TextField id="outlined-basic" label="Name" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="Surname"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                type="email"
              />

              <TextField id="outlined-basic" label="Email" variant="outlined" />

              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
              />

              <div>
                <input type="checkbox" name="rememberMe" />
                <label>Remember me</label>
                <input type="checkbox" name="termsAndConditions" required />
                <label>Terms And Conditions</label>
              </div>

              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;

import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Login = () => {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    backgroundColor: "blue",
  };
  const leftGridStyle = {
    backgroundColor: "green",
  };
  const rightGridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "2fr 5fr",
    backgroundColor: "yellow",
  };
  const rightGridFormStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    gap: "10px",
    backgroundColor: "pink",
  };
  return (
    <div style={{ backgroundColor: "red" }}>
      <div style={gridStyle}>
        <div style={leftGridStyle}>
          <h1>Logo</h1>
          <h2>Welcome</h2>
        </div>
        <div style={rightGridStyle}>
          <div>
            <p>Welcome to XPRESSO</p>
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
              </div>

              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;

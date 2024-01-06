import React from "react";

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
    gridTemplateRows: "1fr 1fr 1fr",
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
              <input type="text" name="name" />

              <input type="text" name="name" />

              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;

import React from "react";
import DropDownMenu from "./DropDownMenu.js";
function Header(props) {
  const headerStyle = {
    backgroundColor: "#FFF8EA",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 4rem",
    fontSize: "18px",
  };
  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold",
  };
  const navStyle = {
    display: "flex",
    gap: "20px",
  };
  const navItemStyle = {
    textDecoration: "none",
    color: "#594545",
  };

  const hrStyle = {
    height: "20px",
    backgroundColor: "#9E7676",
    padding: "0px",
    margin: "0px",
    border: "none",
  };

  const currUser = JSON.parse(sessionStorage.getItem("user"));
  //const currUser = { username: "Sarpyildir" };
  return (
    <div>
      <header style={headerStyle}>
        <div style={logoStyle}>{props.title || "XPRESSO"}</div>
        <nav style={navStyle}>
          <a href="/home" style={navItemStyle}>
            Home
          </a>
          <a href="/blog" style={navItemStyle}>
            Blog
          </a>
          <a href="/coffee" style={navItemStyle}>
            Coffee
          </a>
          <a href="/bean" style={navItemStyle}>
            Bean
          </a>
        </nav>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={currUser.profilePicture}
            alt="Profile"
            width="50px"
            style={{ borderRadius: "50%", marginRight: "5px" }}
          />
          <DropDownMenu username={currUser.username} />
        </div>
      </header>
      <hr style={hrStyle} />
    </div>
  );
}
export default Header;

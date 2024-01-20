import React from "react";
import DropDownMenu from "./DropDownMenu.js";
function Header() {
  // TODO: Handling user's image.
  const headerStyle = {
    backgroundColor: "#FFF8EA",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2rem 6rem",
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
        <div style={logoStyle}>XPRESSO</div>
        <nav style={navStyle}>
          <a href="/" style={navItemStyle}>
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
        <DropDownMenu username={currUser.username} />
      </header>
      <hr style={hrStyle} />
    </div>
  );
}
export default Header;

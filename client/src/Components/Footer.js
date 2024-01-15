import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "#9E7676",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    fontSize: "14px",
    color: "#FFF8EA",
  };
  const date = new Date();
  const year = date.getFullYear();
  return <footer style={footerStyle}>&copy; {year} Sarp Yıldırım</footer>;
}
export default Footer;

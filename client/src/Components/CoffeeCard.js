import React from "react";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";

function CoffeeCard(props) {
  // TODO: Handling user's image.
  const divStyle = {
    width: "200px",
    backgroundColor: "red",
    textAlign: "center",
    padding: "10px",
    borderRadius: "20px",
  };
  const buttonStyle = {
    color: "#783F0B", // This is for the text color
    borderRadius: "25px", // Adjust the border-radius to match the button's curvature
    padding: "10px 20px", // Adjust the padding to match the button's size
    cursor: "pointer",
    borderWidth: "3px",
    borderColor: "#783F0B",
    letterSpacing: "1px",
    fontWeight: "bold", // If the text is bold
    height: "32px",
    marginRight: "10px",
    ":hover": {
      borderWidth: "3px",
      color: "#783F0B",
      borderColor: "#783F0B",
    },
  };

  //const currUser = JSON.parse(sessionStorage.getItem("user"));
  const currUser = { name: "Sarp" };
  return (
    <div style={divStyle}>
      <img
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        style={{ width: "180px" }}
      />
      <h1 style={{ margin: 0 }}>{props.text}</h1>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <Button variant="outlined" sx={buttonStyle}>
          LEARN MORE
        </Button>
        <IconButton
          aria-label="favorite"
          style={{ backgroundColor: "black", width: "32px", height: "32px" }}
        >
          <FavoriteBorderIcon sx={{ color: "white" }} />
        </IconButton>
      </div>
    </div>
  );
}
export default CoffeeCard;

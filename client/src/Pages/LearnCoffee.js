import React from "react";
import { useParams } from "react-router-dom";
import { getCoffeeByName } from "../utils/coffeeUtils.js";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import Button from "@mui/material/Button";

const LearnCoffee = (props) => {
  // Styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    fontSize: "1rem",
  };
  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    padding: "1rem",
    boxSizing: "border-box",
    color: "#FFF8EA",
    backgroundColor: "#783F0B",
  };

  const contentContainerStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "row", // This will layout the children (text and image containers) in a row
    justifyContent: "space-around", // This centers the children in the container
    alignItems: "center", // This aligns the children vertically at the center
    maxWidth: "1200px", // Adjust the max width as needed
    margin: "0 auto", // This centers the container itself within the outer div
    padding: "1rem 1rem 0 1rem",
    boxSizing: "border-box",
  };

  const textContainerStyle = {
    fontSize: "1.2rem",
    maxWidth: "400px", // adjust as necessary based on your layout
    textAlign: "left",
  };

  const imageContainerStyle = {
    // Adjust the size as needed, or keep it responsive
    height: "300px", // Example fixed height, or you could use flex-grow
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  };

  const coffeeImageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "auto", // This keeps the aspect ratio of the image
  };
  const buttonStyle = {
    color: "#FFF8EA", // This is for the text color
    borderRadius: "25px", // Adjust the border-radius to match the button's curvature
    padding: "10px 20px", // Adjust the padding to match the button's size
    cursor: "pointer",
    borderWidth: "3px",
    borderColor: "#FFF8EA",
    letterSpacing: "2px",
    fontWeight: "bold", // If the text is bold
    height: "50px",
    marginLeft: "20px",
    ":hover": {
      borderWidth: "3px",
      color: "#9E7676",
      borderColor: "#9E7676",
    },
  };
  const { coffeeName } = useParams();
  const coffee = getCoffeeByName(coffeeName);

  return (
    <div style={containerStyle}>
      <Header />
      <div style={contentStyle}>
        <div style={contentContainerStyle}>
          <div style={textContainerStyle}>
            <h1 style={{ textAlign: "center", fontSize: "3rem" }}>
              {coffee.name}
            </h1>
            <p>{coffee.description}</p>
          </div>
          <div style={imageContainerStyle}>
            <img
              src="./coffeeCup.svg"
              alt="Coffee Cup"
              style={coffeeImageStyle}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <h2>How To Make:</h2>
          <Button variant="outlined" sx={buttonStyle}>
            AERO PRESS
          </Button>
          <Button variant="outlined" sx={buttonStyle}>
            FRENCH PRESS
          </Button>
          <Button variant="outlined" sx={buttonStyle}>
            MOKA POT
          </Button>
          <Button variant="outlined" sx={buttonStyle}>
            INSTANT
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LearnCoffee;

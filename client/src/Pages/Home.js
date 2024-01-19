import React, { useState } from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import Button from "@mui/material/Button";
import { getRandomFact } from "../utils/randomInfoUtils.js";

// TODO: LEARN MORE a basınca oradaki bilgi başka bir bilgiyle değişecek
const Home = () => {
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
  const beanImageStyle = {
    height: "150px", // This keeps the aspect ratio of the image
  };
  const [randomFact, setRandomFact] = useState(getRandomFact());
  const handleLearnMore = () => {
    setRandomFact(getRandomFact());
  };

  return (
    <div style={containerStyle}>
      <Header />
      <div style={contentStyle}>
        <div style={contentContainerStyle}>
          <div style={textContainerStyle}>
            <h1 style={{ textAlign: "center", fontSize: "3rem" }}>XPRESSO</h1>
            <p>
              A social platform for coffee lovers to exchange experiences and
              learn about coffee.
            </p>
            <ul>
              <li style={{ marginTop: "1.5rem" }}>
                Learn how to brew different kinds of coffees.
              </li>
              <li style={{ marginTop: "1rem" }}>
                Check their background information.
              </li>
              <li style={{ marginTop: "1rem" }}>
                Check their effect on health.
              </li>
              <li style={{ marginTop: "1rem" }}>Have your own notes.</li>
              <li style={{ marginTop: "1rem" }}>
                See what others think about in Blogs.
              </li>
            </ul>

            {/* ... logos ... */}
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
            maxWidth: "1200px",
          }}
        >
          <img
            src="./coffeeBeansRoast.svg"
            alt="Coffee Beans"
            style={beanImageStyle}
          />
          <p style={{ margin: "3rem" }}>{randomFact.fact}</p>
          <Button variant="outlined" sx={buttonStyle} onClick={handleLearnMore}>
            LEARN MORE
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

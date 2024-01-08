import React from "react";
import Register from "./Register"; // Adjust the import path as necessary

const LoginScreen = () => {
  const screenStyle = {
    position: "relative", // Establish relative positioning context
    height: "100vh", // Full viewport height
    width: "100vw", // Full viewport width
    display: "flex", // Use flexbox to center the Login component
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
    backgroundColor: "#f0f0f0", // A fallback background color
  };

  const backDivStyle = {
    position: "absolute", // Position absolutely to fill the screen
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: "url('/Background2.avif')", // Replace with your image path
    backgroundSize: "cover", // Cover the entire area
    backgroundPosition: "center", // Center the background image
    zIndex: 1, // Lower z-index since it's the background
  };

  const frontDivStyle = {
    position: "relative", // Relative positioning for stacking context
    zIndex: 2, // Higher z-index to be above the backDiv
    width: "100%", // Full width
    maxWidth: "60%", // Maximum width of the login form
    backgroundColor: "#EBDBCA", // Background color for the login form
    padding: "1em", // Padding around the login form
    borderRadius: "80px", // Optional border radius for aesthetics
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional box shadow for aesthetics
  };

  return (
    <div style={screenStyle}>
      <div style={backDivStyle} /> {/* Background div */}
      <div style={frontDivStyle}>
        <Register /> {/* Your Login component */}
      </div>
    </div>
  );
};

export default LoginScreen;

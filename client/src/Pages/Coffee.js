import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import CoffeeCard from "../Components/CoffeeCard.js";

const Coffee = () => {
  // Styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    fontSize: "1rem",
    backgroundColor: "#783F0B",
    // Make sure the container is a flex container
    justifyContent: "space-between", // This will ensure the Header and Footer are at the top and bottom respectively
  };
  const contentStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "30px",
    padding: "1rem",
    boxSizing: "border-box",
    overflow: "auto",
    justifyContent: "space-evenly", // This will distribute space around the items
    alignContent: "start",
  };

  // Assuming you have a list of coffee data to map through
  const coffees = [
    { id: 1, name: "Espresso" },
    { id: 2, name: "Americano" },
    { id: 1, name: "Espresso" },
    { id: 2, name: "Americano" },
    { id: 1, name: "Espresso" },
    { id: 2, name: "Americano" },
    { id: 1, name: "Espresso" },
    { id: 2, name: "Americano" },
    { id: 1, name: "Espresso" },
    { id: 2, name: "Americano" },
    { id: 2, name: "Americano" },
    { id: 1, name: "Espresso" },
    { id: 2, name: "Americano" },
    { id: 1, name: "Espresso" },
    { id: 2, name: "Americano" },
    // ... more coffees
  ];

  return (
    <div style={containerStyle}>
      <Header />
      <div style={contentStyle}>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} text={coffee.name} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Coffee;

import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import CoffeeCard from "../Components/CoffeeCard.js";
import { getCoffeeAll } from "../utils/coffeeUtils.js";
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

  const coffees = getCoffeeAll();
  return (
    <div style={containerStyle}>
      <Header title="COFFEES" />
      <div style={contentStyle}>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffeeName={coffee.name} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Coffee;

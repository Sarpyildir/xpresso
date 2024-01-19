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

  /* Assuming you have a list of coffee data to map through
  const coffees = [
    { id: 1, name: "EspEWREWRresso" },
    { id: 2, name: "Americano" },
    { id: 3, name: "Latte" },
    { id: 4, name: "Mocha" },
    { id: 5, name: "Cortado" },
    { id: 6, name: "Flat White" },
    { id: 7, name: "Cappuccino" },
    { id: 8, name: "Macchiato" },
    { id: 9, name: "Frappe" },
    { id: 10, name: "Cold Brew" },
    { id: 11, name: "Chai Tea" },
    { id: 12, name: "Affogato" },

    // ... more coffees
  ];*/
  const coffees = getCoffeeAll();
  return (
    <div style={containerStyle}>
      <Header />
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

import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import CoffeeCard from "../Components/CoffeeCard.js";

const Bean = () => {
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
  const beans = [
    { id: 1, name: "Robusta" },
    { id: 2, name: "Arabica" },
    { id: 3, name: "Liberica" },
    { id: 4, name: "Excelsa" },
    { id: 5, name: "Typica" },
    { id: 6, name: "Geisha" },
    { id: 7, name: "Bourbon" },
    { id: 8, name: "Mundo Novo" },
    { id: 9, name: "Mocha" },
    { id: 10, name: "Jember" },
    { id: 11, name: "Caturra" },
    { id: 12, name: "PacaMara" },
  ];

  return (
    <div style={containerStyle}>
      <Header />
      <div style={contentStyle}>
        {beans.map((bean) => (
          <CoffeeCard key={bean.id} text={bean.name} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Bean;

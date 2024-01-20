import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BeanCard from "../Components/BeanCard.js";
import { getBeanAll } from "../utils/beanUtils.js";
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
  const beans = getBeanAll();

  return (
    <div style={containerStyle}>
      <Header title="BEANS" />
      <div style={contentStyle}>
        {beans.map((bean) => (
          <BeanCard key={bean.id} beanName={bean.name} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Bean;

import React, { useState } from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import CoffeeCard from "../Components/CoffeeCard.js";
import { getCoffeeAll } from "../utils/coffeeUtils.js";
import axios from "axios";
const Favorites = () => {
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
  const [coffees, setCoffees] = useState([]);
  const [beans, setBeans] = useState([]);
  const userString = sessionStorage.getItem("user");
  const user = JSON.parse(userString);

  React.useEffect(() => {
    const fetchFavoriteCoffees = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/user/getFavoriteCoffees?email=${encodeURIComponent(
            user.email
          )}`
        );
        setCoffees(response.data); // Assuming the response data is the array of coffees
        console.log(response.data);
      } catch (error) {
        // Error handling
      }
    };
    const fetchFavoriteBeans = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/user/getFavoriteBeans?email=${encodeURIComponent(
            user.email
          )}`
        );
        setBeans(response.data); // Assuming the response data is the array of coffees
        console.log(response.data);
      } catch (error) {
        // Error handling
      }
    };

    fetchFavoriteCoffees();
    fetchFavoriteBeans();
  }, []);

  return (
    <div style={containerStyle}>
      <Header />
      <div style={contentStyle}>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffeeName={coffee.name} />
        ))}
        {beans.map((bean) => (
          <CoffeeCard key={bean.id} coffeeName={bean.name} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;

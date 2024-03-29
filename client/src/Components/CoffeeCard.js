import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
function CoffeeCard(props) {
  const divStyle = {
    width: "250px",
    backgroundColor: "#FFF8EA",
    textAlign: "center",
    padding: "25px 25px 20px 25px",
    borderRadius: "20px",
    margin: 0,
  };
  const buttonStyle = {
    color: "#783F0B", // This is for the text color
    borderRadius: "25px", // Adjust the border-radius to match the button's curvature
    padding: "10px 20px", // Adjust the padding to match the button's size
    cursor: "pointer",
    borderWidth: "3px",
    borderColor: "#783F0B",
    letterSpacing: "2px",
    fontWeight: "bold", // If the text is bold
    height: "35px",
    marginRight: "10px",
    ":hover": {
      borderWidth: "3px",
      color: "#783F0B",
      borderColor: "#783F0B",
    },
  };
  const imageStyle = {
    width: "100%",
    height: "140px",
  };
  const [favoriteState, setFavoriteState] = useState(false);
  const [favoriteIcon, setFavoriteIcon] = useState(
    <FavoriteBorderIcon sx={{ color: "#FFF8EA" }} />
  );
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`/learncoffee/${props.coffeeName}`);
  };
  const userString = sessionStorage.getItem("user");
  const user = JSON.parse(userString);
  React.useEffect(() => {
    const fetchFavoriteCoffee = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/user/getFavoriteCoffeeByName?email=${encodeURIComponent(
            user.email
          )}&coffeeName=${encodeURIComponent(props.coffeeName)}`
        );
        if (response.status === 200) {
          setFavoriteState(true);
          setFavoriteIcon(<FavoriteIcon sx={{ color: "#FFF8EA" }} />);
        } else {
          setFavoriteState(false);
          setFavoriteIcon(<FavoriteBorderIcon sx={{ color: "#FFF8EA" }} />);
        }
      } catch (error) {
        // Error handling
      }
    };
    fetchFavoriteCoffee();
  }, []);
  const handleFavoriteClick = async (e) => {
    if (!favoriteState) {
      // ADD FAVORITE COFFEE
      setFavoriteState(!favoriteState);
      try {
        const response = await axios.put(
          "http://localhost:5000/api/user/addFavoriteCoffee",
          {
            email: user.email,
            coffeeName: props.coffeeName,
          }
        );
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Error data:", error.response.data);
          alert(error.response.data.message || "Error occurred");
        } else if (error.request) {
          // The request was made but no response was received
          console.error("Error request:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error", error.message);
        }
      }
    } else {
      // REMOVE FAVORITE COFFEE
      setFavoriteState(!favoriteState);
      try {
        const response = await axios.put(
          "http://localhost:5000/api/user/removeFavoriteCoffee",
          {
            email: user.email,
            coffeeName: props.coffeeName,
          }
        );
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Error data:", error.response.data);
          alert(error.response.data.message || "Error occurred");
        } else if (error.request) {
          // The request was made but no response was received
          console.error("Error request:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error", error.message);
        }
      }
    }
    window.location.reload();
  };
  return (
    <div style={divStyle}>
      <img style={imageStyle} src={props.coffeePhoto} alt="coffee" />
      <h1 style={{ margin: "10px 0", fontSize: "1.3rem" }}>
        {props.coffeeName}
      </h1>
      <div
        style={{
          display: "flex",
          marginTop: "10px",
          justifyContent: "space-between",
        }}
      >
        <Button variant="outlined" sx={buttonStyle} onClick={handleButtonClick}>
          LEARN MORE
        </Button>
        <IconButton
          aria-label="favorite"
          style={{ backgroundColor: "#783F0B", width: "35px", height: "35px" }}
          onClick={handleFavoriteClick}
        >
          {favoriteIcon}
        </IconButton>
      </div>
    </div>
  );
}
export default CoffeeCard;

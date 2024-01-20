import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import axios from "axios";

function BeanCard(props) {
  // TODO: Handling user's image.
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
    height: "auto",
  };

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`/learnbean/${props.beanName}`);
  };
  const userString = sessionStorage.getItem("user");
  const user = JSON.parse(userString);
  const handleFavoriteClick = async (e) => {
    try {
      const response = await axios.put(
        "http://localhost:5000/api/user/addFavoriteBean",
        {
          email: user.email,
          beanName: props.beanName,
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
  };
  return (
    <div style={divStyle}>
      <img
        style={imageStyle}
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        alt="bean"
      />
      <h1 style={{ margin: "10px 0", fontSize: "1.3rem" }}>{props.beanName}</h1>
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
          <FavoriteBorderIcon sx={{ color: "white" }} />
        </IconButton>
      </div>
    </div>
  );
}
export default BeanCard;

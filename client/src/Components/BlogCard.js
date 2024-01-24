import React from "react";
import PostButton from "./PostButton.js";
import { useNavigate } from "react-router-dom";
function BlogCard(props) {
  const cardStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#FFF8EA",
    borderRadius: "20px",
    padding: "20px",
    width: "100%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "20px",
  };
  const contentStyle = {
    display: "flex",
    flexDirection: "row", // Set the direction to row
    alignItems: "center", // Align items vertically
    justifyContent: "space-between", // Space between content and button
    width: "100%",
  };

  const textContentStyle = {
    flex: "1",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "5px",
    marginRight: "20px",
    color: "black",
  };

  const descriptionStyle = {
    fontSize: "16px",
    color: "black",
    marginBottom: "15px",
    marginRight: "20px",
  };

  const profilePictureStyle = {
    borderRadius: "50%",
    marginRight: "20px",
    width: "50px",
    height: "50px",
  };
  const navigate = useNavigate();
  var shortDescription = props.description;
  if (props.description.length > 275) {
    shortDescription = props.description.substring(0, 275) + "...";
  }

  const handleReadClick = () => {
    /*
    navigate(`/blog/${props._id}`);
    */
    navigate(`/blogread`);
  };
  return (
    <div style={cardStyle}>
      <img
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        alt="Profile"
        style={profilePictureStyle}
      />
      <div style={contentStyle}>
        <div style={textContentStyle}>
          <div style={titleStyle}>{props.title}</div>
          <div style={descriptionStyle}>{shortDescription}</div>
        </div>
        <PostButton text="read" type="read" onClick={handleReadClick} />
      </div>
    </div>
  );
}

export default BlogCard;

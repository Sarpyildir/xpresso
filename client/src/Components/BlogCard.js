import React from "react";
import PostButton from "./PostButton.js";

function BlogCard() {
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

  return (
    <div style={cardStyle}>
      <img
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        alt="Profile"
        style={profilePictureStyle}
      />
      <div style={contentStyle}>
        <div style={textContentStyle}>
          <div style={titleStyle}>TITLE OF BLOG</div>
          <div style={descriptionStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            quis facilisis mi. Phasellus malesuada arcu sit amet dui rhoncus,
            sagittis quam ...
          </div>
        </div>
        <PostButton text="read" type="read" />
      </div>
    </div>
  );
}

export default BlogCard;

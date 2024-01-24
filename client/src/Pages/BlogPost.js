import React from "react";
import { useParams } from "react-router-dom";
import { getBeanByName } from "../utils/beanUtils.js";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import PostButton from "../Components/PostButton.js";

const BlogPost = (props) => {
  // Styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    fontSize: "1rem",
  };
  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    padding: "1rem",
    boxSizing: "border-box",
    color: "#FFF8EA",
    backgroundColor: "#783F0B",
  };

  const contentContainerStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "row", // This will layout the children (text and image containers) in a row
    justifyContent: "space-around", // This centers the children in the container
    alignItems: "center", // This aligns the children vertically at the center
    maxWidth: "1200px", // Adjust the max width as needed
    margin: "0 auto", // This centers the container itself within the outer div
    padding: "1rem 1rem 0 1rem",
    boxSizing: "border-box",
    backgroundColor: "#FFF8EA",
    borderRadius: "20px",
  };
  const rightDivStyle = {
    display: "flex",
    flexDirection: "column",
  };
  const textContainerStyle = {
    fontSize: "1.2rem",
    maxWidth: "400px", // adjust as necessary based on your layout
    textAlign: "left",
    color: "#594545",
  };
  const profilePictureStyle = {
    borderRadius: "50%",
    marginRight: "20px",
    width: "50px",
    height: "50px",
  };

  return (
    <div style={containerStyle}>
      <Header />
      <div style={contentStyle}>
        <div style={contentContainerStyle}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt="Profile"
              style={profilePictureStyle}
            />
          </div>
          <div style={rightDivStyle}>
            <div style={textContainerStyle}>
              <h1 style={{ textAlign: "center", fontSize: "3rem" }}>Title</h1>
              <p>Description</p>
            </div>
            <PostButton type="read" text="back" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;

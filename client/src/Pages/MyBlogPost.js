import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { fetchUserById } from "../utils/fetchUser.js";
import { fetchBlogById } from "../utils/fetchBlog.js";
import { formatDate } from "../utils/formatDate.js";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import PostButton from "../Components/PostButton.js";
import axios from "axios";

const MyBlogPost = (props) => {
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
    display: "grid",
    gridTemplateRows: "auto auto auto 1fr auto",
    maxWidth: "1200px",
    boxSizing: "border-box",
    backgroundColor: "#FFF8EA",
    borderRadius: "20px",
    color: "#594545",
    padding: "2rem 4rem 2rem 2rem",
    margin: "auto auto",
  };

  const backButtonContainerStyle = {
    gridColumnStart: "2",
    gridColumnEnd: "3",
    display: "flex",
    justifyContent: "space-between",
  };
  const profilePictureStyle = {
    borderRadius: "50%",
    marginRight: "20px",
    width: "50px",
    height: "50px",
    gridColumnStart: "1",
    gridColumnEnd: "2",
  };
  const [blogData, setBlogData] = useState(null);
  const [editableTitle, setEditableTitle] = useState("");
  const [editableDescription, setEditableDescription] = useState("");
  const [formattedDate, setFormattedDate] = useState(null);
  const [user, setUser] = useState(null);
  const { blogId } = useParams();
  useEffect(() => {
    fetchBlogById(blogId)
      .then((res) => {
        const blog = res.data;
        setBlogData(blog);
        setEditableTitle(blog.title);
        setEditableDescription(blog.description);
        setFormattedDate(formatDate(blog.created_at));

        // Fetch user data after blog data is successfully fetched and set
        return fetchUserById(blog.postedBy);
      })
      .then((userData) => {
        setUser(userData.data);
      })
      .catch((error) => {
        console.error("Failed to fetch blog or user:", error);
      });
  }, [blogId]); // Depend on blogId, not on blogData
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/myblogs");
  };
  const handleSaveClick = async () => {
    try {
      const response = await axios.put(
        "http://localhost:5000/api/blog/updateBlog",
        {
          blogId: blogData._id,
          title: editableTitle,
          description: editableDescription,
        }
      );
      navigate("/myblogs");
    } catch (error) {
      if (error.response) {
        // server responded with a status code that falls out of the range of 2xx
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
    <div style={containerStyle}>
      <Header />
      <div style={contentStyle}>
        {blogData && (
          <div style={contentContainerStyle}>
            <p
              style={{
                textAlign: "right",
                fontSize: "1rem",
                gridColumnStart: "2",
                gridColumnEnd: "3",
              }}
            >
              Date of Publish: {formattedDate}
            </p>
            <input
              style={{
                fontSize: "2rem",
                margin: "0",
                gridColumnStart: "2",
                gridColumnEnd: "3",
              }}
              value={editableTitle}
              onChange={(e) => setEditableTitle(e.target.value)}
            />

            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt="Profile"
              style={profilePictureStyle}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "1rem",
                  margin: "0",
                  gridColumnStart: "2",
                  gridColumnEnd: "3",
                }}
              >
                Username: {user && user.username}
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  margin: "0",
                  gridColumnStart: "2",
                  gridColumnEnd: "3",
                }}
              >
                Email: {user && user.email}
              </p>
            </div>

            <textarea
              style={{
                fontSize: "1rem",
                gridColumnStart: "2",
                gridColumnEnd: "3",
                margin: "0 0 2rem 0",
              }}
              rows={15}
              cols={100}
              value={editableDescription}
              onChange={(e) => setEditableDescription(e.target.value)}
            />
            <div style={backButtonContainerStyle}>
              <PostButton type="read" text="back" onClick={handleBackClick} />
              <PostButton type="save" text="save" onClick={handleSaveClick} />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyBlogPost;

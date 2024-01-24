import React, { useState, useEffect } from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import SearchBar from "../Components/SearchBar.js";
import PostButton from "../Components/PostButton.js";
import BlogCard from "../Components/BlogCard.js";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import fetchUser from "../utils/fetchUser.js";
import fetchBlog from "../utils/fetchBlog.js";
import axios from "axios";

const Blog = () => {
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
    flexDirection: "column", // This will layout the children (text and image containers) in a row
    justifyContent: "space-around", // This centers the children in the container
    alignItems: "center", // This aligns the children vertically at the center
    maxWidth: "1200px", // Adjust the max width as needed
    margin: "0 auto", // This centers the container itself within the outer div
    padding: "1rem 1rem 0 1rem",
    boxSizing: "border-box",
    width: "100%",
  };
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [open, setOpen] = useState(false);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  useEffect(() => {
    const userString = sessionStorage.getItem("user");
    const sessionUser = JSON.parse(userString);
    const userEmail = sessionUser.email;
    fetchUser(userEmail)
      .then((userData) => {
        console.log("Fetched User:", userData.data);
        setUser(userData.data);
        console.log("Setted User:", user);
      })
      .catch((error) => {
        console.error("Failed to fetch user:", error);
      });
    fetchBlog()
      .then((blogData) => {
        console.log("Fetched Blogs:", blogData.data);
        setBlogs(blogData.data);
        console.log("Setted Blogs:", blogs);
      })
      .catch((error) => {
        console.error("Failed to fetch blogs:", error);
      });
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  const handlePost = () => {
    if (!blogTitle.trim() || !blogDescription.trim()) {
      alert("Please fill all the fields");
    } else {
      console.log(blogTitle, blogDescription);
      axios
        .post("http://localhost:5000/api/blog/postBlog", {
          title: blogTitle,
          description: blogDescription,
          postedBy: user._id,
        })
        .then((res) => {
          console.log(res.data);
          setOpen(false);
          setBlogTitle("");
          setBlogDescription("");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div style={containerStyle}>
      <Header />
      <div style={contentStyle}>
        <div style={contentContainerStyle}>
          <h1 style={{ textAlign: "center", fontSize: "3rem" }}>XPRESSO</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "40px",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginBottom: "2rem",
            }}
          >
            <SearchBar />
            <PostButton text="post" type="post" onClick={handleClickOpen} />
          </div>
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              _id={blog._id}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </div>
      </div>
      <Footer />
      <Dialog
        open={open}
        onClose={handleClickClose}
        maxWidth="md"
        fullWidth={true}
      >
        <DialogTitle>Post Your Blog</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title of Blog"
            type="text"
            fullWidth
            variant="standard"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            multiline
            rows={7}
            value={blogDescription}
            onChange={(e) => setBlogDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose}>Cancel</Button>
          <Button onClick={handlePost}>Post</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Blog;

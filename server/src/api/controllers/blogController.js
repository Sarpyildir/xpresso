import Blog from "../models/blog.js";
import mongoose from "mongoose";
async function postBlog(req, res) {
  try {
    // Create a new blog with the request data
    const newBlog = new Blog({
      title: req.body.title,
      description: req.body.description,
      postedBy: req.body.postedBy, // Assuming you have user information available in req.user
    });

    // Save the new blog to the database
    await newBlog.save();

    res.status(201).json(newBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
async function getAllBlogs(req, res) {
  try {
    // Get all blogs from the database
    const blogs = await Blog.find({}).exec();
    res.status(201).json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
async function getBlogById(req, res) {
  try {
    const blogId = req.query.blogId;
    const dbBlog = await Blog.findOne({ _id: blogId }).exec();
    res.status(201).json(dbBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
async function getBlogsByUserId(req, res) {
  try {
    const userId = req.query.userId;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }
    const dbBlogs = await Blog.find({ postedBy: userId }).exec(); // Find all blogs by user ID
    res.status(200).json(dbBlogs); // Status code 200 for OK
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export { postBlog, getAllBlogs, getBlogById, getBlogsByUserId };

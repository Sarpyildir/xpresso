import Blog from "../models/blog.js";

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

export { postBlog };

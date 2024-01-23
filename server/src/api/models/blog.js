import mongoose from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String,
  description: String,
  postedBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  created_at: { type: Date, default: Date.now },
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;

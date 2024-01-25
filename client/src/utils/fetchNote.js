import axios from "axios";
/*
async function fetchAllBlogs() {
  const response = await axios.get(
    "http://localhost:5000/api/blog/getAllBlogs"
  );
  return response;
}
async function fetchBlogById(blogId) {
  const response = await axios.get(
    "http://localhost:5000/api/blog/getBlogById?blogId=" + blogId
  );
  return response;
}*/
async function fetchMyNotes(userId) {
  const response = await axios.get(
    "http://localhost:5000/api/note/getNotesByUserId?userId=" + userId
  );
  return response;
}

export { fetchMyNotes };

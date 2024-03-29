import axios from "axios";

async function fetchAllBlogs() {
  const response = await axios.get(
    "http://localhost:5000/api/blog/getAllBlogs"
  );
  console.log(response);
  return response;
}
async function fetchBlogById(blogId) {
  const response = await axios.get(
    "http://localhost:5000/api/blog/getBlogById?blogId=" + blogId
  );
  return response;
}
async function fetchMyBlogs(userId) {
  const response = await axios.get(
    "http://localhost:5000/api/blog/getBlogsByUserId?userId=" + userId
  );
  return response;
}

export { fetchAllBlogs, fetchBlogById, fetchMyBlogs };

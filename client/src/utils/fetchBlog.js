import axios from "axios";

export default async function fetchAllBlogs() {
  const response = await axios.get(
    "http://localhost:5000/api/blog/getAllBlogs"
  );
  return response;
}

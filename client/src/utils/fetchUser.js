import axios from "axios";

async function fetchUser(userEmail) {
  const response = await axios.get(
    `http://localhost:5000/api/user/getUser?email=${encodeURIComponent(
      userEmail
    )}`
  );
  return response;
}
async function fetchUserById(userId) {
  const response = await axios.get(
    `http://localhost:5000/api/user/getUserById?userId=${userId}`
  );
  return response;
}
export { fetchUser, fetchUserById };

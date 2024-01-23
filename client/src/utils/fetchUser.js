import axios from "axios";

export default async function fetchUser(userEmail) {
  const response = await axios.get(
    `http://localhost:5000/api/user/getUser?email=${encodeURIComponent(
      userEmail
    )}`
  );
  return response;
}

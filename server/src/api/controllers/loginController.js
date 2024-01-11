import User from "../models/user.js";

async function loginUser(req, res) {
  try {
    const loginUser = new User(req.body);
    const dbUser = await User.findOne({ email: loginUser.email }).exec();
    console.log(dbUser);
    if (dbUser) {
      if (dbUser.password === loginUser.password) {
        res.status(200).json(dbUser);
      } else {
        res.status(401).json("Wrong password");
      }
    } else {
      res.status(404).json("User not found");
    }
  } catch (e) {
    console.log(e);
    res.status(500).json("Internal server error");
  }
}

export { loginUser };

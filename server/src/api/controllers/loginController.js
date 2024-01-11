import User from "../models/user.js";

async function loginUser(req, res) {
  try {
    const loginEmail = req.body.email;
    const loginPassword = req.body.password;

    const dbUser = await User.findOne({ email: loginEmail }).exec();
    console.log(dbUser);
    if (dbUser) {
      if (dbUser.password === loginPassword) {
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

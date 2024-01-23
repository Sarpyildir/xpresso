import User from "../models/user.js";
import bcrypt from "bcrypt";

async function loginUser(req, res) {
  try {
    const loginEmail = req.body.email.toLowerCase();
    const loginPassword = req.body.password;
    const dbUser = await User.findOne({ email: loginEmail }).exec();
    if (dbUser) {
      if (await bcrypt.compare(loginPassword, dbUser.password)) {
        res.status(200).json(dbUser);
      } else {
        res.status(401).json({ message: "Wrong password" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
}

export { loginUser };

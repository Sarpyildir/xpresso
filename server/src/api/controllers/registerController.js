import User from "../models/user.js";
import bcrypt from "bcrypt";

async function registerUser(req, res) {
  try {
    // Check if a user with the same email or username already exists
    const existingUser = await User.findOne({
      $or: [
        { email: req.body.email.toLowerCase() },
        { username: req.body.username },
      ],
    });

    if (existingUser) {
      // Check why the user already exists and return ao appropriate error message
      if (existingUser.email.toLowerCase() === req.body.email.toLowerCase()) {
        return res.status(400).json({ message: "Email already in use." });
      } else if (
        existingUser.username.toLowerCase() === req.body.username.toLowerCase()
      ) {
        return res.status(400).json({ message: "Username already in use." });
      }
    }

    const newUser = new User(req.body);
    newUser.email = newUser.email.toLowerCase();
    newUser.password = await bcrypt.hash(newUser.password, 10);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
}

export { registerUser };

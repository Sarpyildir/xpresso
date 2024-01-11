import User from "../models/user.js";

async function registerUser(req, res) {
  try {
    // Check if a user with the same email or username already exists
    const existingUser = await User.findOne({
      $or: [{ email: req.body.email }, { username: req.body.username }],
    });

    if (existingUser) {
      // Check why the user already exists and return ao appropriate error message
      if (existingUser.email === req.body.email) {
        return res.status(400).json("Email already in use.");
      } else if (existingUser.username === req.body.username) {
        return res.status(400).json("Username already in use.");
      }
    }

    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (e) {
    console.log(e);
    res.status(500).json("Internal server error");
  }
}

export { registerUser };

import User from "../models/user.js";
async function registerUser(req, res) {
  try {
    const newUser = new User(req.body);
    await newUser
      .save()
      .then((savedUser) => {
        console.log(savedUser);
        res.status(201).json(savedUser);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json("Unable to save a new user" + err);
      });
  } catch (e) {
    console.log(e);
    res.status(500).json("Internal server error");
  }
}

export { registerUser };

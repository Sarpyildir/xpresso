import User from "../models/user.js";

async function changePassword(req, res) {
  try {
    const loginEmail = req.body.email;
    const oldPassword = req.body.password;
    const newPassword = req.body.newPassword;

    const dbUser = await User.findOne({ email: loginEmail }).exec();
    console.log(dbUser);
    if (dbUser) {
      if (dbUser.password === oldPassword) {
        // Change old password of user to new password
        dbUser.password = newPassword;
        // Save user to database
        await dbUser.save();
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

export { changePassword };

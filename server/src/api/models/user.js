import mongoose from "mongoose";
const { Schema } = mongoose;
// created_at: { type: Date, default: Date.now },
const userSchema = new Schema({
  name: String,
  surname: String,
  username: String,
  email: String,
  password: String,
  profilePicture: String,
  created_at: { type: Date, default: Date.now },
  favoriteCoffee: [
    {
      name: String,
    },
  ],
  favoriteBean: [
    {
      name: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;

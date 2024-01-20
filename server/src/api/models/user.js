import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  surname: String,
  username: String,
  email: String,
  password: String,
  created_at: Date,
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

import mongoose from "mongoose";
const { Schema } = mongoose;

const noteSchema = new Schema({
  title: String,
  description: String,
  postedBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  created_at: { type: Date, default: Date.now },
});

const Note = mongoose.model("Note", noteSchema);

export default Note;

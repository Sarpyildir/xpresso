import Note from "../models/note.js";
import mongoose from "mongoose";
async function postNote(req, res) {
  try {
    // Create a new blog with the request data
    const newNote = new Note({
      title: req.body.title,
      description: req.body.description,
      postedBy: req.body.postedBy, // Assuming you have user information available in req.user
    });

    // Save the new blog to the database
    await newNote.save();

    res.status(201).json(newNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
/*
async function getAllNotes(req, res) {
  try {
    // Get all blogs from the database
    const notes = await Note.find({}).exec();
    res.status(201).json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getBlogById(req, res) {
  try {
    const blogId = req.query.blogId;
    const dbBlog = await Blog.findOne({ _id: blogId }).exec();
    res.status(201).json(dbBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
*/
async function getNotesByUserId(req, res) {
  try {
    const userId = req.query.userId;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }
    const dbNotes = await Note.find({ postedBy: userId }).exec(); // Find all blogs by user ID
    res.status(200).json(dbNotes); // Status code 200 for OK
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function updateNote(req, res) {
  try {
    const noteId = req.body.noteId;
    const dbNote = await Note.findOne({ _id: noteId }).exec();
    if (dbNote) {
      dbNote.title = req.body.title;
      dbNote.description = req.body.description;
      await dbNote.save();
      res.status(201).json(dbNote);
    } else {
      res.status(404).json({ message: "Note not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
async function deleteNote(req, res) {
  try {
    const noteId = req.query.noteId;

    const result = await Note.findByIdAndDelete(noteId);
    if (!result) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export { postNote, getNotesByUserId, updateNote, deleteNote };

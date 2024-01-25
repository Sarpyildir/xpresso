import express from "express";
const router = express.Router();

import {
  postNote,
  getNotesByUserId,
  getNoteById,
  updateNote,
  deleteNote,
} from "../controllers/noteController.js";

router.get("/getNotesByUserId", getNotesByUserId);
router.get("/getNoteById", getNoteById);
router.post("/postNote", postNote);
router.put("/updateNote", updateNote);
router.delete("/deleteNote", deleteNote);
export default router;

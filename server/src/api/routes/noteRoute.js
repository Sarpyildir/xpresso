import express from "express";
const router = express.Router();

import {
  postNote,
  getNotesByUserId,
  updateNote,
  deleteNote,
} from "../controllers/noteController.js";

router.get("/getNotesByUserId", getNotesByUserId);
router.post("/postNote", postNote);
router.put("/updateNote", updateNote);
router.delete("/deleteNote", deleteNote);
export default router;

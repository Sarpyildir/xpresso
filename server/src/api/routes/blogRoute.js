import express from "express";
const router = express.Router();

import { postBlog, getAllBlogs } from "../controllers/blogController.js";

router.get("/getAllBlogs", getAllBlogs);
router.post("/postBlog", postBlog);

export default router;

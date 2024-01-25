import express from "express";
const router = express.Router();

import {
  postBlog,
  getAllBlogs,
  getBlogById,
  getBlogsByUserId,
} from "../controllers/blogController.js";

router.get("/getAllBlogs", getAllBlogs);
router.get("/getBlogById", getBlogById);
router.get("/getBlogsByUserId", getBlogsByUserId);
router.post("/postBlog", postBlog);

export default router;

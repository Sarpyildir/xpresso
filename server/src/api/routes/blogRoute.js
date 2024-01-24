import express from "express";
const router = express.Router();

import {
  postBlog,
  getAllBlogs,
  getBlogById,
} from "../controllers/blogController.js";

router.get("/getAllBlogs", getAllBlogs);
router.get("/getBlogById", getBlogById);
router.post("/postBlog", postBlog);

export default router;

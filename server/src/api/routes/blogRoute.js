import express from "express";
const router = express.Router();

import {
  postBlog,
  getAllBlogs,
  getBlogById,
  getBlogsByUserId,
  updateBlog,
} from "../controllers/blogController.js";

router.get("/getAllBlogs", getAllBlogs);
router.get("/getBlogById", getBlogById);
router.get("/getBlogsByUserId", getBlogsByUserId);

router.post("/postBlog", postBlog);
router.put("/updateBlog", updateBlog);
export default router;

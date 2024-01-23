import express from "express";
const router = express.Router();

import { postBlog } from "../controllers/blogController.js";

router.post("/postBlog", postBlog);

export default router;

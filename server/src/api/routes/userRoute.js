import express from "express";
const router = express.Router();

import { changePassword } from "../controllers/userController.js";

router.put("/changePassword", changePassword);

export default router;

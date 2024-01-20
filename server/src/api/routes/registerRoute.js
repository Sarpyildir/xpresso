import express from "express";
const router = express.Router();

import { registerUser } from "../controllers/registerController.js";

router.post("/newUser", registerUser);

export default router;

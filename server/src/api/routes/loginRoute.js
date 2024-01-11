import express from "express";
const router = express.Router();

import { loginUser } from "../controllers/loginController.js";

router.get("/login", loginUser);

export { loginUser };

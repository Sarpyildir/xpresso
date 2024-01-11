import express from "express";
const router = express.Router();

import { registerUser } from "../controllers/register.js";

router.post("/newUser", registerUser);

export { registerUser };

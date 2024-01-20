import express from "express";
const router = express.Router();

import {
  changePassword,
  addFavoriteCoffee,
} from "../controllers/userController.js";

router.put("/changePassword", changePassword);
router.put("/addFavoriteCoffee", addFavoriteCoffee);

export default router;

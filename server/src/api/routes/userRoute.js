import express from "express";
const router = express.Router();

import {
  changePassword,
  addFavoriteCoffee,
  addFavoriteBean,
} from "../controllers/userController.js";

router.put("/changePassword", changePassword);
router.put("/addFavoriteCoffee", addFavoriteCoffee);
router.put("/addFavoriteBean", addFavoriteBean);

export default router;

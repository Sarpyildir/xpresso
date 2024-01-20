import express from "express";
const router = express.Router();

import {
  changePassword,
  addFavoriteCoffee,
  addFavoriteBean,
  getFavoriteBeans,
  getFavoriteCoffees,
} from "../controllers/userController.js";

router.get("/getFavoriteCoffees", getFavoriteCoffees);
router.get("/getFavoriteBeans", getFavoriteBeans);

router.put("/changePassword", changePassword);
router.put("/addFavoriteCoffee", addFavoriteCoffee);
router.put("/addFavoriteBean", addFavoriteBean);

export default router;

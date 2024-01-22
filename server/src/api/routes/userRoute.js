import express from "express";
const router = express.Router();

import {
  changePassword,
  editProfile,
  addFavoriteCoffee,
  addFavoriteBean,
  getFavoriteBeans,
  getFavoriteCoffees,
  removeFavoriteBean,
  removeFavoriteCoffee,
  getFavoriteCoffeeByName,
  getFavoriteBeanByName,
} from "../controllers/userController.js";

router.get("/getFavoriteCoffees", getFavoriteCoffees);
router.get("/getFavoriteBeans", getFavoriteBeans);
router.get("/getFavoriteCoffeeByName", getFavoriteCoffeeByName);
router.get("/getFavoriteBeanByName", getFavoriteBeanByName);

router.put("/changePassword", changePassword);
router.put("/editProfile", editProfile);
router.put("/addFavoriteCoffee", addFavoriteCoffee);
router.put("/addFavoriteBean", addFavoriteBean);
router.put("/removeFavoriteCoffee", removeFavoriteCoffee);
router.put("/removeFavoriteBean", removeFavoriteBean);

export default router;

// morgan and cors is not installed yet
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes
import userRoutes from "./api/routes/userRoute.js";
import loginRoutes from "./api/routes/loginRoute.js";
import registerRoutes from "./api/routes/registerRoute.js";
import blogRoutes from "./api/routes/blogRoute.js";
import noteRoutes from "./api/routes/noteRoute.js";

// Use routes
app.use("/api/register", registerRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/user", userRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/note", noteRoutes);

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.get("*", (req, res) => {
  res.status(404).json("404 Not Found");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

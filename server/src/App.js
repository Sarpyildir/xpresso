// morgan and cors is not installed yet
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const testRouter = require("./api/routes/test");
app.use("/api", testRouter);

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.get("*", (req, res) => {
  res.status(404).json("404 Not Found");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

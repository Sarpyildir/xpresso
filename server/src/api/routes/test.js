const express = require("express");
const router = express.Router();

const { getTest } = require("../controllers/test.js");

router.get("/test", getTest);

module.exports = router;

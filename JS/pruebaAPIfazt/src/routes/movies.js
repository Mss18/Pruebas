"use strict";

const express = require("express");
const router = express.Router();

const movies = require("../sample.json");

router.get("/", (req, res) => {
  res.json(movies);
});

module.exports = router;

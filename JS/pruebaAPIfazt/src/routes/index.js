"use strict";

const express = require("express");
const router = express.Router();
//const router = require('express').Router();

router.get("/test", (req, res) => {
  const data = {
    name: "Martin",
    age: "37"
  };
  res.json(data);
  //   res.send(`Hello world from ${app.get("port")}`);
});

module.exports = router;

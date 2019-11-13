"use strict";

const { Router } = require("express");
const router = Router();

const movies = require("../sample.json");
// console.log(movies);

router.get("/", (req, res) => {
  res.json(movies);
});

/* router.post("/", (req, res) => {
  console.log(req.body);
  res.send("recived");
}); */

router.post("/", (req, res) => {
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    const id = movies.length + 1;
    const newMovie = { ...req.body, id };
    movies.push(newMovie);
    res.json(movies);
    // console.log(newMovie);
    res.joson("saved");
  } else {
    res.send("Wrong request");
  }
  res.send("recived");
});

module.exports = router;

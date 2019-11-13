"use strict";

const { Router } = require("express");
const router = Router();

/* router.get("/", (req, res) => {
  //   res.send("Hello world");
  res.json({ Title: "Martin" });
}); */

router.get("/test", (req, res) => {
  const data = {
    name: "Martin",
    place: "Arteixo"
  };
  res.json(data);
});

module.exports = router;

"use strict";

const fs = require("fs");
const animal = require("./animal");

fs.appendFile("prueba1.js", "'use strict';", err => {
  if (err) {
    console.log("Error al crear archivo");
  }
});

const gallina = new animal("gallina");
gallina.print();

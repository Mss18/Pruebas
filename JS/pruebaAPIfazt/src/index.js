"use strict";

const express = require("express");
const app = express();
const morgan = require("morgan");

//settings
app.set("port", process.env.PORT || 3000); //en el ejercicio notesapp el puerto está en un archivo .env

//middlewares
app.use(morgan("dev"));
app.use(express.json()); //permite al servidor entender archivos JSON.
app.use(express.urlencoded({ extend: false })); //para que el servidor entienda datos sencillos de formularios.

//routes
app.use(require("./routes/index"));
app.use("/api/movies", require("./routes/movies"));

//starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});

"use strict";

const express = require("express");
const app = express();
const morgan = require("morgan");

//settings
app.set("port", process.env.PORT || 3000); //de esta manera, podemos acceder desde cualquier archivo de la app, a diferencia de con una variable
app.set("json spaces", 2);

//middlewares
app.use(morgan("dev")); //utilizar 'combined' para obtener más información
app.use(express.json()); //permite al servidor recibir ojetos 'json' y entenderlos
app.use(express.urlencoded({ extended: false })); //para entender objetos sencillos que nos llegan de inputs de formularios

//routes
app.use(require("./routes/index"));
app.use("/api/movies", require("./routes/movies"));

//starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});

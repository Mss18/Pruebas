/* const http = require("http");

const server = http.createServer((req, res) => {
  res.status = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(3000, () => {
  console.log("Server on port 3000");
});
 */

/* const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.get("/about", (req, res) => {
  res.send("About me");
});

app.listen(3000, () => {
  console.log("Server on port 3000");
});
 */

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hola mundo"));

app.listen(port, () => console.log("Example app listening on port ${port}"));

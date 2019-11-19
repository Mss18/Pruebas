"use strict";

require("dotenv").config();
const mysqlPool = require("./app/database/mysql-pool");

const httpListenPort = process.env.PORT;
console.log(httpListenPort);

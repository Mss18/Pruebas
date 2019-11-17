"use strict";

const util = require("util");
const sleep = util.promisify(setTimeout);

async function taskOne() {
  throw new Error("ERROR!!!");
  await sleep(4000);
  return "Value One";
}

async function taskTwo() {
  await sleep(2000);
  return "Value Two";
}

module.exports = taskOne;
module.exports = taskTwo;

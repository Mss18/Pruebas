"use strict";

const taskOne = require("./tasks");
const taskTwo = require("./tasks");

async function main() {
  //   console.log("Measuring time");
  const valueOne = await taskOne();
  const valueTwo = await taskTwo();
  //   console.timeEnd("Measuring time");

  console.log(`Task one returned ${valueOne}`);
  console.log(`Task two returned ${valueTwo}`);
}

main();

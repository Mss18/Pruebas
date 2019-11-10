"use strict";

class Animal {
  constructor(name) {
    this.name = name;
  }

  print() {
    console.log(`El animal es un@ ${this.name}`);
  }
}

module.exports = Animal;

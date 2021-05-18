"use strict";
exports.__esModule = true;
var Dog_1 = require("./Dog");
var Cat_1 = require("./Cat");
// Run using commands:
// tsc main.ts
// node main.js
var dog = new Dog_1.Dog("Rottweiler", "WOOOOOOOOF!", "Magascar");
console.log("DOG 1:\n");
console.log(dog.bark);
console.log(dog.show());
console.log("---------------------");
var cat1 = new Cat_1.Cat("Persa", "MIAUUUU..", "Amazonia");
console.log("CAT 1:\n");
console.log(cat1.talk());
console.log(cat1.show());
console.log("---------------------");
var dog2 = new Dog_1.Dog("Husky", "Woof! Woof!", "Amazonia");
console.log("DOG 2:\n");
console.log(dog2.bark);
console.log(dog2.show());
console.log("---------------------");

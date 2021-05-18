import {Dog} from "./Dog";
import {Cat} from "./Cat";


// Run using commands:
    // tsc main.ts
    // node main.js
let dog = new Dog("Rottweiler", "WOOOOOOOOF!","Magascar",);
console.log("DOG 1:\n")
console.log(dog.bark);
console.log(dog.show());
console.log("---------------------")

let cat1 = new Cat( "Persa","MIAUUUU..","Amazonia");
console.log("CAT 1:\n")
console.log(cat1.talk());
console.log(cat1.show());
console.log("---------------------")


let dog2 = new Dog( "Husky","Woof! Woof!","Amazonia");
console.log("DOG 2:\n")
console.log(dog2.bark);
console.log(dog2.show());
console.log("---------------------")
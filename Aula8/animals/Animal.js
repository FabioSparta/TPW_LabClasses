"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(h) {
        if (h === void 0) { h = "Earth"; }
        Animal.nAnimals++;
        this.habitat = h;
    }
    Animal.prototype.show = function () {
        return "Im an animal, i live in " + this.habitat + ". Quantity of Animals: " + (Animal.nAnimals);
    };
    Animal.nAnimals = 0;
    return Animal;
}());
exports.Animal = Animal;

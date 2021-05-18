"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Dog = void 0;
var Canine_1 = require("./Canine");
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(race, bark, h) {
        if (h === void 0) { h = "Earth"; }
        var _this = _super.call(this, race, h) || this;
        Dog.nDogs++;
        _this.bark = bark;
        return _this;
    }
    Dog.prototype.show = function () {
        return _super.prototype.show.call(this) + " \n There are " + Dog.nDogs + " Dogs.";
    };
    Dog.prototype.talk = function () {
        return this.bark;
    };
    Dog.nDogs = 0;
    return Dog;
}(Canine_1.Canine));
exports.Dog = Dog;

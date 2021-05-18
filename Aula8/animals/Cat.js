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
exports.Cat = void 0;
var Feline_1 = require("./Feline");
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(race, meow, h) {
        if (h === void 0) { h = "Earth"; }
        var _this = _super.call(this, race, h) || this;
        Cat.nCats++;
        _this.meow = meow;
        return _this;
    }
    Cat.prototype.show = function () {
        return _super.prototype.show.call(this) + " \n There are " + Cat.nCats + " Cats.";
    };
    Cat.prototype.talk = function () {
        return this.meow;
    };
    Cat.nCats = 0;
    return Cat;
}(Feline_1.Feline));
exports.Cat = Cat;

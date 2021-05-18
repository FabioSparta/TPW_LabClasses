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
exports.Feline = void 0;
var Mammal_1 = require("./Mammal");
var Feline = /** @class */ (function (_super) {
    __extends(Feline, _super);
    function Feline(race, h) {
        if (h === void 0) { h = "Earth"; }
        var _this = _super.call(this, h) || this;
        Feline.nFelines++;
        _this.race = race;
        return _this;
    }
    Feline.prototype.show = function () {
        return _super.prototype.show.call(this) + " \n There are " + Feline.nFelines + " Felines. \n Im a(n) " + this.race;
    };
    Feline.nFelines = 0;
    return Feline;
}(Mammal_1.Mammal));
exports.Feline = Feline;

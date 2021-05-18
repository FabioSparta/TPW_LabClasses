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
exports.Canine = void 0;
var Mammal_1 = require("./Mammal");
var Canine = /** @class */ (function (_super) {
    __extends(Canine, _super);
    function Canine(race, h) {
        if (h === void 0) { h = "Earth"; }
        var _this = _super.call(this, h) || this;
        Canine.nCanines++;
        _this.race = race;
        return _this;
    }
    Canine.prototype.show = function () {
        return _super.prototype.show.call(this) + " \n There are " + Canine.nCanines + " Canines. \n Im a(n) " + this.race;
    };
    Canine.nCanines = 0;
    return Canine;
}(Mammal_1.Mammal));
exports.Canine = Canine;

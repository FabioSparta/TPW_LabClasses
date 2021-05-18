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
exports.Mammal = void 0;
var Animal_1 = require("./Animal");
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal(h) {
        if (h === void 0) { h = "Earth"; }
        var _this = _super.call(this, h) || this;
        Mammal.nMammals++;
        return _this;
    }
    Mammal.prototype.show = function () {
        return _super.prototype.show.call(this) + " \n There are " + Mammal.nMammals + " Mammals.";
    };
    Mammal.prototype.talk = function () { };
    Mammal.nMammals = 0;
    return Mammal;
}(Animal_1.Animal));
exports.Mammal = Mammal;

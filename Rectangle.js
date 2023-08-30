"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Rectangle = void 0;
var inheritance_1 = require("./inheritance");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height, radius) {
        var _this = _super.call(this, width, height) || this;
        _this._radius = radius;
        return _this;
    }
    Rectangle.prototype.getInfor = function () {
        return "chieu dai: ".concat(this._height, ", chieu rong: ").concat(this._width, ", ban kinh: ").concat(this._radius);
    };
    return Rectangle;
}(inheritance_1.Shape));
exports.Rectangle = Rectangle;

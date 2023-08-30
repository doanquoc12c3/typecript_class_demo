"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(width, height) {
        this._width = width;
        this._height = height;
    }
    Shape.prototype.getheight = function () {
        return this._height;
    };
    Shape.prototype.setheight = function (value) {
        this._height = value;
    };
    Shape.prototype.getwidth = function () {
        return this._width;
    };
    Shape.prototype.setwidth = function (value) {
        this._width = value;
    };
    return Shape;
}());
exports.Shape = Shape;

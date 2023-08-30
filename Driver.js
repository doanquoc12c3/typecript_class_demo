"use strict";
exports.__esModule = true;
var inheritance_1 = require("./inheritance");
var Rectangle_1 = require("./Rectangle");
var myShape = new inheritance_1.Shape(12, 34);
var myRec = new Rectangle_1.Rectangle(1, 3, 5);
console.log(myRec.getInfor());

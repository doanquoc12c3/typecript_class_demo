var MyClass = /** @class */ (function () {
    function MyClass(name, age) {
        this.name = name;
        this.age = age;
    }
    MyClass.prototype.getName = function () {
        return this.name;
    };
    MyClass.prototype.setName = function (name) {
        this.name = name;
    };
    return MyClass;
}());
var myClass = new MyClass("doan quoc", 25);
var myName = myClass.getName();
console.log(myClass.getName());
console.log(myClass.getName());

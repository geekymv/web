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
var Animal = /** @class */ (function () {
    function Animal(name) {
        console.log("Animal constructor ".concat(name));
    }
    Animal.prototype.sayHello = function () {
        console.log("Animal ".concat(name, " say hello"));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        var _this = _super.call(this, name) || this;
        console.log("Dog constructor ".concat(name));
        return _this;
    }
    Dog.prototype.sayHello = function () {
        // super.sayHello();
        console.log("Dog ".concat(name, " say hello"));
    };
    return Dog;
}(Animal));
var dog = new Dog('tomm');
dog.sayHello();
//# sourceMappingURL=23_class_inheritance.js.map
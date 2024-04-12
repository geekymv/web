var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () {
    };
    return Person;
}());
var p = new Person();
console.log(typeof Person); // function
console.log(p.greet === Person.prototype.greet); // true
//# sourceMappingURL=21_class.js.map
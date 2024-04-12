var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
        console.log('constructor ' + this.name);
    }
    Student.sayHello = function () {
        console.log('static method');
    };
    Student.prototype.sayHi = function () {
        console.log('say hi ' + this.name);
    };
    return Student;
}());
var s = new Student('tony');
Student.sayHello();
s.sayHi();
//# sourceMappingURL=22_class_body_method.js.map
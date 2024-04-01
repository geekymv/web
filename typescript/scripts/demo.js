console.log("Hello World");
function greetPerson(name) {
    var greet;
    if (name == "Jack") {
        // let is block scope
        greet = "Hello Jack";
    }
    else {
        greet = "Hello Everyone";
    }
    console.log(greet);
}
greetPerson("Jack");
var a = 1;
var b = 20;
if (a == 1) {
    var a = 10;
    var b_1 = 2;
    console.log(a); // 10
    console.log(b_1); // 2
}
console.log(a); // 10
console.log(b); // 20
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i); // 输出了10次10
    }, 1000);
}
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log(i_1); // 0 1 2 ...
    }, 1000);
};
// let is ok
for (var i_1 = 0; i_1 < 10; i_1++) {
    _loop_1(i_1);
}
//# sourceMappingURL=demo.js.map
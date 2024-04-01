console.log("Hello World");

function greetPerson(name) {
    let greet;
    if(name == "Jack") {
        // let is block scope
        greet = "Hello Jack"
    } else {
        greet = "Hello Everyone";
    }
    console.log(greet)
}

greetPerson("Jack")


var a = 1;
var b = 20;
if (a == 1) {
    var a = 10;
    let b = 2;
    console.log(a); // 10
    console.log(b); // 2
}
console.log(a); // 10
console.log(b); // 20

for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i); // 输出了10次10
    }, 1000)
}

// let is ok
for (let i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i); // 0 1 2 ...
    }, 1000)
}
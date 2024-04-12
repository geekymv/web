class Person{
    greet(){

    }
}

let p = new Person();
console.log(typeof Person) // function
console.log(p.greet === Person.prototype.greet); // true
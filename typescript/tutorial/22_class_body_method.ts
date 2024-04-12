class Student {
    constructor(name) {
        this.name = name;
        console.log('constructor ' + this.name);
    }

    static sayHello() {
        console.log('static method');
    }

    sayHi() {
        console.log('say hi ' + this.name);
    }

}

const s = new Student('tony');

Student.sayHello();

s.sayHi();

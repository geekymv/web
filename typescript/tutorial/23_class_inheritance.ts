class Animal {
    constructor(name) {
        console.log(`Animal constructor ${name}`)
    }

    sayHello() {
        console.log(`Animal ${name} say hello`);
    }
}

class Dog extends Animal {

    constructor(name) {
        super(name);
        console.log(`Dog constructor ${name}`);
    }

    sayHello() {
        // super.sayHello();
        console.log(`Dog ${name} say hello`);
    }

}


const dog = new Dog('tomm');
dog.sayHello();

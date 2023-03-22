
// class
class Rectangle {
    constructor(height, width) {
        this.height = height
        this.width = width
    }

    speak() {
        console.log(`${this.height} and ${this.width}`)
    }
}


const obj = {
    log: ['a', 'b', 'c'],

    // getter
    get latest() {
        return this.log[this.log.length - 1]
    },

    foo() {
        return "bar"
    }
}

const language = {
    // setter
    set current(name) {
      this.log.push(name)
    },
    log: []
}

const rect = new Rectangle(10, 20)
rect.speak()

console.log(obj.foo())
console.log(obj.latest)


language.current = 'EN'
language.current = 'FA'
console.log(language.log)

// require 建议写相对路径，不能省略./和../
const demo = require("./demo-hello")

console.log(demo)

console.log(demo.print())
console.log(demo.hello())
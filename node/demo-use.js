// require 建议写相对路径，不能省略./和../
const demo = require("./demo-hello")

console.log(demo)

console.log(demo.print())
console.log(demo.hello())

/**
 * CommonJS 规范
 * module.exports、exports 以及 require 这些都是 CommonJS 模块化规范中的内容
 * Node.js 是实现了 CommonJS 模块化规范，二者关系有点像 javascript 和 ECMAScript
 */
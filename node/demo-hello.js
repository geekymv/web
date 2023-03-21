function print() {
    return 'print';
}

function hello() {
    return 'hello';
}

// 模块暴露数据方式一
/*
module.exports = {
    print: print,
    hello
}
*/

// exports = module.exports = {}
console.log(exports)
console.log(module.exports === exports)

// 方式二 exports.name = value
exports.print = print
exports.hello = hello



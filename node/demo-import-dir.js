// 如果导入的路径是个文件夹，则会首先检测该文件夹下的 package.json 文件中的 main 属性对应的文件，如果存在则导入，否则会报错
// 如果 main 属性不存在，或则 package.json 不存在，则会尝试导入文件夹下的 index.js 和 index.json，如果还是没有找到则报错
const dir = require('./module')

console.log(dir.app())
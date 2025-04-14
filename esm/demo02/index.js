// 导入全部，通用
// import * as school from './school.js'

// console.log(school)

// 命名导入
import {
    name,
    address,
    getTel
} from './school.js'

console.log(`school name: ${name}, address:${address}, tel: ${getTel()}`)
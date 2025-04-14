// 万能导入，导入所有
import * as school from './school.js'
// import * as student from './student.js'
import {name as stuName, age, getTel} from './student.js'

console.log(`school name: ${school.name}, address: ${school.address}, tel: ${school.getTel()}`)
console.log(`student name: ${stuName}, age: ${age}, tel: ${getTel()}`)
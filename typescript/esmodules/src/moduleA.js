/*
import {name, age} from './moduleB.js'

console.log(`My name is ${name} , age is ${age}`);
*/

// 导入使用别名
import {name as myName, age as myAge, obj} from './moduleB.js'
import school from './exportDefault.js'
import { sayMessage, SayMessage } from './exportFunctionAndClass.js';

// myAge = 21; // 只读的

obj.name = 'lily';

console.log(`My name is ${myName} , age is ${myAge} ${obj.name}`);

console.log(school);


sayMessage();

const sm = new SayMessage();
sm.sayMessage();

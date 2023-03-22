// 方式1
/*
export var name = 'tom';

export function print() {
    return "func print";
}
 */

// 方式2
/*
var name = 'tom';
function print() {
    return 'func print';
}
export {
    name,
    print
}
*/

// 方式3
// 一个文件内只能有一个 export default
const name = 'tom'
export default {
    name,
    print: function () {
        return "func print";
    }
}

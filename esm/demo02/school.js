const name = "红星小学";
const address = "北京市海淀区清华东路";

function getTel() {
    return "010-88888888";
}

function getCities() {
    return ["北京", "上海", "广州", "深圳"];
}

// 统一导出
// 这里的大括号{}, 不是一个对象，而是一个代码块
export {
    name,
    address,
    getTel,
}
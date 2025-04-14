const name = "红星小学";
const address = "北京市海淀区清华东路";

function getTel() {
    return "010-88888888";
}

function getCities() {
    return ["北京", "上海", "广州", "深圳"];
}

// 默认导出，这里的大括号{}是一个对象
export default {
    name,
    address,
    getTel,
}
// 分别导出
export const name = "红星小学";
const address = "北京市海淀区清华东路";

function getTel() {
    return "010-88888888";
}

function getCities() {
    return ["北京", "上海", "广州", "深圳"];
}

// 统一导出
export { address }

// 默认导出
export default getTel
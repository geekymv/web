const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

// 添加点击事件
let i = 0
/*
myHeading.addEventListener("click", function () {
    myHeading.textContent = ++i + "";
})
 */
myHeading.addEventListener("click", ()=> {
    myHeading.textContent = ++i + "";
})

// 切换图片
const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
}

const myBtn = document.querySelector("button");
function setUserName() {
    const myName = prompt("Please enter you name.");
    if (!myName) {
        // 用户没有输入
        setUserName()
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Firefox is cool, ${myName}`;
    }
}
myBtn.onclick = () => {
    setUserName()
}
if (!localStorage.getItem("name")) {
    setUserName()
} else {
    const storedName = localStorage.getItem("name")
    myHeading.textContent = `Firefox is cool, ${storedName}`;
}

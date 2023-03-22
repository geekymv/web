import {useState} from "react";

function MyButton() {
    // 当前值 count, 初始值为0
    // 更新值 setCount
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1);
    }

    return(
        <button onClick={handleClick}>
            Click {count} times
        </button>
    );
}

function UseState() {
    return (
        <div>
            <h1>Counters that update separately</h1>
            <!-- 每个 button 更新自己的 count，不会互相影响 -->
            <MyButton/>
            <MyButton/>
        </div>
    );
}

export default UseState
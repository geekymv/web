import {useState} from "react";

function UseState() {
    // 当前值 count, 初始值为0
    // 更新值 setCount
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1);
    }

    /* 多个 MyButton 共享数据 */
    return (
        <div>
            <h1>Counters that update separately</h1>
            <MyButton count={count} onClick={handleClick}/>
            <MyButton count={count} onClick={handleClick}/>
        </div>
    );
}


function MyButton({count, onClick}) {
    return(
        <button onClick={onClick}>
            Click {count} times
        </button>
    );
}


export default UseState
import React from "react";

function FunctionClick() {

    function clickHandler() {
        console.log('click button handler')
    }

    return(
        <div>
            <button onClick={clickHandler}>Click</button>
            {/* <button onClick={clickHandler()}>Click</button> 方法会立即调用 */}
        </div>
    )

}

export default FunctionClick

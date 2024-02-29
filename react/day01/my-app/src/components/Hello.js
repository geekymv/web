import React from "react";

const Hello = ()=> {
    // return (
    //     <div id='div' className='dummyClass'>
    //         <h1>Hello</h1>
    //     </div>
    // )
    // 不使用 JSX
    return React.createElement(
        'div', 
        {id:'div', className:'dummyClass'}, 
        React.createElement('h1', null, 'Hello React')
    );

}

export default Hello
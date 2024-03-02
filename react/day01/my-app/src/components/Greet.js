import React from 'react'

/**
 * Functional Components
 * @returns 
 */
/*
function Greet() {
    return <h1>Hello Greet</h1>
}
*/
const Greet = (props) => {
    console.log(props)
    // props 的值无法修改
    // props.name = 'ketty'
    return (
        <div>
            <h1>Hello {props.name}, age is {props.age}</h1>
            {props.children}
        </div>

    )
}

export default Greet
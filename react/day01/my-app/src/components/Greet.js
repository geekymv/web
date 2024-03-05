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
/*
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
*/

/*
const Greet = ({name, age, children}) => {
    console.log(name, age)
    // props 的值无法修改
    // props.name = 'ketty'
    return (
        <div>
            <h1>Hello {name}, age is {age}</h1>
            {children}
        </div>

    )
}
*/

const Greet = (props) => {
    const {name, age} = props
    return (
        <div>
            <h1>Hello {name}, age is {age}</h1>
        </div>

    )
}

export default Greet
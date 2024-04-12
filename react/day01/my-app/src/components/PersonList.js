import React from "react";
import Person from './Person'

function PersonList() {

    const persons = [
        {
            id: 1,
            name: "jack",
            age: 20 
        },
        {
            id:2,
            name: "tom",
            age: 18
        }
    ]

    /*
    const personList = persons.map(person => (
        <h2>I am {person.name} . I am {person.age} years old</h2>)
    )
    */
    const personList = persons.map(person => <Person person={person}></Person>)

    return(
        <div>{personList}</div>
    )

}

export default PersonList

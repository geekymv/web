import React from "react";

function Person({person}) {

    return (
        <div>
        <h2>ok, I am {person.name} . I am {person.age} years old</h2>
        </div>
    )

}

export default Person
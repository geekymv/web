import React from "react";

function NameList() {

    const names = ["jack", "tony", "pony"]
    const nameList = names.map(name => <h2>{name}</h2>)

    return(
        <div>{nameList}</div>
        /*
        <div>
        {
            names.map(name => <h2>{name}</h2>)
        }
        </div>
        */

        /*
        <div>
            <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2>
        </div>
        */
    )
}

export default NameList
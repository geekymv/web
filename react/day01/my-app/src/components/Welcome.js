import React, { Component } from "react"

/**
 * Class Component
 */
class Welcome extends Component {
    render() {
        return <h1> Welcome {this.props.name} age is {this.props.age}</h1>
    }
}

export default Welcome
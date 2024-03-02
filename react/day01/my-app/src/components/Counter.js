import React, { Component } from 'react'

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            num: 0
        }
    }

    incrementNum() {
        /*
        this.setState({
            num: this.state.num + 1
        }, () => {
            console.log('num is ', this.state.num)
        })
        // this.setState 是异步执行的
        console.log(this.state.num)
        */
       this.setState((prevState) => ({
        num: prevState.num + 1
       }), () => {
        console.log('num is ', this.state.num)
       })
    }

    incrementFive() {
        this.incrementNum()
        this.incrementNum()
        this.incrementNum()
        this.incrementNum()
        this.incrementNum()
    }

    render() {
        return (
            <div>
                <h1>num:{this.state.num}</h1>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }

}

export default Counter
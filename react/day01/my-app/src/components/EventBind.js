import React, {Component} from "react";

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        // 方式三（推荐使用）
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // 方式一、二、三
    // clickHandler() {
    //     console.log(this) // undefined
    //    this.setState({
    //     message: 'Say goodbye'
    //    })
       
    // }

    // 方式四
    clickHandler = () => {
        console.log(this) // undefined
       this.setState({
        message: 'Say goodbye'
       })
    }


    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler}>Click</button> */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */} {/* 方式一 */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */} {/* 方式二 */}
                <button onClick={this.clickHandler}>Click</button>  {/* 方式三：在 constructor 中 bind */} 
            </div>
        )
    }

}

export default EventBind
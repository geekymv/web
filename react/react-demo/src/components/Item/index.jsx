import React, { Component } from 'react'

export default class Item extends Component {

    state = {
        enter: false
    }
    // 鼠标移入
    handleMouseEnter = ()=> {
        this.setState(
            {enter: true}
        )
    }
    // 鼠标移出
    handleMouseLeave = ()=> {
        this.setState(
            {enter: false}
        )
    }

    handleCheck = (id)=> {
        return (event)=> {
            // 更新 todo
            this.props.updateTodo(id, event.target.checked)
        }
    }


    render() {
        const {id, name, done} = this.props
        const {enter} = this.state
        return (
        <li style={{backgroundColor: enter ? '#ccc' : 'white'}} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <label>
                <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)} />
                <span>{name}</span>
            </label>
            <button style={{display: enter ? 'block' : 'none'}}>删除</button>
        </li>
        )
    }
}

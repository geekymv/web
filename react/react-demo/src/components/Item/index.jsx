import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Item extends Component {

    static propTypes = {
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

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

    deleteTodo = (id) => {
        if (window.confirm('确定要删除么？')) {
            this.props.deleteTodo(id)
        }
    }


    render() {
        const {id, name, done} = this.props
        const {enter} = this.state
        return (
        <li style={{backgroundColor: enter ? '#ccc' : 'white'}} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <label>
                <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                <span>{name}</span>
            </label>
            <button onClick={()=>{this.deleteTodo(id)}} style={{display: enter ? 'block' : 'none'}}>删除</button>
        </li>
        )
    }
}

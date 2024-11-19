import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Footer extends Component {

  static propTypes = {
    updateAllTodo: PropTypes.func.isRequired,
    clearAllDone: PropTypes.func.isRequired
  }

  updateAllTodo = (event)=> {
    this.props.updateAllTodo(event.target.checked)
  }

  // 清除已完成任务
  clearAllDone = ()=> {
    this.props.clearAllDone()
  }


  render() {
    const {todos} = this.props
    // 总数
    const totalCount = todos.length
    // 已完成数量
    const doneCount = todos.reduce((count, todo)=> {
      if (todo.done) {
        return count + 1
      }
      return count
    }, 0)

    return (
      <div>
        <label>
            <input type="checkbox" onChange={this.updateAllTodo} checked={doneCount === totalCount && totalCount !== 0}/>
        </label>
        <span>
            <span>已完成{doneCount}</span> / 全部 {totalCount}
        </span>
        <button onClick={this.clearAllDone}>清除已完成任务</button>
      </div>
    )
  }
}

import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'

export default class Header extends Component {

  // 对接收的props进行类型、必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired 
  }

  // 处理键盘回车事件
  handleKeyUp = (event)=> {
    if (event.keyCode !== 13) {
      return
    }
    const name = event.target.value
    if (name.trim() === '') {
      alert('输入不能为空')
      return
    }

    const todo = {
      id: nanoid(),
      name: name,
      done: false
    }
    // 子组件传递数据给父组件
    this.props.addTodo(todo)

    // 清空输入框
    event.target.value = ''
  }


  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}

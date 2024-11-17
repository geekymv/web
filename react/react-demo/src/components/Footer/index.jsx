import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <label>
            <input type="checkbox" />
        </label>
        <span>
            <span>已完成0</span> / 全部2
        </span>
        <button>清除已完成任务</button>
      </div>
    )
  }
}

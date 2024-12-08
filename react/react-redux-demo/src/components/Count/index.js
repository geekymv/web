import React, { Component } from 'react'
import store from '../../redux/store'
import {createIncrementAction, createDecrementAction} from '../../redux/count_action'

export default class Count extends Component {

    componentDidMount() {
        // redux 只负责管理状态，状态的改变驱动页面的展示，需要自己写
        // 检测 redux 中状态的变化，只要变化，就调用render
        store.subscribe(()=> {
            this.setState({})
        })
    }

    // 加
    increment = () => {
        const {value} = this.selectNumber
        store.dispatch(createIncrementAction(value * 1))
    }

    // 减
    decrement = () => {
        const {value} = this.selectNumber
        store.dispatch(createDecrementAction(value * 1))
    }

    // 奇数再加
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        const count = store.getState()
        if (count % 2 !== 0) {
            store.dispatch(createIncrementAction(value * 1))
        }
    }
    
    // 异步加
    incrementAsync = () => {
        const {value} = this.selectNumber
        setTimeout(()=> {
            store.dispatch(createIncrementAction(value * 1))
        }, 500)
    }


    render() {
        return (
            <div>
            <h1>当前求和为：{store.getState()}</h1>
            <select ref={c => this.selectNumber = c}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <button onClick={this.increment}>加</button>
            <button onClick={this.decrement}>减</button>
            <button onClick={this.incrementIfOdd}>奇数再加</button>
            <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}

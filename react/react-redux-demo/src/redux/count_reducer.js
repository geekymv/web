/**
 * 该文件是用于创建一个Count组件服务的reducer，reducer 的本质就是一个函数
 * reducer 函数会接收两个参数，分别为之前的状态(preState)，动作对象(action)
 */
import {INCREMENT, DECREMENT} from './constant'

const initState = 0
export default function countReducer(preState = initState, action) {
    console.log('countReducer', preState, action)
    // 从 action 对象中获取 type data
    const {type, data} = action
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState
    }
}
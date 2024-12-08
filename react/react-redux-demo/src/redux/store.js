/**
 * 该文件专门用于暴露一个 store 对象，整个应用只有一个 store 对象
 */

// 引入 createStore，专门用于创建 redux 中最为核心的 store 对象
import {createStore} from 'redux'
import countReducer from './count_reducer'

export default createStore(countReducer)


import {INCREMENT, DECREMENT} from './constant'

export const createIncrementAction = (data) => {
    return {
        'type': INCREMENT,
        'data': data
    }
}

export const createDecrementAction = (data) => {
    return {
        'type': DECREMENT,
        'data': data
    }
}
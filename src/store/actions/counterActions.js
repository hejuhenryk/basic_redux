import { actionTypes } from './actionTypes'

//action creator

export const increment = () => {
    return {
        type: actionTypes.INC 
    }
}
export const decrement = () => {
    return {
        type: actionTypes.DEC 
    }
}
export const add = (value) => {
    return {
        type: actionTypes.ADD,
        value: value 
    }
}
export const substract = (value) => {
    return {
        type: actionTypes.SUB,
        value: value
    }
}
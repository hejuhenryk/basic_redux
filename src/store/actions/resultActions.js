import { actionTypes } from './actionTypes'

const saveResult = (result) => {
    return {
        type: actionTypes.SAVE,
        result: result
    }
}
export const save = (result) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(result))
        }, 2000)
    }
}
export const remove = (id) => {
    return {
        type: actionTypes.REMOVE,
        id: id
    }
}

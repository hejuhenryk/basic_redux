import { actionTypes } from '../actions/actionTypes'

const initialState = {
    resoults: []
}

const reducer = (state = initialState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch ( action.type ) {
        case actionTypes.SAVE:
            newState.resoults.push({
                id: `id${newState.resoults.length}_${newState.counter}_${Math.random().toFixed(2)}`,
                value: action.result
            })
            break;
        case actionTypes.REMOVE:
            // newState.resoults.splice(newState.resoults.findIndex( el => el.id === action.value ) ,1)
            return {
                ...state,
                resoults: state.resoults.filter( el => el.id !== action.id )
                //filter returns new array, way to remove from array like concat to add to array
            }
        default:
    }
    return newState
}

export default reducer
import { actionTypes } from '../actions/actionTypes'

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch ( action.type ) {
        case actionTypes.INC:
            newState.counter+=1;
            break;
        case actionTypes.DEC:
            newState.counter-=1;
            break;
        case actionTypes.ADD:
            newState.counter += action.value 
            break;
        case actionTypes.SUB:
            newState.counter -= action.value 
            break;
        default:
    }
    return newState
}

export default reducer
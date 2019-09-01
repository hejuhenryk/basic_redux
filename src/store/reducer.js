const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    let newState = {...state}
    switch ( action.type ) {
        case 'INC':
            newState.counter+=1;
            break;
        case 'DEC':
            newState.counter-=1;
            break;
        case 'ADD':
            newState.counter += action.value 
            break;
        case 'SUB':
            newState.counter -= action.value 
            break;
        default:
    }
    return newState
}

export default reducer
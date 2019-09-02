const initialState = {
    counter: 0,
    resoults: []
}

const reducer = (state = initialState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
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
        case 'SAVE':
            newState.resoults.push({
                id: `id${newState.resoults.length}_${newState.counter}_${Math.random().toFixed(2)}`,
                value: newState.counter
            })
            break;
        case 'REMOVE':
            newState.resoults.splice(newState.resoults.findIndex( el => el.id === action.value ) ,1)
            break;
        default:
    }
    console.log(newState)
    return newState
}

export default reducer
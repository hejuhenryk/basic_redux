const redux = require('redux')
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer

const mainReducer = ( state = initialState, action) => {
    newState = {...state}
    switch (action.type) {
        case 'INC_COUNTER':
            newState.counter++
            break;
        case 'DEC_COUNTER':
            newState.counter--
            break;
        case 'ADD_COUNTER':
            newState.counter += action.paylode
            break;
        default:
            break;
    }

    return newState
}

// Store
const store = createStore(mainReducer)
// Substriction
store.subscribe( () => console.log('sub', store.getState()))

// Dispatching Actions
store.dispatch({type: 'INC_COUNTER'})

store.dispatch({type: 'DEC_COUNTER'})
store.dispatch({type: 'ADD_COUNTER', paylode: 10})



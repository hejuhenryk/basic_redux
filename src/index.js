import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import counterReducer from './store/reducers/counterReducer'
import resoultReducer from './store/reducers/resultReducer'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const globalReducer = combineReducers({
    counter: counterReducer,
    result: resoultReducer
})

//middlewere
const logger = store => {
    return next => {
        return action => {
            console.log('[Mifflewere] Dispaching', action)
            const result = next(action)
            console.log('[MIddlewere] next state', store.getState() )
            return result
        }
    }
} 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(globalReducer, composeEnhancers(applyMiddleware(logger, thunk)))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();

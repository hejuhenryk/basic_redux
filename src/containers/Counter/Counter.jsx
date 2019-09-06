import React from 'react';
import { connect } from 'react-redux'
// import { actionTypes } from '../../store/actions/actions'
import { increment, decrement, substract, add, save, remove } from '../../store/actions/indexActions'

import CounterControl from '../../components/CounterControl/CounterControl.jsx'
import CounterOutput from '../../components/CounterOutput/CounterOutput.jsx';


const Counter = props => {
    return (
        <div >
            <CounterOutput value={props.counter} />
            <CounterControl label="Increment" clicked={props.onIncrementCounter} />
            <CounterControl label="Decrement" clicked={props.onDecrementCounter}  />
            <CounterControl label="Add 5" clicked={props.onAddCounter}  />
            <CounterControl label="Subtract 5" clicked={props.onSubtractCounter}  />
            <br />
        <button onClick={() => props.onSaveCounter(props.counter)}>Save Couter</button>
        <ul>
            {props.savedCounters.map( res => <li key={res.id} id={res.id} onClick={()=>props.onRemove(res.id)}>{res.value}</li>)}
        </ul>
        </div>
    )
}
// state - dostajemy z combainReducers podczas createStore 
const mapStateToProps = (state) => {
    return {
        counter: state.counter.counter,
        savedCounters: state.result.resoults
    }
}

const mapDispatchToState = dispatch => {
    return {
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch(decrement()),
        onAddCounter: () => dispatch(add(5)),
        onSubtractCounter: () => dispatch(substract(5)),
        onSaveCounter: (result) => dispatch(save(result)),
        onRemove: (id) => dispatch(remove(id))
    }
}


export default connect(mapStateToProps, mapDispatchToState)(Counter);

//we pass to connect to information:
// what part of state is intersting to us and what actions we want to dispatch
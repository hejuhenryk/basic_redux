import React from 'react';
import { connect } from 'react-redux'

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
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToState = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INC'}),
        onDecrementCounter: () => dispatch({type: 'DEC'}),
        onAddCounter: () => dispatch({type: 'ADD', value: 5}),
        onSubtractCounter: () => dispatch({type: 'SUB', value: 5})
    }
}


export default connect(mapStateToProps, mapDispatchToState)(Counter);

//we pass to connect to information:
// what part of state is intersting to us and what actions we want to dispatch
// steps
// state - count: 0
// actions - increment, decrement, reset
// reducer - increment -> count => count + 1, decrement -> count => count - 1, reset -> count => 0
// store - create store - providing store in react - use store

import React from 'react';
import './Counter.css';
import { useSelector, useDispatch} from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter } from "./services/actions";

const Counter = () => {

  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(incrementCounter())
  }
  const handleReset = () => {
    dispatch(resetCounter());
  }

  const handleDecrement = () => {
    dispatch(decrementCounter());
  }

  return (
    <div className='container'>
        <div className='box'>
           <h1>COUNTER APP</h1><br></br>
           <h2>{count}</h2><br></br><br></br>
           <button className='button' onClick={handleIncrement}>Increment</button>
           <button className='button' onClick={handleReset}>Reset</button>
           <button className='button' onClick={handleDecrement} disabled= {count===0 ? true : false}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter
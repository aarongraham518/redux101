import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, zeroment} from './actions';

function App() {
  //access to global state
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  
  //Adding dispatch to execute actions to our reducer
  const dispatch = useDispatch();
  const dispatch1 = useDispatch();
  const dispatch2 = useDispatch();

  return (    
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch1(decrement())}>-</button>
      <button onClick={() => dispatch2(zeroment())}>reset</button>

      {isLogged ? <h3>Valuable information I should not see</h3> : ''}
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';


//STORE, which is a globalized data/state.

//ACTION, (INCREMENT)describes what we want to do
//an Action is a function that returns an Object
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

//REDUCER, describes how our actions transform the state into the next state
const counter = (state = 0, action) => {
  switch(action.type){
    case "INCREMENT":
        return state + 1;
    case "DECREMENT":
        return state - 1;

  }
};

//Add counter to the store
let store = createStore(counter);

//Display in console
store.subscribe(() => console.log(store.getState()));

/*DISPATCH, execute this Action to the reducer, the Reducer will check
what to do and the Store gets updated :|*/
store.dispatch(increment);
store.dispatch(decrement);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

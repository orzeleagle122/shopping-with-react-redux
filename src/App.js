
import './App.css';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import cartItems from "./cart-items";
import React from 'react';
import {createStore} from 'redux';

//initial store
const initialStore={
  count:0,
  name:'patryk',
}

//store
const store = createStore(reducer,initialStore);
store.dispatch({type:'DECREASE'})
store.dispatch({type:'INCREASE'})
store.dispatch({type:'INCREASE'})
store.dispatch({type:'CHANGE_NAME'})

//reducer(old-state,action) return update or old state
function reducer(state=initialStore,action){
  console.log({state,action});
  switch(action.type){
    case 'DECREASE':
      console.log(state);
      return {
        ...state, 
        count:state.count-1
      }
    case 'INCREASE':
      console.log(state);
      return {
        ...state, 
        count:state.count+1,
      }
    case 'CHANGE_NAME':
      console.log(state.name);
      return {
        ...state, 
        name:'bobo',
      }
    default:
      return state
  }
}



function App() {
  return (
    <>
      <Navbar cart={store.getState()}/>
      <CartContainer cart={cartItems} />
    </>
  );
}

export default App;

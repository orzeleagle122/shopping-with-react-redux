
import './App.css';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import cartItems from "./cart-items";
import React from 'react';
import {createStore} from 'redux';
import {
  DECREASE,
  INCREASE
} from './actions';
import {reducer} from './reducers';

//initial store
const initialStore={
  count:0,
  name:'patryk',
}

//store
const store = createStore(reducer,initialStore);
store.dispatch({type:DECREASE})
store.dispatch({type:INCREASE})
store.dispatch({type:INCREASE})






function App() {
  return (
    <>
      <Navbar cart={store.getState()}/>
      <CartContainer cart={cartItems} />
    </>
  );
}

export default App;

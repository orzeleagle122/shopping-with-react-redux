
import './App.css';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import cartItems from "./cart-items";
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';


function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;

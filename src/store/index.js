import {createStore} from 'redux';
import {reducer} from '../reducers';
import cartItems from "../cart-items";

//initial store
const initialStore={
    cart:cartItems,
    total:105,
    amount:10
  }
  
  //store
  export const store = createStore(reducer,initialStore);
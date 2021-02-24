import React from 'react';
import {createStore} from 'redux';
import {
    DECREASE,
    INCREASE
} from '../actions';


//reducer(old-state,action) return update or old state
export const reducer=(state,action)=>{
    console.log({state,action});
    switch(action.type){
      case DECREASE:
        console.log(state);
        return {
          ...state, 
          count:state.count-1
        }
      case INCREASE:
        console.log(state);
        return {
          ...state, 
          count:state.count+1,
        }      
      default:
        return state
    }
  }
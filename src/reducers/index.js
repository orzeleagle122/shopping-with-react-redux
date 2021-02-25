import {
  CLEAN_CART,
  DECREASE,
  INCREASE,
  REMOVE,
  GET_TOTALS,
  TOOGLE_AMOUNT
} from '../actions';
import cartItems from "../cart-items";

//initial store
const initialStore={
  cart:cartItems,
  total:0,
  amount:0
}

//reducer(old-state,action) return update or old state
export const reducer=(state=initialStore,action)=>{
  if(action.type===CLEAN_CART){
    return {
      ...state,
      cart:[]
    }
  }

  if(action.type===GET_TOTALS){
    let {total,amount}=state.cart.reduce((cartTotal,cartItem)=>{
      const {price,amount}=cartItem;
      const itemTotal=price*amount;
      cartTotal.amount+=amount;
      cartTotal.total+=itemTotal
      return cartTotal;
    },{total:0,amount:0})
    total=parseFloat(total.toFixed(2));
    return {...state,total,amount}
  }

  if(action.type===INCREASE){
          return {
            ...state,
            cart:state.cart.map(item=>{
              if(item.id===action.payload.id){
                item={...item,amount:item.amount+1}
              }
              return item;
            })
          }
  }

  if(action.type===REMOVE){
    return {
            ...state,
            cart:state.cart.filter(item=>item.id!==action.payload.id)
          }
  }

  if(action.type===DECREASE){
      return {
        ...state,
        cart:state.cart.map(item=>{
            if(item.id===action.payload.id){
              item={...item,amount:item.amount-1}
            }
            return item;
          })
      }

  }

  if(action.type===TOOGLE_AMOUNT){
    return {
      ...state,
      cart:state.cart.map(item=>{
        if(item===action.payload.id){
          if(action.payload.toggle==='inc'){
            return item={...item,amount:item.amount+1}            
          }
          if(action.payload.toggle==='dec'){
            return item={...item,amount:item.amount-1}            
          }
        }
        return item
      })
    }
  }

  return state;

    // switch(action.type){
    //   case CLEAN_CART:
    //     return {...state,cart:[]}
    //   case DECREASE:
    //     console.log('test');
    //     break;
    //   case INCREASE:
    //       return {
    //         ...state,
    //         cart:state.cart.map(item=>{
    //           if(item.id===action.payload.id){
    //             item={...item,amount:item.amount+1}
    //           }
    //           return item;
    //         })
    //       }
    //   case REMOVE:
    //     return {
    //       ...state,
    //       cart:state.cart.filter(item=>item.id!==action.payload.id)
    //     }
    //   default:
    //     return state
    // }
  }
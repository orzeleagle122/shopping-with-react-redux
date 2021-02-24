import {
  CLEAN_CART,
  DECREASE,
  INCREASE,
  REMOVE
} from '../actions';


//reducer(old-state,action) return update or old state
export const reducer=(state,action)=>{
    switch(action.type){
      case CLEAN_CART:
        return {...state,cart:[]}
        // break;
      case DECREASE:
        if(action.payload.id===1){
          console.log('jestem tu');
        } else {
          console.log('jestem tu');
          return {
            ...state,
            cart:state.cart.map(item=>{
              if(item.id===action.payload.id){
                item={...item,amount:item.amount - 1}
              }
              return item;
            })
          }
        } 
        break;
      case INCREASE:
        console.log('jestem tu kurwa');
        return {
          ...state,
          cart:state.cart.map(item=>{
            if(item.id===action.payload.id){
              item={...item,amount:item.amount+1}
            }
            return item;
          })
        }
      case REMOVE:
        return {
          ...state,
          cart:state.cart.filter(item=>item.id!==action.payload.id)
        }
      default:
        return state
    }
  }
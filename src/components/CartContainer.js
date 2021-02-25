import React, { useEffect } from "react";
import CartItem from "./CartItem";
import {connect} from 'react-redux';
import {
  CLEAN_CART,
  GET_TOTALS
} from '../actions';


const CartContainer = ({ cart=[],total,dispatch}) => {
  useEffect(()=>{
    dispatch({
      type:GET_TOTALS
    })
  },[cart,dispatch])

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={()=>dispatch({type:CLEAN_CART})}>clear cart</button>
      </footer>
    </section>
  );
};

const mapStateToProps=({cart,total})=>{
  return {cart,total}
}

// const mapDispatchToProps=(dispatch)=>{
//   return {
//     cleanCart: ()=>dispatch({type:CLEAN_CART})
//   }
// }

export default connect(mapStateToProps
  // ,mapDispatchToProps
  )(CartContainer);

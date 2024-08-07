import React, { useContext, useEffect } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';


const Cart = () => {
  const { cartItems, food_list, removeFromCart, setCartItems } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        <p>kook</p>

                {food_list.map((item,index)=>{
                    if(cartItems) 
                    {
                        return (
                          <div className="cart-items-title cart-items-item">
                            <p>{item.name}</p>
                          </div>
                        ) 
                    }            
                })}
      </div>
    </div>
  );
};

export default Cart;

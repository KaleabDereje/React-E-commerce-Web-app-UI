import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

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
        <p>Hello</p>
        {food_list.map((item, index) => {
        if (cartItems[item._id] > 0) {
          console.log('lol' + item.name);
          return (
            <div key={index} className="cart-items-title">
              <p>{item.name}</p>
              <button onClick={() => removeFromCart(item._id)}>Remove</button>
            </div>
          );
        }
        
          return null;
        })}
      </div>
    </div>
  );
};

export default Cart;

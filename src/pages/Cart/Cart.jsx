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
          <p></p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          const quantity = cartItems[item._id] || 0;
          if (quantity > 0) {
            console.log("id" + item._id);
            return (
              <div key={index} className="cart-items-item">
                <p>{quantity}</p>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <p>{quantity * item.price}</p>
                <button onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            );
          }
          return null; // Or return a placeholder if desired
        })}
      </div>
    </div>
  );
};

export default Cart;

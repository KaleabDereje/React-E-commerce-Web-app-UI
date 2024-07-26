import React, { useState, createContext, useEffect } from "react";

import {food_list} from "../assets/assets";


//create the context
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [category, setCategory] = useState("All");
    const [cartItems, setCartItems] = useState([]);
/*
    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
*/ 

const addToCart = (itemId) => {
    const existingItem = cartItems.find((item) => item.id === itemId);
    if (existingItem) {
      setCartItems(cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { id: itemId, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    const existingItem = cartItems.find((item) => item.id === itemId);
    if (existingItem && existingItem.quantity > 1) {
      setCartItems(cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      ));
    } else {
      setCartItems(cartItems.filter((item) => item.id !== itemId));
    }
  };


    const contextValue = {
        food_list,
        category,
        setCategory,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
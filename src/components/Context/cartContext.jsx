"use client";
import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (prevItem) =>
          prevItem.id === item.id && prevItem.selectedSize === item.selectedSize
      );

      if (existingItem) {
        return prevItems.map((prevItem) =>
          prevItem.id === item.id && prevItem.selectedSize === item.selectedSize
            ? { ...prevItem, quantity: prevItem.quantity + item.quantity }
            : prevItem
        );
      } else {
        return [...prevItems, item];
      }
    });
  };

  const value = { cartItems, addToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

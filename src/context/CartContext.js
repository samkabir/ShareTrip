"use client";

import discountedPrice from "@/components/Utils/Functions/discountedPrice/discountedPrice";
import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (item, count) => {
    setCart((prevCart) => {
      let updatedCart;

      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.item.id === item.id
      );

      if (existingItemIndex !== -1) {
        updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity = count;
      } else {
        updatedCart = [...prevCart, { item, quantity: count }];
      }

      return updatedCart;
    });
  };

  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.item.id !== itemId));
    setTotalPrice(getTotalPrice());
  };

  const updateItemQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.item.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const getTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      const discountedAmount = discountedPrice(
        item?.item?.price,
        item?.item?.discountPercentage
      );
      const priceToUse =
        discountedAmount < item?.item?.price
          ? discountedAmount
          : item.item?.price;
      total += priceToUse * item.quantity;
    });
    setTotalPrice(total.toFixed(2));
  };

  const getTotalItems = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    setTotalItems(total);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      getTotalPrice();
      getTotalItems();
    }
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPrice,
        setTotalPrice,
        addItem,
        removeItem,
        updateItemQuantity,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

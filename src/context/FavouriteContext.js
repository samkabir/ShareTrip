"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

const FavContext = createContext();

export const FavouriteProvider = ({ children }) => {
  const [fav, setFav] = useState([]);

  const addOrRemItem = (item) => {
    setFav((prevFav) => {
      let updatedFav;

      const existingItemIndex = prevFav.findIndex(
        (favItem) => favItem.item.id === item.id
      );

      if (existingItemIndex !== -1) {
        updatedFav = prevFav.filter((favItem) => favItem.item.id !== item.id);
      } else {
        updatedFav = [...prevFav, { item }];
      }

      return updatedFav;
    });
  };

  return (
    <FavContext.Provider
      value={{
        fav,
        setFav,
        addOrRemItem,
      }}
    >
      {children}
    </FavContext.Provider>
  );
};

export const useFavourite = () => useContext(FavContext);

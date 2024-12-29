"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

const FavContext = createContext();

export const FavouriteProvider = ({ children }) => {
  const [fav, setFav] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedFav = localStorage.getItem("favs");
      if (savedFav) {
        try {
          setFav(JSON.parse(savedFav));
        } catch (error) {
          console.error("Failed to parse favs from localStorage:", error);
          setFav([]);
        }
      }
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (isInitialized && typeof window !== "undefined") {
      try {
        localStorage.setItem("favs", JSON.stringify(fav));
      } catch (error) {
        console.error("Failed to save favourite to localStorage:", error);
      }
    }
  }, [fav, isInitialized]);

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

"use client";

import React, { Suspense } from "react";
import { CartProvider } from "./CartContext";
import { FavouriteProvider } from "./FavouriteContext";

const AppsProvider = ({ children }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* <CartProvider> */}
        {/* <FavouriteProvider> */}
          {children}
          {/* </FavouriteProvider> */}
      {/* </CartProvider> */}
    </Suspense>
  );
};

export default AppsProvider;

import React, { Suspense } from "react";
import { CartProvider } from "./CartContext";
import { FavouriteProvider } from "./FavouriteContext";

const AppsProvider = ({ children }) => {
  return (
    <CartProvider>
      <FavouriteProvider>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </FavouriteProvider>
    </CartProvider>
  );
};

export default AppsProvider;

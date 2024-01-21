import React from "react";
import BasketProvider from "../BasketProvider";
import WishlistProvider from "../WishlistProvider";

function MainProvider({ children }) {
  return (
    <>
      <BasketProvider>
        <WishlistProvider>{children}</WishlistProvider>
      </BasketProvider>
    </>
  );
}

export default MainProvider;

import React, { createContext, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

export const wishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);
  // const [wishlist, setWishlist] = useState([])

  const addWishlist = (item) => {
    const index = wishlist.findIndex((x) => x._id === item._id);
    if (index === -1) {
      setWishlist([...wishlist, item]);
    } else {
      deleteWishlist(item._id);
    }
  };

  const deleteWishlist = (id) => {
    setWishlist(wishlist.filter((x) => x._id !== id));
  };

  const data = {
    wishlist,
    addWishlist,
    deleteWishlist,
  };
  return (
    <wishlistContext.Provider value={data}>{children}</wishlistContext.Provider>
  );
}

export default WishlistProvider;

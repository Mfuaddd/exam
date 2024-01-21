import React, { useContext } from "react";
import "./index.scss";
import { Helmet } from "react-helmet-async";
import { wishlistContext } from "../../contexts/WishlistProvider";

function WishlistPage() {
  const { wishlist, addWishlist, deleteWishlist } = useContext(wishlistContext);
  return (
    <>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <div className="header-bg"></div>
      <div className="wishlist">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Text</th>
                <th>Price</th>
                <th>Control</th>
              </tr>
            </thead>
            <tbody>
              {wishlist &&
                wishlist.map((item) => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.text}</td>
                    <td>${item.price}</td>
                    <td>
                      <button onClick={() => deleteWishlist(item._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default WishlistPage;

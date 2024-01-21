import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { wishlistContext } from "../../contexts/WishlistProvider";
import { basketContext } from "../../contexts/BasketProvider";

function DetailPage() {
  const { id } = useParams();
  const [apiData, setApiData] = useState([]);

  const { wishlist, addWishlist, deleteWishlist } = useContext(wishlistContext);
  const {
    basket,
    addBasket,
    deleteBasket,
    increaseBasket,
    decreaseBasket,
    totalBasket,
  } = useContext(basketContext);

  const getApiData = async () => {
    const res = await fetch(`http://localhost:3000/${id}`);
    const data = await res.json();
    setApiData(data);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Detail</title>
      </Helmet>
      <div className="header-bg"></div>
      <div className="detail">
        <div className="container">
          <div className="menu-card detail-card" key={apiData._id}>
            <div className="menu-card__body">
              <div className="menu-card__title">{apiData.name}</div>
              <div className="menu-card__bottom">
                <div className="menu-card__text">{apiData.text}</div>
                <div className="menu-card__line"></div>
                <div className="menu-card__price">${apiData.price}</div>
              </div>
            </div>
            <div className="menu-card__control">
              <i
                onClick={() => addBasket(apiData)}
                className={`fa-solid fa-cart-shopping ${
                  basket.some((x) => x._id === apiData._id) ? " green" : ""
                }`}
              ></i>
              <i
                onClick={() => addWishlist(apiData)}
                className={`fa-solid fa-heart ${
                  wishlist.some((x) => x._id === apiData._id) ? " red" : ""
                }`}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPage;

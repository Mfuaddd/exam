import React, { useContext, useState } from "react";
import "./index.scss";
import { useEffect } from "react";
import { wishlistContext } from "../../contexts/WishlistProvider";
import { basketContext } from "../../contexts/BasketProvider";
import { useNavigate } from "react-router-dom";

function Menu() {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  const { wishlist, addWishlist } = useContext(wishlistContext);
  const { basket, addBasket } = useContext(basketContext);

  const getApiData = async () => {
    const res = await fetch("http://localhost:3000/");
    const data = await res.json();
    setApiData(data);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="menu">
      <div className="container">
        <div className="menu__header">
          <div className="menu__icon">
            <i className="fa-solid fa-plate-wheat"></i>
          </div>
          <div className="menu__title">
            <div className="menu__title__line"></div>
            Our Menu
            <div className="menu__title__line"></div>
          </div>
        </div>
        <ul className="menu__category">
          <li>Breakfast</li>
          <li>Brunch</li>
          <li>Lunch</li>
          <li>Dinner</li>
        </ul>
        <div className="menu__body">
          {apiData &&
            apiData.map((item) => (
              <div className="menu-card" key={item._id}>
                <div className="menu-card__body">
                  <div className="menu-card__title">{item.name}</div>
                  <div className="menu-card__bottom">
                    <div className="menu-card__text">{item.text}</div>
                    <div className="menu-card__line"></div>
                    <div className="menu-card__price">${item.price}</div>
                  </div>
                </div>
                <div className="menu-card__control">
                  <i
                    onClick={() => addBasket(item)}
                    className={`fa-solid fa-cart-shopping ${
                      basket.some((x) => x._id === item._id) ? " green" : ""
                    }`}
                  ></i>
                  <i
                    onClick={() => addWishlist(item)}
                    className={`fa-solid fa-heart ${
                      wishlist.some((x) => x._id === item._id) ? " red" : ""
                    }`}
                  ></i>
                  <i
                    onClick={() => navigate(`/detail/${item._id}`)}
                    className="fa-solid fa-eye"
                  ></i>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;

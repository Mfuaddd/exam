import React, { useContext } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import { wishlistContext } from "../../contexts/WishlistProvider";
import { basketContext } from "../../contexts/BasketProvider";

function Header() {
  const { wishlist } = useContext(wishlistContext);
  const { basket } = useContext(basketContext);
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          Pulse<span>.</span>
        </div>
        <ul className="header__nav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add</NavLink>
          </li>
          <li>
            <NavLink to="/wish">
              Wishlist<span>{wishlist.length}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/basket">
              Basket<span>{basket.length}</span>
            </NavLink>
          </li>
        </ul>
        <div className="header__contact">
          <span>Reservations</span> <i className="fa-solid fa-phone"></i>{" "}
          652-345 3222 11
        </div>
        <div className="header__menu">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;

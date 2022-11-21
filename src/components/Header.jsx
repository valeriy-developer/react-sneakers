import React from "react";
import { Link } from "react-router-dom";
import IconsCart from "../icons/IconsCart";
import IconsFavorite from "../icons/IconsFavorite";
import IconsPurchases from "../icons/IconsPurchases";
import Logo from "../images/1.jpg";
import Popup from "./Popup";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__left-block">
          <Link to="/" className="header__logo-link">
            <img className="header__logo" src={Logo} alt="Logo" />
            <div className="header__text-wrapper">
              <h2 className="header__title">REACT SNEAKERS</h2>
              <p className="header__desc">Магазин найкращих кросівок</p>
            </div>
          </Link>
        </div>
        <div className="header__nav">
          <div className="header__cart-wrapper">
            <IconsCart className="header__cart-icon" />
            <p className="header__cart-price">1205 грн.</p>
          </div>
          <div className="header__nav-icon">
            <Link to="/cart">
              <IconsPurchases className="header__purchases" />
            </Link>
            <Link to="/favorites">
              <IconsFavorite className="header__favorites" />
            </Link>
          </div>
        </div>
      </div>
      <div className="header__line"></div>
      <Popup />
    </header>
  );
};

export default Header;

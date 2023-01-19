import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context";
import IconsCart from "./icons/IconsCart";
import IconsFavorite from "./icons/IconsFavorite";
import IconsPurchases from "./icons/IconsPurchases";

const Header = () => {
  const { setCartOpened } = useContext(AppContext);

  return (
    <header className='header'>
      <div className='header__wrapper'>
        <div className='header__left-block'>
          <Link to='/' className='header__logo-link'>
            <img className='header__logo' src='/images/1.jpg' alt='Logo' />
            <div className='header__text-wrapper'>
              <h2 className='header__title'>REACT SNEAKERS</h2>
              <p className='header__desc'>Магазин найкращих кросівок</p>
            </div>
          </Link>
        </div>
        <div className='header__nav'>
          <button
            onClick={() => setCartOpened(true)}
            className='header__cart-wrapper'>
            <IconsCart className='header__cart-icon' />
            <p className='header__cart-price'>1205 грн.</p>
          </button>
          <div className='header__nav-icon'>
            <Link className='header__purchases' to='/orders'>
              <IconsPurchases />
            </Link>
            <Link className='header__favorites' to='/favorites'>
              <IconsFavorite />
            </Link>
          </div>
        </div>
      </div>
      <div className='header__line'></div>
    </header>
  );
};

export default Header;

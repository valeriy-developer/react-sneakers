import React, { useState } from "react";
import IconsAddConfirmed from "./icons/IconsAddConfirmed";
import IconsAddToCart from "./icons/IconsAddToCart";
import IconsAddToFavorite from "./icons/IconsAddToFavorite";
import IconsFavoriteConfirmed from "./icons/IconsFavoriteConfirmed";

const Card = ({ name, price, image }) => {
  const [cartChecked, setCartChecked] = useState(true);
  const [favoriteChecked, setFavoriteChecked] = useState(true);

  return (
    <>
      <li className='card'>
        <div
          className='card__favorite'
          onClick={() => setFavoriteChecked(!favoriteChecked)}>
          {favoriteChecked ? (
            <IconsAddToFavorite />
          ) : (
            <IconsFavoriteConfirmed />
          )}
        </div>
        <img className='card__img' src={image} alt='Sneakers' />
        <p className='card__name'>{name}</p>
        <div className='card__wrapper'>
          <div className='card__text-wrapper'>
            <p className='card__price-name'>Ціна:</p>
            <p className='card__price'>{price} грн.</p>
          </div>
          <button
            className='card__cart-btn'
            onClick={() => setCartChecked(!cartChecked)}>
            {cartChecked ? <IconsAddToCart /> : <IconsAddConfirmed />}
          </button>
        </div>
      </li>
    </>
  );
};

export default Card;

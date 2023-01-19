import React from "react";
import IconsAddToCart from "./icons/IconsAddToCart";
import IconsAddToFavorite from "./icons/IconsAddToFavorite";

const Items = ({ source, name, price }) => {
  return (
    <>
      <li className='card'>
        <div className='card__favorite'>
          <IconsAddToFavorite />
        </div>
        <img className='card__img' src={source} alt='Sneakers' />
        <p className='card__name'>{name}</p>
        <div className='card__wrapper'>
          <div className='card__text-wrapper'>
            <p className='card__price-name'>Ціна:</p>
            <p className='card__price'>{price} грн.</p>
          </div>
          <button className='card__cart-btn'>
            <IconsAddToCart />
          </button>
        </div>
      </li>
    </>
  );
};

export default Items;

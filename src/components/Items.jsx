import React from "react";
import IconsAddToCart from "./icons/IconsAddToCart";
import IconsAddToFavorite from "./icons/IconsAddToFavorite";

const Items = () => {
  return (
    <>
      <li className='card'>
        <div className='card__favorite'>
          <IconsAddToFavorite />
        </div>
        <img className='card__img' src='/images/3.jpg' alt='Sneakers' />
        <p className='card__name'>Чоловічі кросівки Nike Blazer Mid Suede</p>
        <div className='card__wrapper'>
          <div className='card__text-wrapper'>
            <p className='card__price-name'>Ціна:</p>
            <p className='card__price'>3100 грн.</p>
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

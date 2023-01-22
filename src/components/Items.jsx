import React from "react";
import IconsAddToCart from "./icons/IconsAddToCart";
import IconsAddToFavorite from "./icons/IconsAddToFavorite";
import IconsAddConfirmed from "./icons/IconsAddConfirmed";
import { useState } from "react";

const Items = ({ source, name, price, id, onPlus }) => {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    onPlus({ source, name, price, id });
    setIsAdded(!isAdded);
  };

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
          <button onClick={onClickPlus} className='card__cart-btn'>
            {!isAdded ? <IconsAddToCart /> : <IconsAddConfirmed />}
          </button>
        </div>
      </li>
    </>
  );
};

export default Items;

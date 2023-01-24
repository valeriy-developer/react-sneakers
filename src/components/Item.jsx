import React from "react";
import IconsAddToCart from "./icons/IconsAddToCart";
import IconsAddToFavorite from "./icons/IconsAddToFavorite";
import IconsAddConfirmed from "./icons/IconsAddConfirmed";
import { useState } from "react";
import IconsFavoriteConfirmed from "./icons/IconsFavoriteConfirmed";

const Items = ({ source, name, price, id, onPlus, checked }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const onClickPlus = () => {
    onPlus({ imgUrl: source, name, price, id, checked: true });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <li className='card'>
        <button onClick={onClickFavorite} className='card__favorite'>
          {!isFavorite ? <IconsAddToFavorite /> : <IconsFavoriteConfirmed />}
        </button>
        <img className='card__img' src={source} alt='Sneakers' />
        <p className='card__name'>{name}</p>
        <div className='card__wrapper'>
          <div className='card__text-wrapper'>
            <p className='card__price-name'>Ціна:</p>
            <p className='card__price'>{price} грн.</p>
          </div>
          <button onClick={onClickPlus} className='card__cart-btn'>
            {!checked ? <IconsAddToCart /> : <IconsAddConfirmed />}
          </button>
        </div>
      </li>
    </>
  );
};

export default Items;

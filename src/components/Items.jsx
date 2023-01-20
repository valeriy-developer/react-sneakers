import React from "react";
import { useContext } from "react";
import AppContext from "../context";
import IconsAddToCart from "./icons/IconsAddToCart";
import IconsAddToFavorite from "./icons/IconsAddToFavorite";
import IconsAddConfirmed from "./icons/IconsAddConfirmed";

const Items = ({ source, name, price, checked }) => {
  const { checkedItems } = useContext(AppContext);

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
          <button onClick={checked} className='card__cart-btn'>
            {!checkedItems ? <IconsAddToCart /> : <IconsAddConfirmed />}
          </button>
        </div>
      </li>
    </>
  );
};

export default Items;

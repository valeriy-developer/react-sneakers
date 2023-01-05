import React from "react";
import IconsRemoveFromCart from "./icons/IconsRemoveFromCart";
import { v4 as uuidv4 } from "uuid";

const CardInCart = () => {
  return (
    <>
      <li key={uuidv4()} className='horizontal-card'>
        <img
          className='horizontal-card__img'
          src='./images/8.jpg'
          alt='Sneakers'
        />
        <div className='horizontal-card__text-wrapper'>
          <p className='horizontal-card__name'>
            Чоловічі Кросівки Nike Air Max 270
          </p>
          <p className='horizontal-card__price'>4399 грн.</p>
        </div>
        <button className='horizontal-card__close-btn'>
          <IconsRemoveFromCart />
        </button>
      </li>
    </>
  );
};

export default CardInCart;

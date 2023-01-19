import React from "react";
import IconsRemoveFromCart from "./icons/IconsRemoveFromCart";

const CardInCart = ({ name, price, image, onRemove }) => {
  return (
    <>
      <li className='horizontal-card'>
        <img className='horizontal-card__img' src={image} alt='Sneakers' />
        <div className='horizontal-card__text-wrapper'>
          <p className='horizontal-card__name'>{name}</p>
          <p className='horizontal-card__price'>{price} грн.</p>
        </div>
        <button
          onClick={() => onRemove()}
          className='horizontal-card__close-btn'>
          <IconsRemoveFromCart />
        </button>
      </li>
    </>
  );
};

export default CardInCart;

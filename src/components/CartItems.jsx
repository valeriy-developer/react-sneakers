import React from "react";
import IconsRemoveFromCart from "./icons/IconsRemoveFromCart";

const CartItems = () => {
  return (
    <>
      <li className='horizontal-card'>
        <img
          className='horizontal-card__img'
          src='/images/3.jpg'
          alt='Sneakers'
        />
        <div className='horizontal-card__text-wrapper'>
          <p className='horizontal-card__name'>
            Чоловічі кросівки Nike Blazer Mid Suede
          </p>
          <p className='horizontal-card__price'>3100 грн.</p>
        </div>
        <button className='horizontal-card__close-btn'>
          <IconsRemoveFromCart />
        </button>
      </li>
    </>
  );
};

export default CartItems;

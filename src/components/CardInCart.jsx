import React from "react";
import IconsRemoveFromCart from "../icons/IconsRemoveFromCart";
import cardImg from "../images/3.jpg";

const CardInCart = () => {
  return (
    <>
      <li className='horizontal-card'>
        <img className='horizontal-card__img' src={cardImg} alt='Sneakers' />
        <div className='horizontal-card__text-wrapper'>
          <p className='horizontal-card__name'>
            Чоловічі кросівки Nike Blazer Mid Suede
          </p>
          <p className='horizontal-card__price'>4000 грн.</p>
        </div>
        <div className='horizontal-card__icon-wrapper'>
          <IconsRemoveFromCart />
        </div>
      </li>
      <li className='horizontal-card'>
        <img className='horizontal-card__img' src={cardImg} alt='Sneakers' />
        <div className='horizontal-card__text-wrapper'>
          <p className='horizontal-card__name'>
            Чоловічі кросівки Nike Blazer Mid Suede
          </p>
          <p className='horizontal-card__price'>4000 грн.</p>
        </div>
        <div className='horizontal-card__icon-wrapper'>
          <IconsRemoveFromCart />
        </div>
      </li>
      <li className='horizontal-card'>
        <img className='horizontal-card__img' src={cardImg} alt='Sneakers' />
        <div className='horizontal-card__text-wrapper'>
          <p className='horizontal-card__name'>
            Чоловічі кросівки Nike Blazer Mid Suede
          </p>
          <p className='horizontal-card__price'>4000 грн.</p>
        </div>
        <div className='horizontal-card__icon-wrapper'>
          <IconsRemoveFromCart />
        </div>
      </li>
      <li className='horizontal-card'>
        <img className='horizontal-card__img' src={cardImg} alt='Sneakers' />
        <div className='horizontal-card__text-wrapper'>
          <p className='horizontal-card__name'>
            Чоловічі кросівки Nike Blazer Mid Suede
          </p>
          <p className='horizontal-card__price'>4000 грн.</p>
        </div>
        <div className='horizontal-card__icon-wrapper'>
          <IconsRemoveFromCart />
        </div>
      </li>
      <li className='horizontal-card'>
        <img className='horizontal-card__img' src={cardImg} alt='Sneakers' />
        <div className='horizontal-card__text-wrapper'>
          <p className='horizontal-card__name'>
            Чоловічі кросівки Nike Blazer Mid Suede
          </p>
          <p className='horizontal-card__price'>4000 грн.</p>
        </div>
        <div className='horizontal-card__icon-wrapper'>
          <IconsRemoveFromCart />
        </div>
      </li>
      <li className='horizontal-card'>
        <img className='horizontal-card__img' src={cardImg} alt='Sneakers' />
        <div className='horizontal-card__text-wrapper'>
          <p className='horizontal-card__name'>
            Чоловічі кросівки Nike Blazer Mid Suede
          </p>
          <p className='horizontal-card__price'>4000 грн.</p>
        </div>
        <div className='horizontal-card__icon-wrapper'>
          <IconsRemoveFromCart />
        </div>
      </li>
    </>
  );
};

export default CardInCart;

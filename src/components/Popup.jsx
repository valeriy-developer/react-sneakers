import React from "react";
import Button from "./Button";
import CardInCart from "./CardInCart";

const Popup = () => {
  return (
    <div className='popup'>
      <div className='popup__backdrop'></div>
      <div className='popup__wrapper'>
        <div className='popup__top-block'>
          <h2 className='popup__title'>Кошик</h2>
          <div className='popup__card-wrapper'>
            <CardInCart />
          </div>
        </div>
        <div className='popup__bottom-block'>
          <div className='popup__text-wrapper'>
            <p className='popup__text'>Разом:</p>
            <p className='popup__dashed-line'></p>
            <p className='popup__amount'>21 498 грн.</p>
          </div>
          <div className='popup__text-wrapper'>
            <p className='popup__text'>Податок 5%:</p>
            <p className='popup__dashed-line'></p>
            <p className='popup__amount'>1074 грн. </p>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Popup;

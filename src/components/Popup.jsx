import React from "react";
import Button from "./Button";
import CartItems from "./CartItems";

const Popup = () => {
  return (
    <div className='popup'>
      <div className='popup__backdrop'></div>
      <div className='popup__wrapper'>
        <div className='popup__cart'>
          <h2 className='popup__title'>Кошик</h2>
          <div className='popup__cart-content'>
            <div className='popup__top-block'>
              <ul className='popup__card-list'>
                <CartItems />
              </ul>
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

        {/* <div className='popup__empty-cart'>
              <h2 className='popup__title'>Кошик</h2>
              <div className='popup__empty-wrapper'>
                <img
                  className='popup__img'
                  src='/images/4.jpg'
                  alt='Empty box'
                />
                <h2 className='popup__empty-title'>Кошик порожній</h2>
                <p className='popup__desc'>
                  Додати хоча б одну пару кросівок, щоб зробити замовлення.
                </p>
                <div onClick={cartClose} className='popup__empty-btn'>
                  <Button />
                </div>
              </div>
            </div> */}
        {/* <>
          <div className='popup__empty-cart'>
            <h2 className='popup__title'>Кошик</h2>
            <div className='popup__empty-wrapper'>
              <img className='popup__img' src='/images/5.jpg' alt='Empty box' />
              <h2 className='popup__empty-title'>Замовлення оформлено!</h2>
              <p className='popup__desc'>
                Ваше замовлення #<span className='popup__number'>18</span> скоро
                буде передано кур'єрській доставці
              </p>
              <div className='popup__empty-btn'>
                <Button />
              </div>
            </div>
          </div>
        </> */}
      </div>
    </div>
  );
};

export default Popup;

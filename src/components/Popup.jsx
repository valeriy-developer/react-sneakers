import React from "react";
import axios from "axios";
import Button from "./Button";
import CardInCart from "./CardInCart";
import { ItemsContext } from "./Layout";

const Popup = ({ active, cartClose }) => {
  const { items, setItems } = React.useContext(ItemsContext);

  const onRemoveFromCart = (id) => {
    axios.delete(`https://639714d877359127a02c1f7d.mockapi.io/cart/${id}`);
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className={active ? "popup opened" : "popup"}>
      <div onClick={cartClose} className='popup__backdrop'></div>
      <div className='popup__wrapper'>
        <>
          {items.length > 0 ? (
            <div className='popup__cart'>
              <h2 className='popup__title'>Кошик</h2>
              <div className='popup__cart-content'>
                <div className='popup__top-block'>
                  <ul className='popup__card-list'>
                    <>
                      {items.map((el) => {
                        return (
                          <CardInCart
                            key={el.id}
                            name={el.name}
                            price={el.price}
                            image={el.imgUrl}
                            onRemove={() => onRemoveFromCart(el.id)}
                          />
                        );
                      })}
                    </>
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
          ) : (
            <div className='popup__empty-cart'>
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
            </div>
          )}
        </>
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

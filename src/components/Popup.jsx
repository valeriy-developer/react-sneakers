import React from "react";
import { useContext } from "react";
import AppContext from "../context";
import Button from "./Button";
import CartItems from "./CartItems";
import { updateSneakers } from "../api/fetchItems";
import { deleteSneakers } from "../api/fetchCart";

const Popup = () => {
  const {
    sneakers,
    setSneakers,
    cartOpened,
    setCartOpened,
    cartSneakers,
    setCartSneakers,
    totalPrice,
    totalPriceWithTax,
  } = useContext(AppContext);

  const removeCartItem = async (id) => {
    await deleteSneakers(id);
    await updateSneakers(id, { checked: false });

    const updatedItems = sneakers.map((item) => {
      if (item.id === id) {
        return { ...item, checked: false };
      }

      return item;
    });
    setSneakers(updatedItems);

    setCartSneakers((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className={!cartOpened ? "popup" : "popup opened"}>
      <div
        onClick={() => setCartOpened(false)}
        className='popup__backdrop'></div>
      <div className='popup__wrapper'>
        {cartSneakers.length > 0 ? (
          <>
            <div className='popup__cart'>
              <h2 className='popup__title'>Кошик</h2>
              <div className='popup__cart-content'>
                <div className='popup__top-block'>
                  <ul className='popup__card-list'>
                    {cartSneakers.map((item) => {
                      return (
                        <CartItems
                          key={item.id}
                          id={item.id}
                          source={item.imgUrl}
                          name={item.name}
                          price={item.price}
                          onRemove={(id) => removeCartItem(id)}
                        />
                      );
                    })}
                  </ul>
                </div>
                <div className='popup__bottom-block'>
                  <div className='popup__text-wrapper'>
                    <p className='popup__text'>Разом:</p>
                    <p className='popup__dashed-line'></p>
                    <p className='popup__amount'>{totalPrice} грн.</p>
                  </div>
                  <div className='popup__text-wrapper'>
                    <p className='popup__text'>Податок 5%:</p>
                    <p className='popup__dashed-line'></p>
                    <p className='popup__amount'>{totalPriceWithTax} грн. </p>
                  </div>
                  <Button />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
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
                <div
                  onClick={() => setCartOpened(false)}
                  className='popup__empty-btn'>
                  <Button />
                </div>
              </div>
            </div>
          </>
        )}

        {/*  */}
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

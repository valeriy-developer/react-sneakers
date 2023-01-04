import React, { useContext } from "react";
import IconsRemoveFromCart from "./icons/IconsRemoveFromCart";
import cartContext from "../cartContext";
import { v4 as uuidv4 } from "uuid";

const CardInCart = () => {
  const cartItems = useContext(cartContext).items;

  return (
    <>
      {cartItems.map((item) => {
        return (
          <li key={uuidv4()} className='horizontal-card'>
            <img
              className='horizontal-card__img'
              src={item.image}
              alt='Sneakers'
            />
            <div className='horizontal-card__text-wrapper'>
              <p className='horizontal-card__name'>{item.name}</p>
              <p className='horizontal-card__price'>{item.price} грн.</p>
            </div>
            <div className='horizontal-card__icon-wrapper'>
              <IconsRemoveFromCart />
            </div>
          </li>
        );
      })}
    </>
  );
};

export default CardInCart;

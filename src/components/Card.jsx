import React, { useState, useContext } from "react";
import IconsAddConfirmed from "./icons/IconsAddConfirmed";
import IconsAddToCart from "./icons/IconsAddToCart";
import IconsAddToFavorite from "./icons/IconsAddToFavorite";
import cartContext from "../cartContext";

const Card = ({ name, price, image, addInFavorite }) => {
  const [checked, setChecked] = useState(true);
  const { addItems } = useContext(cartContext);

  const addInCart = () => {
    setChecked(!checked);
    addItems((prevValue) => [...prevValue, { name, price, image }]);
  };

  return (
    <>
      <li className='card'>
        <div className='card__favorite' onClick={addInFavorite}>
          <IconsAddToFavorite />
        </div>
        <img className='card__img' src={image} alt='Sneakers' />
        <p className='card__name'>{name}</p>
        <div className='card__wrapper'>
          <div className='card__text-wrapper'>
            <p className='card__price-name'>Ціна:</p>
            <p className='card__price'>{price} грн.</p>
          </div>
          <button className='card__cart-btn' onClick={addInCart}>
            {checked ? <IconsAddToCart /> : <IconsAddConfirmed />}
          </button>
        </div>
      </li>
    </>
  );
};

export default Card;

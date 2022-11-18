import React from "react";
import IconsAddToCart from "../icons/IconsAddToCart";
import IconsAddToFavorite from "../icons/IconsAddToFavorite";
import cardImg from "../images/3.jpg";

const Card = () => {
  return (
    <>
      <li className="card">
        <div className="card__favorite">
          <IconsAddToFavorite />
        </div>
        <img className="card__img" src={cardImg} alt="Sneakers" />
        <p className="card__name">Чоловічі кросівки Nike Blazer Mid Suede</p>
        <div className="card__wrapper">
          <div className="card__text-wrapper">
            <p className="card__price-name">Ціна:</p>
            <p className="card__price">4000 грн.</p>
          </div>
          <IconsAddToCart />
        </div>
      </li>
      <li className="card">
        <div className="card__favorite">
          <IconsAddToFavorite />
        </div>
        <img className="card__img" src={cardImg} alt="Sneakers" />
        <p className="card__name">Чоловічі кросівки Nike Blazer Mid Suede</p>
        <div className="card__wrapper">
          <div className="card__text-wrapper">
            <p className="card__price-name">Ціна:</p>
            <p className="card__price">4000 грн.</p>
          </div>
          <IconsAddToCart />
        </div>
      </li>
      <li className="card">
        <div className="card__favorite">
          <IconsAddToFavorite />
        </div>
        <img className="card__img" src={cardImg} alt="Sneakers" />
        <p className="card__name">Чоловічі кросівки Nike Blazer Mid Suede</p>
        <div className="card__wrapper">
          <div className="card__text-wrapper">
            <p className="card__price-name">Ціна:</p>
            <p className="card__price">4000 грн.</p>
          </div>
          <IconsAddToCart />
        </div>
      </li>
      <li className="card">
        <div className="card__favorite">
          <IconsAddToFavorite />
        </div>
        <img className="card__img" src={cardImg} alt="Sneakers" />
        <p className="card__name">Чоловічі кросівки Nike Blazer Mid Suede</p>
        <div className="card__wrapper">
          <div className="card__text-wrapper">
            <p className="card__price-name">Ціна:</p>
            <p className="card__price">4000 грн.</p>
          </div>
          <IconsAddToCart />
        </div>
      </li>
      <li className="card">
        <div className="card__favorite">
          <IconsAddToFavorite />
        </div>
        <img className="card__img" src={cardImg} alt="Sneakers" />
        <p className="card__name">Чоловічі кросівки Nike Blazer Mid Suede</p>
        <div className="card__wrapper">
          <div className="card__text-wrapper">
            <p className="card__price-name">Ціна:</p>
            <p className="card__price">4000 грн.</p>
          </div>
          <IconsAddToCart />
        </div>
      </li>

      <li className="card">
        <div className="card__favorite">
          <IconsAddToFavorite />
        </div>
        <img className="card__img" src={cardImg} alt="Sneakers" />
        <p className="card__name">Чоловічі кросівки Nike Blazer Mid Suede</p>
        <div className="card__wrapper">
          <div className="card__text-wrapper">
            <p className="card__price-name">Ціна:</p>
            <p className="card__price">4000 грн.</p>
          </div>
          <IconsAddToCart />
        </div>
      </li>
    </>
  );
};

export default Card;

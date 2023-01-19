import React from "react";
import Button from "../components/Button";

const Favorites = () => {
  return (
    <div className='favorites-1'>
      <div className='container favorites-1__wrapper'>
        {/* <>
          <div className='favorites-1__favorites'>
            <div className='favorites-1__block-text'>
              <div className='favorites-1__btn-wrapper'>
                <SquareButton />
              </div>
              <h2 className='favorites-1__title'>Мої закладки</h2>
            </div>
            <ul className='favorites-1__card-wrapper'>
              <Items />
            </ul>
          </div>
        </> */}
        <>
          <div className='favorites-1__empty'>
            <div className='favorites-1__img-wrapper'>
              <img
                className='favorites-1__img'
                src='/images/7.jpg'
                alt='Sad emoticon'
              />
            </div>
            <h2 className='favorites-1__empty-title'>Закладок немає :(</h2>
            <p className='favorites-1__desc'>
              Ви нічого не додавали до закладок
            </p>
            <div className='favorites-1__btn'>
              <Button />
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Favorites;

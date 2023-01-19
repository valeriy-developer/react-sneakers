import React from "react";
import IconsCircleButton from "../components/icons/IconsCircleButton";
import IconsSearch from "../components/icons/IconsSearch";
import Button from "../components/Button";
import Items from "../components/Items";

const Home = () => {
  return (
    <>
      <section className='section home-1'>
        <div className='container home-1__slider'>
          <img className='home-1__img' src='/images/2.jpg' alt='Sneakers' />
          <div className='home-1__text-wrapper'>
            <h1 className='home-1__title'>
              <span className='home-1__span-title'>Stan Smith,</span> Forever!
            </h1>
            <Button />
          </div>
          <button className='home-1__circle-btn'>
            <IconsCircleButton />
          </button>
        </div>
      </section>
      <section className='section home-2'>
        <div className='container home-2__wrapper'>
          <div className='home-2__top-wrapper'>
            <h2 className='home-2__title'>Усі кросівки</h2>
            <div className='home-2__input-wrapper'>
              <input
                type='text'
                name='search-card'
                placeholder='Пошук...'
                className='home-2__input'
              />
              <IconsSearch />
            </div>
          </div>
          <ul className='home-2__bottom-list'>
            <Items />
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;

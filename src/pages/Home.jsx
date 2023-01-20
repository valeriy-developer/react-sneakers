import React, { useContext, useState } from "react";
import IconsCircleButton from "../components/icons/IconsCircleButton";
import IconsSearch from "../components/icons/IconsSearch";
import Button from "../components/Button";
import Items from "../components/Items";
import AppContext from "../context";

const Home = () => {
  const { sneakers, checkedItems, setCheckedItems } = useContext(AppContext);
  const [inputValue, setInputValue] = useState("");

  const searchItems = (e) => {
    setInputValue(e.target.value);
  };

  console.log(inputValue);

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
            <h2 className='home-2__title'>
              {inputValue ? `Пошук за запитом: ${inputValue}` : "Усі кросівки"}
            </h2>
            <div className='home-2__input-wrapper'>
              <input
                type='text'
                name='search-card'
                placeholder='Пошук...'
                className='home-2__input'
                onInput={searchItems}
                value={inputValue}
              />
              <IconsSearch />
            </div>
          </div>
          <ul className='home-2__bottom-list'>
            {sneakers
              .filter((el) =>
                el.name.toLowerCase().includes(inputValue.toLowerCase())
              )
              .map((item) => {
                return (
                  <Items
                    key={item.id}
                    id={item.id}
                    source={item.imgUrl}
                    name={item.name}
                    price={item.price}
                    checked={() => setCheckedItems(!checkedItems)}
                  />
                );
              })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;

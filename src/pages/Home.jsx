import React from "react";
import { v4 as uuidv4 } from "uuid";
import IconsCircleButton from "../components/icons/IconsCircleButton";
import IconsSearch from "../components/icons/IconsSearch";
import Button from "../components/Button";
import Card from "../components/Card";
import Popup from "../components/Popup";

const arr = [
  {
    id: uuidv4(),
    name: "Чоловічі кросівки Nike Blazer Mid Suede",
    price: "4000",
    imgUrl: "/images/3.jpg",
  },
  {
    id: uuidv4(),
    name: "Чоловічі кросівки Nike Air Max 270",
    price: "3300",
    imgUrl: "/images/8.jpg",
  },
  {
    id: uuidv4(),
    name: "Чоловічі кросівки Nike Blazer Mid Suede",
    price: "4000",
    imgUrl: "/images/9.jpg",
  },
  {
    id: uuidv4(),
    name: "Кросівки Puma X Aka Boku Future Rider",
    price: "5200",
    imgUrl: "/images/10.jpg",
  },
  {
    id: uuidv4(),
    name: "Чоловічі кросівки Under Armour Curry 8",
    price: "7300",
    imgUrl: "/images/11.jpg",
  },
  {
    id: uuidv4(),
    name: "Чоловічі кросівки Nike Kyrie 7",
    price: "2300",
    imgUrl: "/images/12.jpg",
  },
  {
    id: uuidv4(),
    name: "Чоловічі кросівки Jordan Air Jordan 11",
    price: "5100",
    imgUrl: "/images/13.jpg",
  },
];

const Home = () => {
  return (
    <>
      <Popup />
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
            <>
              {arr.map((el) => {
                return (
                  <Card
                    key={el.id}
                    name={el.name}
                    price={el.price}
                    image={el.imgUrl}
                  />
                );
              })}
            </>
          </ul>
        </div>
      </section>
      <Popup />
    </>
  );
};

export default Home;

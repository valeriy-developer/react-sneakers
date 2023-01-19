import React, { useState, useEffect } from "react";
import axios from "axios";
import IconsCircleButton from "../components/icons/IconsCircleButton";
import IconsSearch from "../components/icons/IconsSearch";
import Button from "../components/Button";
import Card from "../components/Card";
import { ItemsContext } from "../components/Layout";

const Home = () => {
  const [sneakers, setSneakers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const { setItems } = React.useContext(ItemsContext);

  useEffect(() => {
    axios
      .get("https://639714d877359127a02c1f7d.mockapi.io/items")
      .then((res) => {
        setSneakers(res.data);
      });
    axios
      .get("https://639714d877359127a02c1f7d.mockapi.io/cart")
      .then((res) => {
        setItems(res.data);
      });
  }, [setItems]);

  function onAddToCard(obj) {
    if (obj.inCart) {
      return;
    }
    obj.inCart = true;

    axios
      .post("https://639714d877359127a02c1f7d.mockapi.io/cart", obj)
      .then((res) => res);

    setItems((prev) => [...prev, obj]);

    axios
      .put("https://639714d877359127a02c1f7d.mockapi.io/items/" + obj.id, obj)
      .then((res) => res);
  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

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
                onInput={onChangeSearchInput}
              />
              <IconsSearch />
            </div>
          </div>
          <ul className='home-2__bottom-list'>
            <>
              {sneakers
                .filter((item) =>
                  item.name.toLowerCase().includes(searchValue.toLowerCase())
                )
                .map((el) => {
                  return (
                    <Card
                      key={el.id}
                      id={el.id}
                      name={el.name}
                      price={el.price}
                      image={el.imgUrl}
                      checked={el.inCart}
                      addInCart={() => onAddToCard(el)}
                    />
                  );
                })}
            </>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;

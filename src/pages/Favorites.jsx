import React from "react";
import { useContext } from "react";
import Button from "../components/Button";
import Item from "../components/Item";
import SquareButton from "../components/SquareButton";
import AppContext from "../context";
import { addNewSneaker, deleteSneakers } from "../api/fetchFavorite";
import { updateSneakers } from "../api/fetchItems";
import FavoriteItems from "../components/FavoriteItems";

const Favorites = () => {
  const { favoriteSneakers, setFavoriteSneakers, sneakers, setSneakers } =
    useContext(AppContext);

  const addToFavorite = async (obj) => {
    const newFavoriteSneakers = favoriteSneakers.find(
      (item) => item.id === obj.id
    );

    const updatedItems = sneakers.map((item) => {
      if (item.id === obj.id) {
        return { ...item, isFavorite: !item.isFavorite };
      }

      return item;
    });
    setSneakers(updatedItems);

    if (newFavoriteSneakers) {
      const updatedSneakers = favoriteSneakers.filter(
        (item) => item.id !== newFavoriteSneakers.id
      );

      setFavoriteSneakers(updatedSneakers);

      await updateSneakers(obj.id, { isFavorite: false });
      await deleteSneakers(newFavoriteSneakers.id);
      return;
    }

    setFavoriteSneakers((prev) => [...prev, obj]);

    await updateSneakers(obj.id, { isFavorite: true });
    await addNewSneaker(obj);
  };

  return (
    <div className='favorites-1'>
      <div className='container favorites-1__wrapper'>
        {favoriteSneakers ? (
          <>
            <div className='favorites-1__favorites'>
              <div className='favorites-1__block-text'>
                <div className='favorites-1__btn-wrapper'>
                  <SquareButton />
                </div>
                <h2 className='favorites-1__title'>Мої закладки</h2>
              </div>
              <ul className='favorites-1__card-wrapper'>
                {sneakers.map((item) => {
                  return (
                    <FavoriteItems
                      key={item.id}
                      id={item.id}
                      source={item.imgUrl}
                      name={item.name}
                      price={item.price}
                      favorited={item.isFavorite}
                      onFavorite={() => addToFavorite(item)}
                    />
                  );
                })}
              </ul>
            </div>
          </>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Favorites;

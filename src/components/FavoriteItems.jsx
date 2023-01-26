import IconsRemoveFromCart from "./icons/IconsRemoveFromCart";

const FavoriteItems = () => {
  return (
    <>
      <li className='favorite-item'>
        <img className='favorite-item' src={source} alt='Sneakers' />
        <div className='favorite-item__text-wrapper'>
          <p className='favorite-item__name'>{name}</p>
          <p className='favorite-item__price'>{price} грн.</p>
        </div>
        <button onClick={removeCartItem} className='favorite-item__close-btn'>
          <IconsRemoveFromCart />
        </button>
      </li>
    </>
  );
};

export default FavoriteItems;

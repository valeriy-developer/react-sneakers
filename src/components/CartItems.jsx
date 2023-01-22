import IconsRemoveFromCart from "./icons/IconsRemoveFromCart";

const CartItems = ({ source, name, price, id, onRemove }) => {
  const removeCartItem = () => {
    onRemove(id);
  };

  return (
    <>
      <li className='horizontal-card'>
        <img className='horizontal-card__img' src={source} alt='Sneakers' />
        <div className='horizontal-card__text-wrapper'>
          <p className='horizontal-card__name'>{name}</p>
          <p className='horizontal-card__price'>{price} грн.</p>
        </div>
        <button onClick={removeCartItem} className='horizontal-card__close-btn'>
          <IconsRemoveFromCart />
        </button>
      </li>
    </>
  );
};

export default CartItems;

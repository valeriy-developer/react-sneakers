import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import SquareButton from "../components/SquareButton";

const Orders = () => {
  return (
    <section className='orders-1'>
      <div className='container orders-1__wrapper'>
        {/* <>
          <div className='orders-1__my-orders'>
            <div className='orders-1__block-text'>
              <div className='orders-1__btn-wrapper'>
                <SquareButton />
              </div>
              <h2 className='orders-1__title'>Мої покупки</h2>
            </div>
            <ul className='orders-1__card-wrapper'>
              <Card />
            </ul>
          </div>
        </> */}
        <>
          <div className='orders-1__empty'>
            <div className='orders-1__img-wrapper'>
              <img
                className='orders-1__img'
                src='/images/6.jpg'
                alt='Sad emoticon'
              />
            </div>
            <h2 className='orders-1__empty-title'>У вас немає замовлень</h2>
            <p className='orders-1__desc'>
              Ви жебрак?
              <br />
              Оформіть замовлення хоча-б один раз.
            </p>
            <div className='orders-1__btn'>
              <Button />
            </div>
          </div>
        </>
      </div>
    </section>
  );
};

export default Orders;

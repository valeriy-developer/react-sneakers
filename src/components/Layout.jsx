import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import CartItems from "../cartContext";
import Header from "./Header";
import Popup from "./Popup";

const Layout = () => {
  const [popupOpened, setPopupOpened] = useState(false);
  const [items, setItems] = useState([]);

  return (
    <div className='global-container'>
      <CartItems.Provider value={{ items, addItems: setItems }}>
        <Header cartOpen={() => setPopupOpened(true)} />
        <Popup active={popupOpened} cartClose={() => setPopupOpened(false)} />
        <Outlet />
      </CartItems.Provider>
    </div>
  );
};

export default Layout;

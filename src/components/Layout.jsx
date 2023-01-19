import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Popup from "./Popup";

export const ItemsContext = React.createContext(" ");

const Layout = () => {
  const [popupOpened, setPopupOpened] = useState(false);
  const [items, setItems] = useState([]);

  return (
    <div className='global-container'>
      <ItemsContext.Provider value={{ items, setItems }}>
        <Header cartOpen={() => setPopupOpened(true)} />
        <Popup active={popupOpened} cartClose={() => setPopupOpened(false)} />
        <Outlet />
      </ItemsContext.Provider>
    </div>
  );
};

export default Layout;

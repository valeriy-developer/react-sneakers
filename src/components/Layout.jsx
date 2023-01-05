import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Popup from "./Popup";

const Layout = () => {
  const [popupOpened, setPopupOpened] = useState(false);

  return (
    <div className='global-container'>
      <Header cartOpen={() => setPopupOpened(true)} />
      <Popup active={popupOpened} cartClose={() => setPopupOpened(false)} />
      <Outlet />
    </div>
  );
};

export default Layout;

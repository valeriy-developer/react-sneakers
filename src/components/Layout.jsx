import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Popup from "./Popup";

const Layout = () => {
  return (
    <div className='global-container'>
      <Header />
      <Popup />
      <Outlet />
    </div>
  );
};

export default Layout;

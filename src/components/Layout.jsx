import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="global-container">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;

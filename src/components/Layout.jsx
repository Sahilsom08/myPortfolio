import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Home />
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;

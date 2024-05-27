import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Hero from "./Hero";

const Layout = () => {
  return (
    <div>
      <Navbar />
      
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

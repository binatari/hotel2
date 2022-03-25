import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { useState } from 'react';
import Drawer from "./Drawer";

const Layout = ({ children }) => {
  const [show, handleShow] = useState(false);
  return (
    <div className="">
      <a href="https://api.whatsapp.com/send?phone=%2B2348037181261&text&app_absent=0">
      <img src={require('../public/icons/Chat.png').default.src} alt="" className=" fixed bottom-16 right-10 max-h-20 z-[1000]"/>
      </a>
      <Drawer show={show} handleShow={handleShow}/>
      <div className="bg-white absolute w-full">
        <Nav show={show} handleShow={handleShow}/>
      </div>

      {children}
      <div className="bg-black pt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { useState } from 'react';
import Drawer from "./Drawer";

const Layout = ({ children }) => {
  const [show, handleShow] = useState(false);
  return (
    <div className="">
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

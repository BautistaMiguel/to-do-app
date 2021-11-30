import React, { useState } from "react";
import AppBar from "../AppBar";
import Drawer from "../Drawer";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AppBar toggleDrawer={toggleDrawer} />
      <Drawer toggleDrawer={toggleDrawer} isOpen={isOpen} />
      {children}
    </>
  );
};

export default Layout;

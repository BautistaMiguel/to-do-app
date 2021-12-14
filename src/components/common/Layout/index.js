import React, { useState, useCallback } from "react";
import AppBar from "../AppBar";
import Drawer from "../Drawer";
import debounce from "lodash/debounce";
import Search from "../../../pages/Search";
import { useHistory, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();
  const { pathname } = useLocation();
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const debounceFn = useCallback(
    debounce(
      (inputValue) => {
        setSearchTerm(inputValue);
        history.replace({ pathname, search: "?search=" + inputValue });
      },
      1000,
      {
        trailing: true,
      }
    ),
    [pathname]
  );

  const handleSearch = (value) => {
    setSearchInput(value);
    debounceFn(value);
  };

  return (
    <>
      <Drawer toggleDrawer={toggleDrawer} isOpen={isDrawerOpen} />
      <AppBar
        toggleDrawer={toggleDrawer}
        searchTerm={searchInput}
        setSearchTerm={handleSearch}
      />
      {searchTerm ? <Search searchTerm={searchTerm} /> : children}
    </>
  );
};

export default Layout;

import {Outlet} from "react-router-dom";
import Header from "@components/Header/Header.jsx";
import Footer from "@components/Footer/Footer.jsx";

import Menu from "@components/Header/Menu";
import SearchBox from "@components/SearchBox/SearchBox";

import {useState} from "react";
import { StyleSheetManager } from 'styled-components';


function RootLayout() {
  const shouldForwardProp = prop => prop != "isSelected";
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  

  function handleMenuToggle() {
    setMenuOpen(prev => !prev);
  }

  function handleMenuClose() {
    setMenuOpen(false);
  }

  function handleSearchOpen() {
    console.log("searchOpen:" + searchOpen)
    setSearchOpen(true);
  }

  function handleSearchClose() {
    console.log("searchOpen:" + searchOpen)
    setSearchOpen(false);
    setMenuOpen(false);
  }

  return (
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
          <Header onMenu={handleMenuToggle} onMenuClose={handleMenuClose} />
          {!searchOpen && menuOpen && <Menu onSearch={handleSearchOpen} onMenu={handleMenuToggle} />}
          {searchOpen && <SearchBox onClose={handleSearchClose}/>}
          <Outlet />
          <Footer />
      </StyleSheetManager>
  );
}

export default RootLayout;
import {useState} from "react";

import GlobalStyles from "@styles/GlobalStyle.js";
import Header from "@components/Header/Header.jsx";
import MyPage from "@pages/MyPage/MyPage.jsx";
import Main from '@pages/Main/Main'
import Detail from "@pages/Detail/Detail";
import Browse from "@pages/Browse/Browse";
import SearchBox from "@components/SearchBox/SearchBox"; 
import Footer from "@components/Footer/Footer";
import './App.css'

import { StyleSheetManager } from 'styled-components';

function App() {
  const shouldForwardProp = prop => prop != "isSelected";
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  function handleSearchOpen() {
    console.log("searchOpen:" + searchOpen)
    setSearchOpen(true);
  }

  function handleSearchClose() {
    console.log("searchOpen:" + searchOpen)
    setSearchOpen(false);
    setMenuOpen(false);
  }

  function handleMenuToggle() {
    setMenuOpen(prev => !prev);
  } 

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <GlobalStyles />
      <Header onSearch={handleSearchOpen} searchOpen={searchOpen} onMenu={handleMenuToggle}  menuOpen={menuOpen}/>
      {searchOpen && <SearchBox onClose={handleSearchClose}/>}
      <Main />
      <Footer />
    </StyleSheetManager>
  )
}

export default App;

import { StyleSheetManager } from 'styled-components';

import {Outlet} from "react-router-dom";
import Header from "@components/Header/Header.jsx";
import Footer from "@components/Footer/Footer.jsx";

import Menu from "@components/Header/Menu";
import SearchBox from "@components/SearchBox/SearchBox";


import { useHandleMenu } from "@hooks/useHandleMenu";
import { useHandleSearch } from "@hooks/useHandleSearch";

import LocationSetter from "@components/LocationSetter/LocationSetter.jsx";
 
function RootLayout() {
  const { menuHandle } = useHandleMenu();
  const { searchHandle } = useHandleSearch();

  const shouldForwardProp = prop => prop != "isSelected";

  return (
    <>
      <LocationSetter/>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
          <Header />
          {!searchHandle && menuHandle && <Menu />}
          {searchHandle && <SearchBox />}
          <Outlet />
          <Footer />
      </StyleSheetManager>
    </>
    
  );
}

export default RootLayout;
import GlobalStyles from "@styles/GlobalStyle.js";
import Header from "@components/Header/Header.jsx";
import MyPage from "@pages/MyPage/MyPage.jsx";
import Main from '@pages/Main/Main'
import Detail from "@pages/Detail/Detail";
import Browse from "@pages/Browse/Browse";
import './App.css'

import { StyleSheetManager } from 'styled-components';

function App() {

const shouldForwardProp = prop => prop != "isSelected";


  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <GlobalStyles />
      <Header/>
      {/* <MyPage/> */}
      {/* <Main/> */}
      <Detail/>
      {/* <MyPage/> */}
    </StyleSheetManager>
  )
}

export default App;

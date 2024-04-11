import GlobalStyles from "@styles/GlobalStyle.js";
import Header from "@components/Header/Header.jsx";
import MyPage from "@pages/MyPage/MyPage.jsx";
import Browse from "@pages/Browse/Browse";

import { StyleSheetManager } from 'styled-components';

function App() {

const shouldForwardProp = prop => prop != "isSelected";


  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <GlobalStyles />
      <Header/>
      <MyPage/>
    </StyleSheetManager>
  )
}

export default App;

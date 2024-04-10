import GlobalStyles from "@styles/GlobalStyle.js";
import Header from "@components/Header/Header.jsx";
import MyPage from "@pages/MyPage/MyPage.jsx";
import Browse from "@pages/Browse/Browse";

function App() {

  return (
    <>
      <GlobalStyles />
      <Header/>
      <MyPage/>
    </>
  )
}

export default App;

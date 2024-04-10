import GlobalStyles from "@styles/GlobalStyle.js";
import Header from "@components/Header/Header.jsx";
import MyPage from "@pages/MyPage/MyPage.jsx";
import Main from '@pages/Main/Main'
import './App.css'

function App() {

  return (
    <>
      <GlobalStyles />
      <Header/>
      {/* <MyPage/> */}
      <Main/>
    </>
  )
}

export default App;

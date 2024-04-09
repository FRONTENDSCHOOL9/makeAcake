import GlobalStyles from "@styles/GlobalStyle.js";
import Header from "./components/Header/Header.jsx";
import Browse from "@pages/Browse/Browse.jsx";

function App() {

  return (
    <>
      <GlobalStyles />
      <Header/>
      <Browse />
    </>
  )
}

export default App

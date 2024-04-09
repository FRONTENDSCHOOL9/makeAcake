import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: unset;
    padding: unset;
  }

  html, body, #root {
    font-size: 16px;
    font-family: PretendardWoffRegular, sans-serif;
  }

  img {
    vertical-align: top;
    max-width: 100%;
  }
`

export default GlobalStyles;
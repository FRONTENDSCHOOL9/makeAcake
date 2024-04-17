import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-black-color: #000;
    --primary-white-color: #fff;
    --primary-pink-color: #e18585; // editButton, addButton, reviewButton ...
    --secondary-pink-color: #ed6c83; // active된 tab 글자 색상

    --gray-color-300: #dcdcdc;
    --gray-color-400: #bdbdbd;
    --gray-color-500: #9c9c9c;
    --gray-color-600: #717171;
    --gray-color-700: #5c5c5c;

    --pink-color-100: #ffe9e9;
    --pink-color-200: #f38888;
    --pink-color-300: #d87878;
    --pink-color-400: #976c6c;

    // 16px 기준
    --font-size-title: 2.5rem; // 24px
    --font-size-xlarge: 1.25rem; // 20px
    --font-size-large: 1rem; // 16px
    --font-size-medium: 0.875rem; // 14px
    --font-size-small: 0.75rem // 12px
  }


  ${reset}

  html, body, #root {
    font-size: 100%;
    font: inherit;
  }

  #root {
    min-width: 360px;
  }
  
  body {
    font-family: PretendardWoffRegular, sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    vertical-align: top;
    max-width: 100%;
  }

  ol, ul, li {
    list-style: none;
  }

  button {
    border: 0;
    cursor: pointer;
    background-color: transparent;
  }
`

export default GlobalStyles;
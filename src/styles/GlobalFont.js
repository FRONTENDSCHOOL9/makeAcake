

import { createGlobalStyle } from "styled-components";
import PretendardBoldWoff from '@assets/fonts/PretendardBold.woff';
import PretendardLightWoff from '@assets/fonts/PretendardLight.woff';
import PretendardRegularWoff from '@assets/fonts/PretendardRegular.woff';
import PretendardSemiBoldWoff from '@assets/fonts/PretendardSemiBold.woff';
import MontserratExtraLightWoff from '@assets/fonts/MontserratExtraLight.woff';


const GlobalFont = createGlobalStyle `
  @font-face {
    font-family: 'PretendardWoffBold';
    src: local('PretendardWoffBold'), local('PretendardWoffBold');
    src: url(${PretendardBoldWoff}) format('woff');
    font-style: 700;
  }
  @font-face {
    font-family: 'PretendardWoffLight';
    src: local('PretendardWoffLight'), local('PretendardWoffLight');
    src: url(${PretendardLightWoff}) format('woff');
    font-style: 300;
  }
  @font-face {
    font-family: 'PretendardWoffRegular';
    src: local('PretendardWoffRegular'), local('PretendardWoffRegular');
    src: url(${PretendardRegularWoff}) format('woff');
    font-style: 400;
  }
  @font-face {
    font-family: 'PretendardWoffSemiBold';
    src: local('PretendardWoffSemiBold'), local('PretendardWoffSemiBold');
    src: url(${PretendardSemiBoldWoff}) format('woff');
    font-style: 600;
  }
  @font-face {
    font-family: 'MontserratWoffExtraLight';
    src: local('MontserratWoffExtraLight'), local('MontserratWoffExtraLight');
    src: url(${MontserratExtraLightWoff}) format('woff');
    font-style: 700;
  }
`

export default GlobalFont;
import styled from "styled-components"
import logo from "@assets/images/logo.svg"
import nav from "@assets/images/nav.svg"


export const StyledHeader = styled.header`
  background-color: #fff;
  color: #fff;
  height: 70px;
  border-bottom: 1px solid #000;
 /*  position: absolute;
  left: 0;
  top: 0; */
  width: 100%;
  box-sizing: border-box;
  display: flex;
  /* flex: 1 1 0; */
`;

export const StyledNav = styled.div`
  margin: 30px 0;
  margin-left: 14px;

  // box-shadow: inset 0 0 10px blue;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  background-image: url(${nav});
  background-size: 100%;
  
  // position: fixed;
`;

export const StyledHome = styled.div`
  // box-shadow: inset 0 0 10px red;
  display: flex;
  justify-content: center;
  width: 91px;
  height: 35px;
  margin: auto;
  background-image: url(${logo});
  // background: no-repeat;
  background-size: 100%;
`;


export const StyledMenu = styled.div`
  width: 50vw;
  height: 100%;
  background-color: #fff;
  color: #000;  
  padding: 30px 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-right: 1px solid #000;
  z-index: 1;
  position: absolute;
  top: 70px;
`;

export const StyledMenuContent = styled.div`
  font-family: MontserratWoffExtraLight, sans-serif;
  padding: 7px 30px 10px 0;
  font-size: 1.2rem;  
`


import styled from "styled-components"
import logo from "@assets/images/logo.svg"
import nav from "@assets/images/nav.svg"

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding: 0 30px;
  box-sizing: border-box;
  border-bottom: 2px solid #000;
  background: #fff;
`;

export const StyledNav = styled.div`
  background-image: url(${nav});
  background-repeat: no-repeat;
  background-size: cover;
  width: 23px;
  height: 23px;
`;

export const StyledHome = styled.div`
  background-image: url(${logo});
  background-size: cover;
  width: 91px;
  height: 35px;
  margin: auto;
`

export const StyledMenu = styled.div`
  width: 50vw;
  background-color: #fff;
  color: #222;  
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-right: 1px solid #000;
  z-index: 2;
  position: absolute;
  top: 100px;
  bottom: 50px;
`;

export const StyledMenuContent = styled.div`
  font-family: MontserratWoffExtraLight, sans-serif;
  padding: 7px 30px 10px 0;
  font-size: 1.2rem;  
  position: sticky;
`


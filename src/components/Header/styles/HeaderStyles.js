import styled from "styled-components"

export const StyledHeader = styled.header`
  background-color: #fff;
  color: #fff;
  height: 70px;
  border-bottom: 1px solid #000;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  box-sizing: border-box;
`;

export const StyledMenu = styled.div`
  margin-top: 70px; // header height만큼 띄우기
  width: 50vw;
  height: 100vh;
  background-color: #fff;
  color: #000;  
  padding: 30px 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-right: 1px solid #000;
  z-index: -1;
`;

export const StyledMenuContent = styled.div`
  font-family: MontserratWoffExtraLight, sans-serif;
  padding: 7px 30px 10px 0;
  font-size: 1.2rem;  
`


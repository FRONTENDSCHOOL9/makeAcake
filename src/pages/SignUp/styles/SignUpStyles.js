import styled from "styled-components";
import backArrow from "@assets/images/backarrow.png";

export const StyledContainer = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: scroll;
  margin: 0 auto;
  box-sizing: border-box;
  // align-items: center;
  min-height: 100vh;
`;

export const BackIcon = styled.button`
  position: absolute;
  display: block;
  width: 32px;
  height: 32px;
  background-image: url(${backArrow});
  background-repeat: no-repeat;
  content: "";
  top: 30px;
  left: 15px;
`

export const LogoWrap = styled.div`
  // box-shadow: inset 0 0 15px blue;
  display: flex;
  justify-content: center;
  margin-top: 82px;
  `;

export const SignUpButton = styled.button`
  background-color: #000;
  &:hover {
    background-color: #E18585;
  }
  &:active {
    background-color: #000;
  }
  text-align: center;
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  width: 100%;
  font-weight: 500;
  margin-top: 87px;
  margin-bottom: 48px;
`;

export const CheckSignUpType = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 53px;
`;

export const SignUpType = styled.h2`
  font-size: 1.1rem;
  width: 100%;
  border: 1px solid #DADADA;
  border-radius: 6px;
  background-color: #FFF;
  color: #DADADA;
  padding: 16px 20px;
  box-sizing: border-box;
  // gap: 14px;
  margin-top: 20px;
  &:active {
    color: #FFF;
    background-color: #000;
  }
`;

export const CurrentSignUpType = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 53px;
  // margin-bottom: 20px;
`;

export const NextButton = styled.button`
  background-color: #000;
  &:hover {
    background-color: #E18585;
  }
  &:active {
    background-color: #000;
  }
  text-align: center;
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  width: 100%;
  font-weight: 500;
  margin-top: 87px;
`;

export const Input = styled.input`
  border-style: none;
  border: solid 1px #DADADA;
  border-radius: 5px;
  width: 100%;
  &:focus {
    outline: none;
  }
  padding: 14px;
  box-sizing: border-box;
  margin-top: 20px;
  &::-webkit-input-placeholder {
    color: #DADADA;
  }
  &#email::-webkit-input-placeholder {
    // background-image: url()
    // background-repeat: no-repeat;
    // background-size: contain;
  }
`;

export const AddressWrap = styled.div`
  display: flex;
  & > button {
    background-color: #000;
    &:hover {
      background-color: #E18585;
    }
    &:active {
      background-color: #000;
    }
    text-align: center;
    color: #fff;
    padding: 14px;
    box-sizing: border-box;
    border: none;
    border-radius: 10px;
    margin-left: auto;
    margin-top: 20px;
  }

  & > label {
    display: flex;
  }

  & input {
    flex-grow: 1;
    width: 100%; 
  }
`;

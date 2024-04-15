import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: scroll;
  padding: 0 24px;
  box-sizing: border-box;
  // align-items: center;
  min-height: 100vh;
`;

export const LogoWrap = styled.div`
  // box-shadow: inset 0 0 15px blue;
  display: flex;
  justify-content: center;
  margin-top: 82px;
  `;

export const SignUpButton = styled.div`
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
  font-size: 1.5rem;
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

export const NextButton = styled.h2`
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
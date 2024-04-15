import styled from "styled-components";
import emailImg from "@assets/images/emailImg.svg"
import pwImg from "@assets/images/pwImg.svg"

export const StyledContainer = styled.div`
    // box-shadow: inset 0 0 15px blue;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100vh;
    padding: 110px 24px 110px 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // text-align: center;
`;

export const LogoWrap = styled.div`
    // box-shadow: inset 0 0 15px blue;
    display: flex;
    justify-content: center;
    // width: 100%;
    // zoom: 200%;
    margin: 0 auto;
    margin-bottom: 30px;    
    // transform: scale(2);

`;

export const Input = styled.input`
  border-style: none;
  border: solid 1px #AAAAAA;
  border-radius: 6px;
  width: 100%;
  &:focus {
    outline: none;
  }
  padding: 16px;
  box-sizing: border-box;
  // margin-bottom: 20px;
  margin-top: 20px;
  &.email::-webkit-input-placeholder {
    color: #AAAAAA;
    background-image: url(${emailImg})
    background-repeat: no-repeat;
    background-size: contain;
  }
  &.password::-webkit-input-placeholder {
    background-image: url(${pwImg})
    background-repeat: no-repeat;
    background-size: contain;
  }
`

export const ErrorWrap=styled.p`
  color: red;
  `

export const KeepLogin = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 40px;
  margin-top: 20px;
`

export const Checkbox = styled.input`
  border-style: none;
  border: solid 1px #AAAAAA;
  border-radius: 6px;
`

export const SnsWrap = styled.div`
& > div {
  // display: flex; 
  // flex-direction: row;
  // gap: 10px;
}

& > div > p::before,p::after {
  display: flex;

  background-color: #000;
  content: "";
  display: inline-block;
  height: 1px;
  // position: relative;
  vertical-align: middle;
  width: 30%;
}

& > div > p {
// margin: 0 10px;
}

& > ul {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
  margin-bottom: 60px; 
}
& > p {
  color: #AAAAAA;
  font-size: 14px;
text-align: center;
}
`

export const SignUpWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  text-align: center;
  & > p {
    text-decoration: underline;
    font-weight: 600;
  }
`

export const LoginButton = styled.button`
  // background
  background-color: #000;
  &:hover {
    background-color: #E18585;
  }
  &:active {
    background-color: #000;
  }

  color: #fff;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  width: 100%;
  font-weight: 600;
  margin-bottom: 50px;
`;
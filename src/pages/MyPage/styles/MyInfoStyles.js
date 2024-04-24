import styled from "styled-components";

export const MyInfoContainer = styled.form`
padding: 14px 20px;
// box-sizing: border-box;
border-radius: 5px;
max-width: 360px;
display: grid;

& .title {
  text-decoration:underline;
  text-underline-offset : 5px;
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 700;
  // border-bottom: 1px solid #000;
  margin-bottom: 20px;
  box-sizing: border-box;
}

& .button {
    width: 60px;
    background-color: #FFF;
    border: 2px solid #000;
    border-radius: 10px;
    font-size: 10px;
    justify-self: center;
    padding: 2px;
    margin-top: 20px;
}

& .control {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 13px;

  & .control-row {
    display: flex;
    justify-content: flex-start;

    & label {
      width: 100px;
      font-weight: 600;
      margin-top: 2px;
    }

    & input {
      border-radius: 8px;
      border: 1px solid #BDBDBD;
      width: 170px; 
      height: 20px;
      padding: 0 5px;
      margin-right: 5px;
      box-sizing: border-box;
    }

    & input::placeholder {
      font-size: 12px;
    }

    & button {
      width: 60px;
      background-color: #FFF;
      border: 2px solid #000;
      border-radius: 10px;
      font-size: 10px;
      margin-left: 5px;
      padding: 2px;
    }
  } 
}
`

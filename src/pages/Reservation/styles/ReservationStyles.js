import styled from "styled-components";


export const StyledReservation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    display: flex;
    justify-content: center;
    & > h2 {
      font-family: PretendardWoffSemiBold, sans-serif;
      font-size: var(--font-size-xlarge);
      margin: 30px 0;
      padding: 0 20px;
    }
  }
  .cakeImage {
    aspect-ratio: 1;
    width: 360px;
  }

  .main {
    padding: 30px 20px;
    width: 360px;
    box-sizing: border-box;
    & > h3 {
      font-size: var(--font-size-xlarge);
    }
  }
`

export const ReservationSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  gap: 30px;
  font-size: var(--font-size-large);
  & > .main-time {
    & > .time-title {
      font-size: var(--font-size-medium);
      margin: 10px 0;
    }
    & > ul {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
    }
  }
  & h4 {
    font-family: PretendardWoffSemiBold, sans-serif;
  }
`

export const ReservationForm = styled.form`
  padding: 5px 20px;
  font-size: var(--font-size-medium);
  display: flex;
  flex-direction: column;
  gap: 10px;

  & label {
    display: inline-block;
    margin-bottom: 10px;
  }
  & .cake-option {
    display: flex;
    gap: 10px;
    margin-left: 20px;
  }
  & .selected {
    background-color: var(--primary-black-color);
    color: var(--primary-white-color);
  }
  & button {
    border: 1px solid var(--gray-color-300);
    border-radius: 10px;
    padding: 5px 10px;
  }
  & button:hover {
    border-color: var(--primary-black-color);
  }
  & input[type="text"] {
    border: 0;
    border-bottom: 1px solid var(--primary-black-color);
    width: 80%;
    margin-left: 20px;
  }
  & input[type="text"]:focus {
    outline: none;
  }
  & .error-message {
    font-family: PretendardWoffSemiBold, sans-serif;
    margin-left: 20px;
    color: var(--secondary-pink-color);
  }
`

export const SelectSizeForm = styled.div`
  & .form-size-label {
    display: block;
    margin-bottom: 10px;
  }

  & input[type="radio"] {
    display: inline;
  }
`
export const Label = styled.label`
  display: inline-block;
  width: fit-content;
`
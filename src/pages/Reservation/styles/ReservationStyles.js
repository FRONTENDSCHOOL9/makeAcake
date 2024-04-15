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
    box-shadow: inset 0 0 20px red;
    padding: 30px 20px;
    width: 360px;
    box-sizing: border-box;
    & > h3 {
      box-shadow: inset 0 0 20px purple;
      font-size: var(--font-size-xlarge);
    }
  }
`

export const ReservationSection = styled.div`
  box-shadow: inset 0 0 20px green;
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

  & .main-form {
    & > form {
      padding: 5px 20px;
      font-size: var(--font-size-medium);
      display: flex;
      flex-direction: column;
      gap: 10px;
      & .cake-option {
        display: flex;
        gap: 10px;
      }
      & button {
        border: 1px solid var(--primary-black-color);
        border-radius: 10px;
        padding: 5px 10px;
      }
      & button:hover, button:active {
        background-color: var(--primary-black-color);
        color: var(--primary-white-color);
      }
      & input {
        border: 0;
        border-bottom: 1px solid var(--primary-black-color);
        width: 80%;
      }
      & input:focus {
        outline: none;
      }
    }
  }
`
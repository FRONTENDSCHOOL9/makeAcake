import styled from "styled-components";


export const StyledReservation = styled.div`
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
    & > div {
      box-shadow: inset 0 0 20px blue;
      & > .main-message-content {
        font-size: var(--font-size-medium);
      }
      & > .time-title {
        padding-left: 20px;
        font-size: var(--font-size-medium);
        margin: 10px 0;
      }
    }
`
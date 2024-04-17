import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledDetail = styled.div`
  max-width: 360px;
  flex-basis: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & h3 {
    font-size: var(--font-size-xlarge);
    font-family: PretendardWoffSemiBold, sans-serif;
  }

  & dl {
    margin-bottom: 5px;
    font-size: var(--font-size-medium);
  }

  & dt {
    position: relative;
    display: inline-block;
    padding-right: 20px;
    text-align: justify;
    width: 80px;
  }

  & dt:after {
    content: "";
    display: inline-block;
    margin-left: 10px;
    width: 2px;
    height: 80%;
    background-color: var(--primary-black-color);
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0,-50%);
  }

  & dd {
    display: inline-block;
    margin-left: 20px;
  }

  & p {
    font-size: var(--font-size-medium);
    line-height: 1.4;
  }

  & div:last-child {
    margin-top: 1.8rem;
    display: flex;
    justify-content: space-between;
  }

  & button:not(:last-child) {
    padding: 0;
  }
  
`
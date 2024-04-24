import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    max-width: 360px;
  }
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
    display: flex;
  }

  & dt {
    position: relative;
    display: inline-block;
    text-align: justify;
    min-width: 40px;
  }

  & dt:after {
    content: '';
    display: inline-block;
    width: 100%;
  }

  & div div {
    border: 1px solid black;
    height: 1rem;
    margin-left: 15px;
  }

  & dd {
    display: inline;
    margin-left: 20px;
    overflow-wrap: break-word;
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
    border: none;
    outline: none;
  }

  & button:last-child {
    border: none;
    outline: none;
    // border: 1px solid var(--gray-color-300);
    border-radius: 10px;
    color: #fff;
    padding: 10px 30px;
    background-color: #000;
    font-family: PretendardWoffSemiBold, sans-serif;
    font-size: 1rem; 
  }
`

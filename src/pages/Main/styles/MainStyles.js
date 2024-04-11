import styled from "styled-components";

const gapSize =10;

export const StyledMain = styled.div`
  background-color: rgb(0,0,0,0.5);
  width: 100vw;
  height: 100vh;

  & > .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
    font-size: 2.5em;
    font-family: 'PretendardWoffBold', sans-serif;
  }
`
export const StyledList = styled.div`
  box-shadow: inset 0 0 10px red;
  padding: 30px 20px;
  &:last-child {
    padding-top: 0;
  }

  & > h3 {
    box-shadow: inset 0 0 20px blue;
    margin-bottom: 20px;
    font-size: 1.2rem;
  }

  & > .card-container {
    box-shadow: inset 0 0 20px purple;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }

  & li {
    width: calc((100% - ${gapSize * 2}px) / 3);
    display: flex;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    border: 1px solid #000;
  }
`
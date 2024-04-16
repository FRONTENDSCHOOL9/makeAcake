import styled from "styled-components";

const gapSize = 10;

export const StyledMain = styled.div`
  background-color: rgb(0,0,0,0.5);
  width: 100vw;
  height: calc(100vh - 70px);

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
  padding: 30px 20px;
  &:last-child {
    padding-top: 0;
  }

  & > h3 {
    margin-bottom: 20px;
    font-size: 1.2rem;
    font-weight: 700;
  }

  & > .card-container {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }
`
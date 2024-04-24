import styled from "styled-components";

const gapSize = 10;

export const StyledMain = styled.div`
  background-color: rgb(0,0,0,0.5);
  height: calc(100vh - 100px);
  max-width: 600px;
  margin: 0 auto;

  & > .title {
    color: #fff;
    text-align: center;
    font-size: 2.5em;
    font-family: 'PretendardWoffBold', sans-serif;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const StyledList = styled.div`
  padding: 30px 20px;
  max-width: 600px;
  margin: 0 auto;
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
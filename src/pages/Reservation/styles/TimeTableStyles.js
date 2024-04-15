import styled from "styled-components";


export const TimeTable = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  padding-left: 20px;

  & button {
    /* box-shadow: inset 0 0 20px blue; */
    padding: 10px 15px;
    border-radius: 5px;
    border: 1px solid var(--gray-color-300);
    background-color: var(--primary-white-color);
    font-family: PretendardWoffRegular, sans-serif;
    font-size: var(--font-size-small);
    width: 65px;
  }

  & button:active, button:hover {
    background-color: var(--primary-black-color);
    color: var(--primary-white-color)
  }
`
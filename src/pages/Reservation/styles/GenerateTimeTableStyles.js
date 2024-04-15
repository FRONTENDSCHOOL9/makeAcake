import styled from "styled-components";


export const TimeTableListItem = styled.li`
  width: 25%;  
  padding: 3px;
  box-sizing: border-box;
  font-size: var(--font-size-small);
  

  & button {
    /* box-shadow: inset 0 0 20px blue; */
    width: 100%;
    border-radius: 5px;
    line-height: 38px;
    font-family: PretendardWoffLight, sans-serif;
    border: 1px solid var(--gray-color-300);
    background-color: var(--primary-white-color);
  }

  & button:active, button:hover, .selected {
    background-color: var(--primary-black-color);
    color: var(--primary-white-color)
  }
`

import styled from "styled-components";

export const StyledGnb = styled.ul`
    display: flex;
    justify-content: center;
    overflow: hidden;
`

export const StyledGnbItem = styled.li`
    font-size: 14px;
    padding: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: ${({isSelected}) => isSelected ? "1px solid #000" : "none"}
`;

export const StyledFilterLabel = styled.label`
  font-size: 12px;
  display: block;
  margin-top: 40px;
`;

export const StyledFilterSelect = styled.select`
  margin-left: 8px;
`

export const StyledUl = styled.ul`
  list-style: none;
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  // justify-content: start;

  gap: 10px;
`
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

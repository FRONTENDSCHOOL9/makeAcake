import {styled} from "styled-components";


export const StyledHeading = styled.h1`
    font-size: 24px;
    text-align: center;
    padding: 17px 0 17px;
`

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
    border-bottom: ${({isSelected}) => (isSelected ? "1px solid #000" : "none")}
`;
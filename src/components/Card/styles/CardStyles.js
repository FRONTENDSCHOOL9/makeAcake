import styled from "styled-components";

const gapSize = 10;

export const StyledCard = styled.li`
  width: calc((100% - ${gapSize * 2}px) / 3);
  display: flex;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
`

export const StyledCardTitle = styled.h3`
  font-size: 14px;
  margin: 8px 0 8px;
`

export const StyledCardInfo = styled.p`
  font-size: 12px;
  margin-bottom: 4px;
  height: 14px;
`
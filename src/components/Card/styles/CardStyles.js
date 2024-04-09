import styled from "styled-components";

const gapSize = 10;

export const StyledCard = styled.li`
  width: calc((100% - ${gapSize * 2}px) / 3);
`

export const StyledCardTitle = styled.h3`
  font-size: 14px;
  margin: 5px 0 5px;
`

export const StyledCardInfo = styled.p`
  font-size: 12px;
  margin-bottom: 3px;
`
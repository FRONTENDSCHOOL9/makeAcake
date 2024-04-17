import {isReserve, isReview} from "@utils/cardLocation.js"

import styled from "styled-components";

export const StyledLayout = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 360px;
  margin: 0 auto;
`

export const StyledContainer = styled.div`
  display: flex;
  width: 340px;
  justify-content: ${props => isReserve(props.location) || isReview(props.location) ? "center" : "flex-start"};
  margin: 0 auto;
  margin-top: 30px;
  gap: 13px;
  flex-wrap: wrap;
`

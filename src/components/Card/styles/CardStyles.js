import styled from "styled-components";
import {isReserve, isReview, isMain} from "@utils/cardLocation.js"

const gapSize = 13;

export const StyledCard = styled.li`
  width: ${props => (isReserve(props.location) || isReview(props.location)) ? "100%" : `calc((100% - ${gapSize * 2}px) / 3)`};
  display: flex;
  flex-direction: ${props => (isReserve(props.location) || isReview(props.location)) ? "row" : "column"};
  cursor: pointer;
  gap: ${props => (isReserve(props.location) || isReview(props.location)) ? "20px" : "none"};
  
  & .imgBox {
    position: relative;

    & > img {
      height: ${props => isMain(props.location) ? '212px' : '130px'};
    }
  }

  & .descBox {
    display: flex;
    flex-direction: column;

    & > h3 {
      font-size: 14px;
      margin: 8px 0 5px 0;
    }
    
    & > p {
      font-size: 12px;
      margin-bottom: 4px;
    }

    & > .price {
      font-size: ${props => (isReserve(props.location) || isReview(props.location)) ? "14px" : "12px"};
    }

    & > .address {
      height: 30px;
    }
  }
`
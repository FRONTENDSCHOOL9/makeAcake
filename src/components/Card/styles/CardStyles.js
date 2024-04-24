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
      width: ${props => isMain(props.location) ? "150px" : ""};
      height: ${props => isMain(props.location) ? '130px' : '130px'};
      margin: 0 auto;
      display: block;
      aspect-ratio: 1/1;
    }

    & > .main-name {
      font-size: var(--font-size-medium);
      text-align: center;
      font-family: PretendardWoffBold, sans-serif;
      color: var(--gray-color-700);
    }
  }

  & .descBox {
    display: flex;
    flex-direction: column;

    & > h3 {
      font-size: 14px;
      margin-top: 8px;
    }
    
    & > p {
      font-size: 12px;
      margin-top: 6px;
    }

    & > .price {
      font-size: ${props => (isReserve(props.location) || isReview(props.location)) ? "14px" : "12px"};
    }

    & > .address {
      /* height: 30px; */
    }
  }
`
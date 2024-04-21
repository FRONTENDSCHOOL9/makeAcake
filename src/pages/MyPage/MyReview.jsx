import noneRequest from "../../assets/images/noneRequest2.png";

import { useState, useEffect, Fragment } from "react";
import fakeData from "../../fakeData.js"

import Card from "@components/Card/Card";
import ReviewForm from "@components/Review/ReviewForm";

import {StyledContainer} from "@styles/LayoutStyled";

function MyReview () {
  const [toggleStates, setToggleStates] = useState({});
  const [lastClickedId, setLastClickedId] = useState(null);

  const handleReviewClick = (id) => {
    setToggleStates(prev => {
      const newStates = {...prev};

      if(lastClickedId !== null && lastClickedId !== id) {
        newStates[lastClickedId] = false;
      }

      newStates[id] = !prev[id];
      return newStates;
    });

    setLastClickedId(id);
  }

  /* cakes: Buyer가 구매 완료한 제품 목록 */
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    setCakes(fakeData);
  }, []);

  return (
    <StyledContainer>
      {cakes.length === 0 ? (
          <img src={noneRequest} alt="None Request" />
          ) : cakes.map(cake => (
            <Fragment key={cake.id}>
              <Card cake={cake} onSelect={() => handleReviewClick(cake.id)}/>
              {toggleStates[cake.id] && <ReviewForm cake={cake}/>}
            </Fragment>
          )
        )
      }
    </StyledContainer>
   // 1. 댓글창
   // 2. 하트 클릭 -> 좋아요 -> 좋아요 상태 보관
   // 3. 검색창
  )
}

export default MyReview;
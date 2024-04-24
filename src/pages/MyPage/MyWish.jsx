import noneRequest from "../../assets/images/noneRequest2.png";

import { useState, useEffect } from "react";
import fakeData from "../../fakeData.js"

import Card from "@components/Card/Card";
import {StyledContainer} from "@styles/LayoutStyled";

function MyWish () {
  /* cakes: Buyer가 찜목록에 넣은 상품 데이터 */
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    setCakes(fakeData);
  }, []);

  return (
    <StyledContainer>
      {cakes.length === 0 ? (
          <img src={noneRequest} alt="None Request" />
          ) : cakes.map(cake => (
              <Card cake={cake} key={cake.id}/>
          )
        )
      }
    </StyledContainer>
   
  )
}

export default MyWish;
import { useEffect, useState } from "react";
import likeDisabled from "@assets/images/like_disabled.svg"
import Button from "@components/Button/Button";
import { DetailContainer, StyledDetail } from "@pages/Detail/styles/DetailStyles";

function Detail() {
  const [ cakeInfo, setCakeInfo ] = useState({});
  const [ like, setLike ] = useState(0);
  const placeholderImageUrl = 'https://via.placeholder.com/360';

  useEffect (() => {
    const fakeCake = {
      "_id": 2,
      "seller_id": 2,
      "price": 17260,
      "shippingFees": 2500,
      "show": true,
      "active": true,
      "name": "사조참치케이크",
      "quantity": 200,
      "buyQuantity": 198,
      "address": "서울시 강남구 역삼동 123",
      "sns": "instagram.com/sajotuna",
      "mainImages": [
        {
          "path": "https://via.placeholder.com/360",
          "name": "sample-diver.jpg",
          "originalname": "cake.jpg"
        }
      ],
      "content": "맛있는 초코케이크 맛있어요. 간단한 설명 예시 요약입니다. 맛있는 사조참치케이크 맛있는 초코케이크 맛있어요. 간단한 설명 예시 요약입니다. 맛있는 사조참치케이크",
      "createdAt": "2024.03.04 09:54:38",
      "updatedAt": "2024.03.09 14:59:38",
      "extra": {
        "isNew": false,
        "isBest": true,
        "sort": 4
      },
      "workingday": {
        "day": "화요일",
        "start": 10,
        "end": 17
      },

    };

    setCakeInfo({
      ...fakeCake,
      mainImages: {
        ...fakeCake.mainImages,
      },
      extra: {
        ...fakeCake.extra,
      },
      workingday: {
        ...fakeCake.workingday
      }
    });
  }, []);

  return (
    <DetailContainer>
      <img src={placeholderImageUrl} alt="cakeImage" />
      <StyledDetail>
        <h3>{ cakeInfo.name }</h3>
        <div>
          <dl>
            <dt>영 업 시 간</dt>
            <dd>{ cakeInfo.workingday?.start }시 ~ { cakeInfo.workingday?.end }시</dd>
          </dl>
          <dl>
            <dt>위 치</dt>
            <dd>{ cakeInfo.address }</dd>
          </dl>
          <dl>
            <dt>S N S</dt>
            <dd>{ cakeInfo.sns }</dd>
          </dl>
        </div>
        <p>{ cakeInfo.content }</p>
        <div>
          <button type="button" onClick={ ()=> {setLike(like + 1)} }><img src={likeDisabled} alt="찜 추가"/></button>
          <Button>예약하기</Button> 
        </div>
      </StyledDetail>
    </DetailContainer>
  )
}

export default Detail;
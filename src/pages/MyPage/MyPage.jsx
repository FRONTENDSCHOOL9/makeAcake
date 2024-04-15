import noneRequest from "../../assets/images/noneRequest2.png";
import { useState, useEffect, Fragment } from "react";

import { StyledLayout, StyledContainer } from "@styles/LayoutStyled";

import Gnb from "../../components/Gnb/Gnb.jsx";
import Card from "@components/Card/Card.jsx";
import ReviewForm from "@components/Review/ReviewForm.jsx";

export default function MyPage() {
    const categories = [
        {name: "예약 내역", type: "reserve", },
        {name: "찜한 상품", type: "wish",  },
        {name: "리뷰 관리", type: "review", },
        {name: "정보 수정", type: "info", },
    ];

    const [selectedCategory, setSelectedCategory] = useState(categories[0].type);
    const [cakes, setCakes] = useState([]);
    const [toggleStates, setToggleStates] = useState({});

    /* 가라데이터 */
    /* 예약 데이터 */
    useEffect(() => {
        const fakeReservationData = [
            {
              id: 1,
              name: "녹차케이크",
              price: "48000",
              address:"서울특별시 강남구 역삼동",
              enrollDate: "2024-04-12 17:48",
            },
            {
              id: 2,
              name: "딸기케이크",
              price: "50000",
              address:"경기도 수원시 영통구 망포동",
              enrollDate: "2024-04-10 12:35",
            },
            {
              id: 3,
              name: "초코케이크",
              price: "52000",
              address:"부산광역시 해운대구 우동",
              enrollDate: "2024-04-08 08:55",
            },
        ];
        setCakes(fakeReservationData);

        const initialToggleStates = fakeReservationData.reduce((acc, cake) => {
          acc[cake.id] = false;
          return acc;
        }, {});
        setToggleStates(initialToggleStates);
    }, [])

    function handleSelectCategory(category) {
        setSelectedCategory(category);
    }

    function handleCardClick(id, category) {
      if(category === "review") {
        setToggleStates(prev => ({
          ...prev,
          [id]: !prev[id]
        }));
      }
    }

    function renderContent(category){
      return (
        <StyledContainer>
        {cakes.length === 0 ? (
            <img src={noneRequest} alt="None Request" />
            ) : cakes.map(cake => (
              <Fragment key = {cake.id}>
                <Card cake={cake} location={category} onClick={() => handleCardClick(cake.id, category)}/>
                {category === "review" && toggleStates[cake.id] && <ReviewForm cake={cake} />}
              </Fragment> 
            )
         )}
        </StyledContainer>
      )
    }

    return (
        <StyledLayout>
            <Gnb categories={categories} selectedCategory={selectedCategory} onSelect={handleSelectCategory}>My Page</Gnb>
            {renderContent(selectedCategory)}
        </StyledLayout>
    )
}
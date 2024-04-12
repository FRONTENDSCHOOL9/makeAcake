import noneRequest from "../../assets/images/noneRequest2.png";
import { useState, useEffect } from "react";

import { StyledLayout, StyledContainer } from "@styles/LayoutStyled";
import Gnb from "../../components/Gnb/Gnb.jsx";

import Card from "@components/Card/Card.jsx";

export default function MyPage() {
    const categories = [
        {name: "예약 내역", type: "reserve", },
        {name: "찜한 상품", type: "wish",  },
        {name: "리뷰 관리", type: "review", },
        {name: "정보 수정", type: "info", },
    ];

    const [selectedCategory, setSelectedCategory] = useState(categories[0].type);

    const [cakes, setCakes] = useState([]);

    /* 가라데이터 */
    /* 예약 데이터 */

    useEffect(() => {
        const fakeReservationData = [
            {
                name: "녹차케이크",
                price: "48000",
                address:"서울특별시 강남구 역삼동"
            },
            {
                name: "딸기케이크",
                price: "50000",
                address:"경기도 수원시 영통구 망포동"
            },
            {
                name: "초코케이크",
                price: "52000",
                address:"부산광역시 해운대구 우동"
            },
        ];

        setCakes(fakeReservationData);
    }, [])

    function handleSelectCategory(category) {
        setSelectedCategory(category);
    }

    return (
        <StyledLayout>
            <Gnb categories={categories} selectedCategory={selectedCategory} onSelect={handleSelectCategory}>My Page</Gnb>
            
            {/* 예약 내역 클릭 시 */}
            {selectedCategory === "reserve"  &&  
                <StyledContainer >
                 {/* {cakes.length === 0 ? (
                     <img style={{width: "86px"}} src={noneRequest} alt="None Request" />
                     ) : cakes.map(cake => (
                         <Card key = {cake.name} cake={cake} site="myReserve" />
                     )   
                 )} */}
                </StyledContainer>
            }

            {/* 찜한 상품 클릭 시 */}
            {selectedCategory === "wish" &&
                <StyledContainer >
                    {cakes.length === 0 ? (
                        <img style={{width: "86px"}} src={noneRequest} alt="None Request" />
                        ) : cakes.map(cake => (
                            <Card key = {cake.name} cake={cake} location="myReserve" />
                        )   
                    )}
                </StyledContainer>
            }

        </StyledLayout>
    )
}
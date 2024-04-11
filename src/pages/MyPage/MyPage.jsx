import noneRequest from "../../assets/images/noneRequest2.png";
import { useState } from "react";

import { StyledLayout, StyledContainer } from "@styles/LayoutStyled";
import Gnb from "../../components/Gnb/Gnb.jsx";

export default function MyPage() {
  const categories = [
    {name: "예약 내역", type: "reserve"},
    {name: "찜한 상품", type: "wish"},
    {name: "리뷰 관리", type: "review"},
    {name: "정보 수정", type: "info"},
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0].type);


  function handleSelectCategory(category) {
    setSelectedCategory(category);
}

  return (
    <StyledLayout>
      <Gnb categories={categories} selectedCategory={selectedCategory} onSelect={handleSelectCategory}>My Page</Gnb>
      <StyledContainer >
        <img style={{width: "86px"}} src={noneRequest} alt="None Request" />
      </StyledContainer>

      {/* 이후 추가 */}
    </StyledLayout>
  )
}
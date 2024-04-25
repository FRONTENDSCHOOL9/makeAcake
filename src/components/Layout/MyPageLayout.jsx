import {Outlet} from "react-router-dom";
import Gnb from "@components/Gnb/Gnb";

import {useEffect} from "react";
import { useLocation } from 'react-router-dom';

import {useSelection} from "@hooks/useSelection.js";
import {StyledLayout} from "@styles/LayoutStyled";

function MyPageLayout() {
  const location = useLocation();
  const {selectedValue: selectedCategory, handleSelectValue: handleSelectCategory} = useSelection("all");

  useEffect(() => {
    const pathSegments = location.pathname.split('/'); 
    const activeCategory = pathSegments[pathSegments.length - 1];
    handleSelectCategory(activeCategory); // selectedCategory: reserve, wish, review, info
  }, [location, handleSelectCategory]);

  const categories = [
    /* {name: "예약 내역", type: "reserve", }, */
    {name: "찜한 상품", type: "wish",  },
    /* {name: "리뷰 관리", type: "review", },
    {name: "정보 수정", type: "info", }, */
];

  return (
    <StyledLayout> 
        <Gnb categories={categories} selectedCategory={selectedCategory} onSelect={handleSelectCategory}>My Page</Gnb>
        <Outlet />
    </StyledLayout>
  );
}

export default MyPageLayout;
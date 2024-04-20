import {Outlet} from "react-router-dom";
import Gnb from "@components/Gnb/Gnb";

import {useSelection} from "@hooks/useSelection.js";


function MyPageLayout() {
  const {selectedValue: selectedCategory, handleSelectValue: handleSelectCategory} = useSelection("all");

  const categories = [
    {name: "예약 내역", type: "reserve", },
    {name: "찜한 상품", type: "wish",  },
    {name: "리뷰 관리", type: "review", },
    {name: "정보 수정", type: "info", },
];
  return (
    <> 
        <Gnb categories={categories} selectedCategory={selectedCategory} onSelect={handleSelectCategory}>My Page</Gnb>
        <Outlet />
    </>
    
  );
}

export default MyPageLayout;
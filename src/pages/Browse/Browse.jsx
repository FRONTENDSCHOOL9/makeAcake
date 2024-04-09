import {useState} from "react";

import {PageHeading} from "@styles/CommonStyles.js";

import BrowseGnb from "./components/BrowseGnb.jsx";
import BrowseBoard from "./components/BrowseBoard.jsx";

export default function Browse() {
    const categories = ["전체보기", "레터링케이크", "포토케이크", "기타케이크"];
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    

    function handleSelectCategory(category) {
        setSelectedCategory(category);
    }

    return (
        <>
            {/* <Header/> */}
            <div style={{ backgroundColor: "black", height: "56px" }}></div>
            <PageHeading>케이크 찾기</PageHeading>
            <BrowseGnb categories={categories} selectedCategory={selectedCategory} onSelect={handleSelectCategory}/>

            {/* 기본: 전체 */}

        </> 
    )
}
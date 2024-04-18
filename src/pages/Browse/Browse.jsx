import {useState, useEffect} from "react";

import {StyledFilterLabel, StyledFilterSelect} from "./styles/BrowseStyles.js"
import {StyledLayout, StyledContainer} from "@styles/LayoutStyled.js";

import Gnb from "@components/Gnb/Gnb.jsx";
import Card from "@components/Card/Card.jsx";

import fakeData from "../../fakeData.js"

export default function Browse() {

  // Browse 페이지의 탭을 누르면 탭의 id에 따라서 url이 바뀐다. 아마도 /:tabId
  // 컴포넌트 따로 만들지 않을 예정이다. 탭은 단순히 필터링.
  // 그러므로 Detail의 path는 /:tabId가 빠진 /:productId로.
  // Browse 페이지에선 탭을 뜯어서 고쳐야한다.
    
    const categories = [
      {name: "전체보기", type: "all"},
      {name: "레터링케이크", type: "lettering"},
      {name: "포토케이크", type: "photo"},
      {name: "기타케이크", type: "etc"}
    ];

    const tastes = [
      {name: "없음", type: "none"},
      {name: "초코", type: "chocolate"},
      {name: "바닐라", type: "vanilla"},
      {name: "딸기", type: "strawberry"}
    ];

    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedTaste, setSelectedTaste] = useState("none");
    const [cakes, setCakes] = useState([]);
    
    useEffect (() => {
      setCakes(fakeData);
    }, [])

    function handleSelectCategory(category) {
        setSelectedCategory(category);
    }

    function handleSelectTaste(event) {
      setSelectedTaste(event.target.value);
    }

    let filteredCakes = cakes;
    if(selectedCategory !== "all") {
      filteredCakes = filteredCakes.filter(cake => cake.type === selectedCategory);
    }

    if(selectedTaste !== "none") {
      filteredCakes = filteredCakes.filter(cake => cake.taste === selectedTaste);
    }
    
    return (
        <StyledLayout>
            <Gnb categories={categories} selectedCategory={selectedCategory} onSelect={handleSelectCategory}>케이크 찾기</Gnb>
            <StyledFilterLabel>
              필터
              <StyledFilterSelect value={selectedTaste} onChange={handleSelectTaste}>
                {tastes.map(taste => (
                  <option key={taste.type} value={taste.type}>
                    {taste.type === "none" ? "없음" : taste.name}
                  </option>
                ))}
              </StyledFilterSelect>
            </StyledFilterLabel>

            <StyledContainer>
              {filteredCakes.map(cake => (
                <Card key={cake.name} cake={cake} location="browse"/>
              ))}
            </StyledContainer>
        </StyledLayout> 
    )
}
import {useState, useEffect} from "react";

import {StyledFilterLabel, StyledFilterSelect} from "./styles/BrowseStyles.js"
import {StyledLayout, StyledContainer} from "@styles/LayoutStyled.js";

import Gnb from "@components/Gnb/Gnb.jsx";
import Card from "@components/Card/Card.jsx";
import {useCategorySelector} from "@hooks/useCategorySelector.js";

import fakeData from "../../fakeData.js"

export default function Browse() {

  const {selectedCategory, handleSelectCategory} = useCategorySelector("all");
  const [selectedTaste, setSelectedTaste] = useState("none");

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

  const [cakes, setCakes] = useState([]);
  
  useEffect (() => {
    setCakes(fakeData);
  }, [])

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
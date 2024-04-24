import {useState, useEffect} from "react";
import { useNavigate } from "react-router";

import {StyledFilterLabel, StyledFilterSelect} from "./styles/BrowseStyles.js"
import {StyledLayout, StyledContainer} from "@styles/LayoutStyled.js";

import Gnb from "@components/Gnb/Gnb.jsx";
import Card from "@components/Card/Card.jsx";

import {useSelection} from "@hooks/useSelection.js";

import fakeData from "../../fakeData.js"
import { useQuery } from "@tanstack/react-query";
import useCustomAxios from "@query/useCustomAxios.mjs";

export default function Browse() {
  const {selectedValue: selectedCategory, handleSelectValue: handleSelectCategory} = useSelection("all");
  const {selectedValue: selectedTaste, handleSelectValue: handleSelectTaste} = useSelection("none");
  const navigate = useNavigate();
  const axios = useCustomAxios();

  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: () => axios.get('/products'),
    select: (response) => response.data.item,
    suspense: true,
  });
  
  const categories = [
    {name: "전체보기", type: "all"},
    {name: "레터링", type: "type_lettering"},
    {name: "포토", type: "type_photo"},
    {name: "캐릭터", type: "type_character"},
    {name: "엽기", type: "type_funny"},
    {name: "기타", type: "type_etc"}
  ];

  const tastes = [
    {name: "없음", type: "none"},
    {name: "초코", type: "taste_chocolate"},
    {name: "바닐라", type: "taste_vanilla"},
    {name: "딸기", type: "taste_strawberry"},
    {name: "녹차", type: "taste_greentea"}
  ];
  


  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryURL = params.get("category") || "all";
    const tasteURL = params.get("taste") || "none";
    
    handleSelectCategory(categoryURL);
    handleSelectTaste(tasteURL);
  }, [location, handleSelectCategory, handleSelectTaste])

  const updateFilters = (category, taste) => {
    handleSelectCategory(category);
    handleSelectTaste(taste);
    navigate(`/products?category=${category}&taste=${taste}`);
  }

  let filteredCakes = data;
  if(selectedCategory !== "all") {
    filteredCakes = filteredCakes.filter(cake => {
      return cake.extra.category.type === selectedCategory;
    })
  }

  if(selectedTaste !== "none") {
    filteredCakes = filteredCakes.filter(cake => {
      return cake.extra.category.taste === selectedTaste;
    })
  }

  return (
      <StyledLayout>
          <Gnb categories={categories} selectedCategory={selectedCategory} onSelect={category => updateFilters(category, selectedTaste)}>케이크 찾기</Gnb>
          <StyledFilterLabel>
            필터
            <StyledFilterSelect value={selectedTaste} onChange={e => updateFilters(selectedCategory, e.target.value)}>
              {tastes.map(taste => (
                <option key={taste.type} value={taste.type}>
                  {taste.type === "none" ? "없음" : taste.name}
                </option>
              ))}
            </StyledFilterSelect>
          </StyledFilterLabel>

          <StyledContainer>
            {filteredCakes && filteredCakes.map(cake => (
              <Card key={cake.name} item={cake} />
            ))}
          </StyledContainer>
      </StyledLayout> 
  )
}
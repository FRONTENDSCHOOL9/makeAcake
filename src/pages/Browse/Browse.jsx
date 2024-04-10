import {useState, useEffect} from "react";

import {StyledFilterLabel, StyledFilterSelect, StyledContainer} from "./styles/BrowseStyles.js"
import {StyledLayout} from "@components/Gnb/styles/GnbStyled.js";

import Gnb from "../../components/Gnb/Gnb.jsx";
import Card from "@components/Card/Card.jsx";

export default function Browse() {
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


    /* useEffect: 통신 관련. 나중에 커스텀훅으로 뺄 예정 */
    /* useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch("API URL 여기 적으시면 됩니다~!");
          const data = await response.json();
          const formattedData = data.map(item => ({
            name: item.title,
            price: item.price,
            address: item.address,
            image: item.img
          }));
          setCakes(formattedData);
        } catch(error) {
          console.error("데이터를 불러오는 중 오류 발생:", error);
        }
      };

      fetchData();
    }, []); */
    
    // 아래는 위의 통신 대신 임시 가짜 데이터 생성
    useEffect (() => {
      const fakeCake = [
        {name: "초코레터링", type: "lettering", taste: "chocolate", price: 30000, address:"서울특별시 강남구 역삼동"},
        {name: "바닐라포토", type: "photo", taste: "vanilla", price: 44000, address:"경기도 수원시 영통구 망포동"},
        {name: "딸기기타", type: "etc", taste: "strawberry", price: 50000, address:"부산광역시 해운대구 우동"},
        {name: "바닐라기타", type: "etc", taste: "vanilla", price: 33000, address:"대구광역시 수성구 만촌동"},
        {name: "초코기타", type: "etc", taste: "chocolate", price: 38000, address:"인천광역시 남동구 구월동"},
        {name: "초코포토", type: "photo", taste: "chocolate", price: 37000, address:"광주광역시 서구 화정동"},
        {name: "바닐라레터링", type: "lettering", taste: "vanilla", price: 43000, address:"대전광역시 서구 둔산동"},
      ];

      setCakes(fakeCake);
    }, [])

    function handleSelectCategory(category) {
        setSelectedCategory(category);
    }

    function handleSelectTaste(event) {
      setSelectedTaste(event.target.value);
      console.log(event.target.value);
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
                <Card key={cake.name} cake={cake}/>
              ))}
            </StyledContainer>
        </StyledLayout> 
    )
}
import Button from "@components/Button/Button.jsx";
import {StyledMain } from "@pages/Main/styles/MainStyles";
import { useEffect, useState } from "react";

import MainSection from "./components/MainSection.jsx";


function Main() {
  const [ cakes, setCakes ] = useState([]);

  useEffect (() => {
    const fakeCake = [
        {
            name: "녹차케이크",
            price: "48000",
            address:"서울특별시 강남구 역삼동",
            enrollDate: "2024-04-12 17:48"
        },
        {
            name: "딸기케이크",
            price: "50000",
            address:"경기도 수원시 영통구 망포동",
            enrollDate: "2024-04-10 12:35",
        },
        {
            name: "초코케이크",
            price: "52000",
            address:"부산광역시 해운대구 우동",
            enrollDate: "2024-04-08 08:55",
        },
        {
          name: "녹차케이크",
          price: "48000",
          address:"서울특별시 강남구 역삼동",
          enrollDate: "2024-04-12 17:48"
      },
      {
          name: "딸기케이크",
          price: "50000",
          address:"경기도 수원시 영통구 망포동",
          enrollDate: "2024-04-10 12:35",
      },
      {
          name: "초코케이크",
          price: "52000",
          address:"부산광역시 해운대구 우동",
          enrollDate: "2024-04-08 08:55",
      },
    ];

    setCakes(fakeCake);
  }, [])

  return (
    <>
      <StyledMain>
        <h1 className="title">당신만의<br/>케이크를<br/>찾아보세요</h1>
      </StyledMain>
      <div>
        <MainSection cakes={cakes}>인기 케이크</MainSection>
        <MainSection cakes={cakes}>최신 케이크</MainSection>
        <Button>더 알아보기</Button>
      </div>
    </>

  )
}

export default Main;
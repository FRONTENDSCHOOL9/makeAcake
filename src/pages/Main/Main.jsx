import Button from "@components/Button";
import { StyledList, StyledMain } from "@pages/Main/styles/MainStyles";
import { useEffect, useState } from "react";


function Main() {

  const [ cakes, setCakes ] = useState([]);

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
  return (
    <>
      <StyledMain>
        <h1 className="title">당신만의<br/>케이크를<br/>찾아보세요</h1>
      </StyledMain>
      <div>
        <StyledList>
          <h3>신규 케이크</h3>
          <ul className="card-container">
            { cakes.slice(0,6).map(cakes => (<li key={cakes.name}>{cakes.name}</li>)) }
          </ul>
        </StyledList>
        <StyledList>
          <h3>인기 케이크</h3>
          <ul className="card-container">
            { cakes.slice(0,6).map(cakes => (<li key={cakes.name}>{cakes.name}</li>)) }
          </ul>
        </StyledList>
        <Button>더 알아보기</Button>
      </div>


    </>

  )
}

export default Main;
import Button from "@components/Buttons/Button.jsx";
import {StyledMain} from "@pages/Main/styles/MainStyles";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import MainSection from "./components/MainSection.jsx";

import fakeData from "../../fakeData.js"



function Main() {
  const [ cakes, setCakes ] = useState([]);

  useEffect (() => {
    setCakes(fakeData);
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
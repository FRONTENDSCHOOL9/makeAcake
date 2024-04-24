import Button from "@components/Buttons/Button.jsx";
import {StyledMain} from "@pages/Main/styles/MainStyles";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from 'react-router-dom';
import MainSection from "./MainSection.jsx";

import useCustomAxios from "@query/useCustomAxios.mjs";
import { useQuery } from "@tanstack/react-query";

const mostCake = "인기 케이크"

function Main() {
  const axios = useCustomAxios();

  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: () => axios.get('/products'),
    select: (response) => response.data.item,
    suspense: true,
  });

  // console.log(data);
  
  const bestProducts = data.filter(item => item.extra.isBest);
  // console.log('bestProducts', bestProducts);

  const newProducts = data.filter(item => item.extra.isNew);
  // console.log('newProducts', newProducts);

  useEffect(()=> {
    data;
  },[])

  return (
    <>
      <StyledMain>
        <h1 className="title">당신만의<br/>케이크를<br/>찾아보세요</h1>
      </StyledMain>
      <div>
        { bestProducts && 
          <MainSection location={location} data={bestProducts} sectionName={mostCake} />
        }
        { newProducts && 
          <MainSection location={location} data={newProducts} sectionName={mostCake} />
        }
        <Button>더 알아보기</Button>
      </div>
    </>

  )
}

export default Main;
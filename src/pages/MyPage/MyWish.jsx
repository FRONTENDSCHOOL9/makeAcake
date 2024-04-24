import noneRequest from "../../assets/images/noneRequest2.png";

import { useState, useEffect } from "react";
import fakeData from "../../fakeData.js"

import Card from "@components/Card/Card";
import {StyledContainer} from "@styles/LayoutStyled";
import useCustomAxios from "@query/useCustomAxios.mjs";
import { useQuery } from "@tanstack/react-query";

function MyWish () {

  const axios = useCustomAxios();
  /* cakes: Buyer가 찜목록에 넣은 상품 데이터 */
  const [ data, setData ] = useState();

  const fetchList = async () => {
    const res = await axios.get('/bookmarks/product');
    console.log(res.data.item);
    const bookmarks = res.data.item;
    setData(bookmarks);
  }

  const bookmarks = data?.map((item) => <Card key={item._id} item={item} />)


  useEffect(() => {
    fetchList();
  }, []);

  return (
    <StyledContainer>
      {/* {cakes.length === 0 ? (
          <img src={noneRequest} alt="None Request" />
          ) : cakes.map(cake => (
              <Card cake={cake} key={cake.id}/>
          )
        )
      } */}
      {bookmarks}
    </StyledContainer>
   
  )
}

export default MyWish;
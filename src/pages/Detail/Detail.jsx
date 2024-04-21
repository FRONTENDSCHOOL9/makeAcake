import { useEffect, useRef, useState } from "react";
import likeDisabled from "@assets/images/like_disabled.svg"
import { DetailContainer, StyledDetail } from "@pages/Detail/styles/DetailStyles";
import parse from 'html-react-parser';

import { useNavigate, useParams } from "react-router";
import useCustomAxios from "@query/useCustomAxios.mjs";
import { useQuery } from "@tanstack/react-query";

function Detail() {
  const axios = useCustomAxios();
  const { productId } = useParams();
  const navigate = useNavigate();
  const [ like, setLike ] = useState(0);

  const handleClick = () => {
    navigate(`/products/1/reservation`);
  }

  let firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  const { data } = useQuery({
    queryKey: ['products', productId],
    queryFn: () => 
      axios.get(`/products/${productId}`, {
        params: { incrementView: firstRender.current },
      }),
      select: (response) => response.data,
      suspense: true,
  })
  
  const item = data?.item;
  console.log('item', item);

  return (
    <DetailContainer>
      <img src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.mainImage?.path}`} alt={`${item.name} 이미지`}/>
      <StyledDetail>
        <h3>{ item?.name }</h3>
        <div>
          {/* <dl>
            <dt>영 업 시 간</dt>
            <dd>{ cakeInfo.workingday?.start }시 ~ { cakeInfo.workingday?.end }시</dd>
          </dl> */}
          <dl>
            <dt>위 치</dt>
            <dd>{ item.seller.address }</dd>
          </dl>
          <dl>
            <dt>S N S</dt>
            <dd>{ item.seller.email }</dd>
          </dl>
        </div>        
        { parse(item.content) }
        <div>
          <button type="button" onClick={ ()=> {setLike(like + 1)} }><img src={likeDisabled} alt="찜 추가"/></button>
          <button onClick={handleClick}>예약하기</button> 
        </div>
      </StyledDetail>
    </DetailContainer>
  )
}

export default Detail;
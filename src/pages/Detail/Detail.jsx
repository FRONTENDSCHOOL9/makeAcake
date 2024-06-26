import { useEffect, useRef, useState } from "react";
import { DetailContainer, StyledDetail } from "@pages/Detail/styles/DetailStyles";
import parse from 'html-react-parser';
import likeDisabled from "@assets/images/like_disabled.svg"

import { useNavigate, useParams } from "react-router";
import useCustomAxios from "@query/useCustomAxios.mjs";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { memberState } from "@recoil/atoms";
import { bookmarkState } from "@recoil/atoms";

function Detail() {
  const axios = useCustomAxios();
  const { productId } = useParams();
  const navigate = useNavigate();
  const [ clicked, setClicked ] = useState(false);
  const [ like, setLike ] = useState(0)
  
  const user = useRecoilValue(memberState);
  const [ bookmark, setBookmark ] = useRecoilState(bookmarkState); 

  let firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, [])

  const { data } = useQuery({
    queryKey: ['products', productId],
    queryFn: () => 
      axios.get(`/products/${productId}`, {
        params: { incrementView: firstRender.current },
      }),
      select: (response) => response.data,
      suspense: false,
  })
  
  const item = data?.item;
  console.log('item', item);

  console.log(user);

  const handleClick = () => {
    if (!user) {
      const gotoLogin = confirm(
        '로그인 후 이용 가능합니다. \n 로그인 하시겠어요?'
      );
      gotoLogin && navigate('/login');
    } else {
      navigate(`/products/${productId}/reservation`);
    }
  }

  const handleLike = () => {
    if (!user) {
      const gotoLogin = confirm(
        '로그인 후 이용 가능합니다. \n 로그인 하시겠어요?'
      );
      gotoLogin && navigate('/login');
    } else {
      console.log('찜 추가');
      setBookmark(clicked ? [...bookmark, item.id] : bookmark.filter(id => id !== item.id));
      setClicked(!clicked);
      setLike(clicked ? like !== 0 && like - 1 : like + 1);
    }
  }

  return (
    <>
    {data &&
      <DetailContainer>
      <img src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.mainImages[0].name}`} alt={`${item.name} 이미지`}/>
      <StyledDetail>
        <h3>{ item?.name }</h3>
        <div>
          {/* <dl>
            <dt>영 업 시 간</dt>
            <dd>{ cakeInfo.workingday?.start }시 ~ { cakeInfo.workingday?.end }시</dd>
          </dl> */}
          <dl>
            <dt>위 치</dt><div/>
            <dd>{ item.seller.address }</dd>
          </dl>
          <dl>
            <dt>S N S</dt><div/>
            <dd>{ item.seller.email }</dd>
          </dl>
        </div>        
        { item.content && parse(item.content) }
        <div>
          <button type="button" onClick={handleLike}><img src={likeDisabled} alt="찜 추가"/></button>
          <button onClick={handleClick}>예약하기</button> 
        </div>
      </StyledDetail>
    </DetailContainer>
    }
    </>
  )
}

export default Detail;
import PropTypes from "prop-types"

import {StyledCard} from "@components/Card/styles/CardStyles.js";
import LikeButton from "@components/Buttons/LikeButton";

import {LocationAtom} from "@recoil/atoms.js"
import {useRecoilValue} from "recoil";

import { useNavigate } from "react-router";

import {isReview} from "@utils/cardLocation.js"

export default function Card({item}) {
  console.log(item);

  const navigate = useNavigate();
  const location = useRecoilValue(LocationAtom);



  //placeholder 이미지 URL
  const placeholderImageUrl = 'https://via.placeholder.com/130';

  const handleClick = () => {
    if(!isReview(location)) {
      navigate(`/products/${item._id}`)
    }
  }

  /* location에 따른 핸들링 이벤트 변화 */

  return (
    <StyledCard location = {location} onClick={handleClick}>
      { 
        location === "/" && (
          <img src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item.mainImages[0]}`} alt={item.name}/> 
      )}

      {
        (location ==="/products") && (
          <>
             <div className="imgBox">
              <img src={placeholderImageUrl} alt={item.name} />
              <LikeButton location = "wish" />
            </div>
            <div className="descBox">
              <h3 className="cardTitle">{item.name}</h3>
              <p className="price">₩{item.price}</p>
              <p className="address">{item.address}</p>
            </div>
          </>
      )}
      
      {
        (location === "/mypage/reserve") && (
          <>
            <div className="imgBox">
              <img src={placeholderImageUrl} alt={item.name} />
            </div>
            <div className="descBox">
                <h3 className="cardTitle">{item.name}</h3>
                <p className="price">₩{item.price}</p>
                <p className="pickDate">픽업 일시: {item.count}</p>
                <p className="address">픽업 장소: {item.address}</p>
            </div>
          </>
      )}

      {
        (location === "/mypage/wish") && (
          <>
            <div className="imgBox">
              <img src={placeholderImageUrl} alt={item.name} />
              <LikeButton location = "wish" />
            </div>
            <div className="descBox">
                <h3 className="cardTitle">{item.name}</h3>
                <p className="price">₩{item.price}</p>
                <p className="pickDate">픽업 일시: {item.count}</p>
                <p className="address">픽업 장소: {item.address}</p>
            </div>
          </>
      )}

      {
        location === "/mypage/review" && (
          <>
             <div className="imgBox">
              <img src={placeholderImageUrl} alt={item.name} />
            </div>
            <div className="descBox">
                <h3 className="cardTitle">{item.name}</h3>
                <p className="price">₩{item.price}</p>
                <p className="pickDate">주문 건수: {item.count}</p>
                <p className="address">등록 일자: {item.enrollDate}</p>
            </div>
          </>
        )
      }
    </StyledCard>
  )
}

Card.propTypes = {
  item: PropTypes.object
}
import PropTypes from "prop-types"

import {StyledCard} from "@components/Card/styles/CardStyles.js";
import LikeButton from "@components/Buttons/LikeButton";

import {LocationAtom} from "@recoil/atoms.js"
import { useRecoilValue } from "recoil";

import { useNavigate } from "react-router";

export default function Card(data) {
  const navigate = useNavigate();

  const location = useRecoilValue(LocationAtom);

  const {cake, onSelect, onClick} = data;

  //placeholder 이미지 URL
  const placeholderImageUrl = 'https://via.placeholder.com/130';

  const handleClick = () => {
    navigate(`/products/${cake.id}`)
  }

  return (
    <StyledCard location = {location} onClick={handleClick}>
      { 
        location === "/" && (
          <img src={placeholderImageUrl} alt={cake.name}/> 
      )}

      {
        (location ==="/products") && (
          <>
             <div className="imgBox">
              <img src={placeholderImageUrl} alt={cake.name} />
              <LikeButton location = "wish" onClick={onSelect} />
            </div>
            <div className="descBox">
              <h3 className="cardTitle">{cake.name}</h3>
              <p className="price">₩{cake.price}</p>
              <p className="address">{cake.address}</p>
            </div>
          </>
      )}
      

      {/* {
        location === "/mypage" && (
          <>
            <div className="imgBox">
              <img src={placeholderImageUrl} alt={cake.name} />
            </div>
            <div className="descBox">
                <h3 className="cardTitle">{cake.name}</h3>
                <p className="price">₩{cake.price}</p>
                <p className="pickDate">픽업 일시: {cake.count}</p>
                <p className="address">픽업 장소: {cake.address}</p>
            </div>
          </>
      )}
 */}

      {/* {
        location === "review" && (
          <>
             <div className="imgBox">
              <img src={placeholderImageUrl} alt={cake.name} />
            </div>
            <div className="descBox">
                <h3 className="cardTitle">{cake.name}</h3>
                <p className="price">₩{cake.price}</p>
                <p className="pickDate">주문 건수: {cake.count}</p>
                <p className="address">등록 일자: {cake.enrollDate}</p>
            </div>
          </>
        )
      } */}
    </StyledCard>
  )
}

Card.propTypes = {
  cake: PropTypes.object.isRequired,
}
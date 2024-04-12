import PropTypes from "prop-types"

import {StyledCard, StyledCardTitle, StyledCardInfo} from "@components/Card/styles/CardStyles.js";

export default function Card({cake, locadtion}) {
  //placeholder 이미지 URL
  const placeholderImageUrl = 'https://via.placeholder.com/130';

  return (
    <StyledCard>
      <img src={placeholderImageUrl} alt={cake.name}/>
      <StyledCardTitle>{cake.name}</StyledCardTitle>
      <StyledCardInfo>₩{cake.price}</StyledCardInfo>
      <StyledCardInfo>{cake.address}</StyledCardInfo>
    </StyledCard>
  )
}

Card.propTypes = {
  cake: PropTypes.object.isRequired,
}
import heartFill from "@assets/images/heart_selected.svg"
import heartEmpty from "@assets/images/heart.svg"
import {useState} from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

const LikedButton = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  padding: 0;
`

function LikeButton({location}) {
  const initialLikedState = location === "wish";
  const [liked, setLiked] = useState(initialLikedState);
  const [likesCount, setLikesCount] = useState(0);

  const handleLikeClick = () => {
    if(!liked) {
      setLikesCount(likesCount + 1);
      setLiked(true);
    } else {
      setLikesCount(likesCount - 1);
      setLiked(false);
    }
  };

  return (
    <>
      <LikedButton className="likedBtn" onClick = {handleLikeClick}>
        {liked ? <img src={heartFill} alt="unLiked"/> : <img src={heartEmpty} alt="Liked"/>}
      </LikedButton>
    </>
  )
}

LikeButton.propTypes = {
  location: PropTypes.string.isRequired
}

export default LikeButton;
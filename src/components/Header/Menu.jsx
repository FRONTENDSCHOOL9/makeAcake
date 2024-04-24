import {StyledMenu, StyledMenuContent} from "./styles/HeaderStyles.js"
import { Link } from "react-router-dom";

import { useHandleMenu } from "@hooks/useHandleMenu";
import { useHandleSearch } from "@hooks/useHandleSearch";
import { useRecoilValue } from "recoil";
import { memberState } from "@recoil/atoms.js";


export default function Menu() {
  const user = useRecoilValue(memberState);
  const {closeMenu} = useHandleMenu();
  const {openSearch} = useHandleSearch();
  

  return (
    <StyledMenu>
      <StyledMenuContent to="/login" onClick={closeMenu}>LOGIN</StyledMenuContent>
      <StyledMenuContent onClick={openSearch}>SEARCH</StyledMenuContent>
      <StyledMenuContent to="/products" onClick={closeMenu}>BROWSE</StyledMenuContent>
      { user ? 
        <>
          <StyledMenuContent to="/mypage/wish" onClick={closeMenu}>WISHLIST</StyledMenuContent>
          <StyledMenuContent to="/mypage" onClick={closeMenu}>MY PAGE</StyledMenuContent>
        </>
        : <></>  
      }

    </StyledMenu>
  )
}
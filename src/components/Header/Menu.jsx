import {StyledMenu, StyledMenuContent} from "./styles/HeaderStyles.js"
import { Link } from "react-router-dom";

import { useHandleMenu } from "@hooks/useHandleMenu";
import { useHandleSearch } from "@hooks/useHandleSearch";


export default function Menu() {
  const {closeMenu} = useHandleMenu();
  const {openSearch} = useHandleSearch();
  

  return (
    <StyledMenu>
      <StyledMenuContent onClick={openSearch}>SEARCH</StyledMenuContent>
      <Link to="/products"><StyledMenuContent onClick={closeMenu}>BROWSE</StyledMenuContent></Link>
      <Link to="/"><StyledMenuContent onClick={closeMenu}>WISHLIST</StyledMenuContent></Link>
      <Link to="/mypage"><StyledMenuContent onClick={closeMenu}>MY PAGE</StyledMenuContent></Link>
    </StyledMenu>
  )
}
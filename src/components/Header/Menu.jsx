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
      <StyledMenuContent  StyledMenuContent as={Link} to="/products" onClick={closeMenu}>BROWSE</StyledMenuContent>
      <StyledMenuContent as={Link} to="/" onClick={closeMenu}>WISHLIST</StyledMenuContent>
      <StyledMenuContent as={Link} to="/mypage" onClick={closeMenu}>MY PAGE</StyledMenuContent>
    </StyledMenu>
  )
}
import PropTypes from "prop-types";

import {StyledMenu, StyledMenuContent} from "./styles/HeaderStyles.js"
import { Link } from "react-router-dom";

export default function Menu({onSearch, onMenu}) {

  return (
    <StyledMenu>
      <StyledMenuContent onClick={onSearch}>SEARCH</StyledMenuContent>
      <Link to="/products"><StyledMenuContent onClick={onMenu}>BROWSE</StyledMenuContent></Link>
      <Link to="/"><StyledMenuContent onClick={onMenu}>WISHLIST</StyledMenuContent></Link>
      <Link to="/mypage"><StyledMenuContent onClick={onMenu}>MY PAGE</StyledMenuContent></Link>
    </StyledMenu>
  )
}

Menu.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onMenu: PropTypes.func.isRequired
}
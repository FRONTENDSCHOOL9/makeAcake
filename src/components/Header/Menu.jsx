import PropTypes from "prop-types";

import {StyledMenu, StyledMenuContent} from "./styles/HeaderStyles.js"

export default function Menu({onSelect}) {

  return (
    <StyledMenu>
      <StyledMenuContent onClick={onSelect}>SEARCH</StyledMenuContent>
      <StyledMenuContent>BROWSE</StyledMenuContent>
      <StyledMenuContent>WISHLIST</StyledMenuContent>
      <StyledMenuContent>MY PAGE</StyledMenuContent>
    </StyledMenu>
  )
}

Menu.propTypes = {
  onSelect: PropTypes.func.isRequired,
}
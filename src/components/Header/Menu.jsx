import PropTypes from "prop-types";

import {StyledMenu, StyledMenuContent} from "./styles/HeaderStyles.js"

export default function Menu({open}) {
  return (
    <StyledMenu isOpen={open}>
      <StyledMenuContent>SEARCH</StyledMenuContent>
      <StyledMenuContent>BROWSE</StyledMenuContent>
      <StyledMenuContent>WISHLIST</StyledMenuContent>
      <StyledMenuContent>MY PAGE</StyledMenuContent>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
}
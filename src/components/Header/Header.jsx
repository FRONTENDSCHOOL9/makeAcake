import PropTypes from "prop-types";
import {StyledHeader, StyledNav, StyledHome} from "./styles/HeaderStyles.js";

import {Link} from "react-router-dom";

export default function Header({onMenu, onMenuClose}) {
    return (
      <>
        <StyledHeader>
          <StyledNav onClick={onMenu} />
          <StyledHome as={Link} to="/" onClick={onMenuClose} />
        </StyledHeader>
      </>
    );
};

Header.propTypes = {
  onMenu: PropTypes.func.isRequired,
  onMenuClose: PropTypes.func.isRequired
}
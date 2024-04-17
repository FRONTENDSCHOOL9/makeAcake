import PropTypes from "prop-types";
import {StyledHeader, StyledNav, StyledHome} from "./styles/HeaderStyles.js";

import {Link} from "react-router-dom";
import { useHandleMenu } from "@hooks/useHandleMenu";


export default function Header() {
  const {toggleMenu, closeMenu} = useHandleMenu();

    return (
      <>
        <StyledHeader>
          <StyledNav onClick={toggleMenu} />
          <StyledHome as={Link} to="/" onClick={closeMenu} />
        </StyledHeader>
      </>
    );
};

Header.propTypes = {
  onMenu: PropTypes.func.isRequired,
  onMenuClose: PropTypes.func.isRequired
}
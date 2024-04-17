import PropTypes from "prop-types";
import {StyledHeader, StyledNav, StyledHome} from "./styles/HeaderStyles.js";

export default function Header({onMenu}) {
    return (
      <>
        <StyledHeader>
          <StyledNav onClick={onMenu} />
          <StyledHome />
        </StyledHeader>
      </>
    );
};

Header.propTypes = {
  onMenu: PropTypes.func.isRequired,
}
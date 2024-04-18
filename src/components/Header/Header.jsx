import {StyledHeader, StyledNav, StyledHome, StyledLogin} from "./styles/HeaderStyles.js";

import {Link} from "react-router-dom";
import { useHandleMenu } from "@hooks/useHandleMenu";


export default function Header() {
  const {toggleMenu, closeMenu} = useHandleMenu();

    return (
      <>
        <StyledHeader>
          <StyledNav onClick={toggleMenu} />
          <StyledHome as={Link} to="/" onClick={closeMenu} />
          <StyledLogin as={Link} to="/"/>
        </StyledHeader>
      </>
    );
};
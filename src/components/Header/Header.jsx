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
          {/* 회원구분은 추후 개발 */}
          <StyledLogin as={Link} to="/login"/>
        </StyledHeader>
      </>
    );
};
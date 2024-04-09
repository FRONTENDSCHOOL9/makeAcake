import {useState} from "react";

import Menu from "./Menu.jsx";
import {StyledHeader, StyledNav, StyledHome} from "./styles/HeaderStyles.js";

export default function Header() {
  const [open, setOpen] = useState(false);

  function handleOpenMenu() {
    setOpen(prev => !prev);
  } 

    return (
        <StyledHeader>
          <StyledNav onClick={handleOpenMenu} />
          {open && <Menu />}
          <StyledHome />
        </StyledHeader>
    );
};
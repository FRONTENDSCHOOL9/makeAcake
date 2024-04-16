import Menu from "./Menu.jsx";
import {StyledHeader, StyledNav, StyledHome} from "./styles/HeaderStyles.js";

export default function Header({onSearch, onMenu, searchOpen, menuOpen}) {
    return (
        <StyledHeader>
          <StyledNav onClick={onMenu} />
          {!searchOpen && menuOpen && <Menu onSelect={onSearch} />}
          <StyledHome />
        </StyledHeader>
    );
};
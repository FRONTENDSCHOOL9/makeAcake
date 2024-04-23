import {StyledHeader, StyledNav, StyledHome, StyledLogin} from "./styles/HeaderStyles.js";

import {Link, useNavigate} from "react-router-dom";
import { useHandleMenu } from "@hooks/useHandleMenu";
import { memberState } from "@recoil/atoms.js";
import { useRecoilState } from "recoil";


export default function Header() {
  const {toggleMenu, closeMenu} = useHandleMenu();
  const navigate = useNavigate();
  const [ user, setUser ] = useRecoilState(memberState);

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  }

    return (
      <>
        <StyledHeader>
          <StyledNav onClick={toggleMenu} />
          <StyledHome as={Link} to="/" onClick={closeMenu} />
          {/* 회원구분은 추후 개발 */}
          {user ? (
            <div>
              {user.name}님,
              <button onClick={handleLogout}>로그아웃</button>
            </div>
          )
            : <button onClick={() => navigate('/login')}>로그인</button>
          }
          <StyledLogin as={Link} to="/login"/>
        </StyledHeader>
      </>
    );
};
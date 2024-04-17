import { useRecoilState } from "recoil";
import { MenuHandleAtom } from "@recoil/atoms.js";

export function useHandleMenu() {
  const [menuHandle, setMenuHandle] = useRecoilState(MenuHandleAtom);

  const toggleMenu = () => {
    setMenuHandle(prevMenuToggle => !prevMenuToggle);
  };

  const closeMenu = () => {
    setMenuHandle(false);
  }

  return {menuHandle, toggleMenu, closeMenu};
}
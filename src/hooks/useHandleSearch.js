import { useRecoilState } from "recoil";
import { SearchHandleAtom, MenuHandleAtom } from "@recoil/atoms.js";

export function useHandleSearch() {
  const [searchHandle, setSearchHandle] = useRecoilState(SearchHandleAtom);
  const [menuHandle, setMenuHandle] = useRecoilState(MenuHandleAtom);


  const openSearch = () => {
    setSearchHandle(true);
  }

  const closeSearch = () => {
    setSearchHandle(false);
    setMenuHandle(false)
  }

  return {searchHandle, openSearch, closeSearch};
}
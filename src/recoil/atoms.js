import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export const MenuHandleAtom = atom({
  key: "MenuHandleAtom",
  default: false
});

export const SearchHandleAtom = atom({
  key: "SearchHandleAtom",
  default: false
});

// LocationSetter 컴포넌트로 페이지 이동시마다 자동으로 LocationAtom 갱신하게 만들어둠
// const location = useRecoilValue(LocationAtom) 이렇게 값을 불러서 사용하시면 됩니다.
export const LocationAtom = atom({
  key: "LocationAtom",
  default: "/"
});

const { persistAtom } = recoilPersist({
  key: 'saveUser',
  storage: sessionStorage,
});

export const memberState = atom({
  key: "userState",
  default: null,
  effects: [persistAtom]
})
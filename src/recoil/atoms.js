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
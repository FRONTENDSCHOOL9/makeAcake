import { atom } from "recoil";

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
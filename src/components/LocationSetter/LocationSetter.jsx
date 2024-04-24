import { useEffect } from "react";
import {useLocation} from "react-router-dom";
import {useSetRecoilState} from "recoil";
import {LocationAtom} from "@recoil/atoms.js";

export default function LocationSetter() {
  const setCurrentLocation = useSetRecoilState(LocationAtom);
  const location = useLocation();

  useEffect(() => {
      setCurrentLocation(location.pathname);
  }, [location, setCurrentLocation]);
}
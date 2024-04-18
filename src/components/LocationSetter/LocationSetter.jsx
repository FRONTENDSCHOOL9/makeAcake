import { useEffect } from "react";
import {useLocation} from "react-router-dom";
import {useRecoilState} from "recoil";
import {LocationAtom} from "@recoil/atoms.js";

export default function LocationSetter() {
  const [currentLocation, setCurrentLocation] = useRecoilState(LocationAtom);
  const location = useLocation();

  useEffect(() => {
      setCurrentLocation(location.pathname);
  }, [location, setCurrentLocation]);
}
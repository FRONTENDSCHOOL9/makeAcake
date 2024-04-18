import {useParams} from "react-router-dom";
import fakeData from "../../fakeData.js"

export default function FilterCakes() {
  const {type, taste} = useParams();
  const filteredCakes = fakeData.filter(cake => {
    return cake.type === type && cake.taste === taste;
  });

  return(
    
  )
}
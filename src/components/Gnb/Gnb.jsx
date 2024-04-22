import PropTypes from "prop-types";
import {StyledHeading, StyledGnb, StyledGnbItem} from "@components/Gnb/styles/GnbStyled.js"

import {LocationAtom} from "@recoil/atoms.js"
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router";


export default function Gnb({children, categories, selectedCategory, onSelect}) {
    const navigate = useNavigate();
    const location = useRecoilValue(LocationAtom);

    const isMyPage = location.includes("mypage");

    const handleCategoryClick = (type) => {
      onSelect(type);
      if(isMyPage) {
        navigate(`/mypage/${type}`)
      } 
    }

    return (
      <>
        <StyledHeading>{children}</StyledHeading>
        <StyledGnb>
            {categories.map(category => {
                return (
                  <StyledGnbItem isSelected = {category.type === selectedCategory} key={category.type} onClick={() => handleCategoryClick(category.type)}>
                      {category.name}
                  </StyledGnbItem>
                )
            })}
        </StyledGnb>
      </>
    )
}

Gnb.propTypes = {
  children: PropTypes.node.isRequired,
  categories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}
import PropTypes from "prop-types";
import {StyledHeading, StyledGnb, StyledGnbItem} from "@components/Gnb/styles/GnbStyled.js"

export default function Gnb({children, categories, selectedCategory, onSelect}) {
  /* 보이는 page에 따라서 return값 다르게하기
    browse는 클릭시 필터링만 하면 될 것이고
    mypage는 클릭시 새로운 컴포넌트를 연결하면 될 것 같다
  */
    return (
      <>
        <StyledHeading>{children}</StyledHeading>
        <StyledGnb>
            {categories.map(category => {
                return (
                  <StyledGnbItem isSelected = {category.type === selectedCategory} key={category.type} onClick={() => onSelect(category.type)}>
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
import PropTypes from "prop-types";
import {useState} from "react";
import {StyledHeading, StyledGnb, StyledGnbItem} from "@components/Gnb/styles/GnbStyled.js"

export default function Gnb({children, categories, selectedCategory, onSelect}) {
  const [isSelected, setIsSelected] = useState(false);
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
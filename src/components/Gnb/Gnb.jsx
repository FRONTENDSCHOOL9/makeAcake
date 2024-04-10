import PropTypes from "prop-types";
import {StyledHeading, StyledGnb, StyledGnbItem} from "@components/Gnb/styles/GnbStyled.js"

export default function Gnb({children, categories, selectedCategory, onSelect}) {
    return (
      <>
        <StyledHeading>{children}</StyledHeading>
        <StyledGnb>
            {categories.map(category => {
                return (
                    <StyledGnbItem key={category.type} onClick={() => onSelect(category.type)} isSelected={category.type === selectedCategory}>
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
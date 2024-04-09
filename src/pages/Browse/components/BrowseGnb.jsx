import PropTypes from "prop-types";
import {StyledGnb, StyledGnbItem} from "@pages/Browse/styles/BrowseStyles.js"

export default function BrowseGnb({categories, selectedCategory, onSelect}) {
    return (
        <StyledGnb>
            {categories.map(category => {
                return (
                    <StyledGnbItem key={category.type} onClick={() => onSelect(category.type)} isSelected={category.type === selectedCategory}>
                        {category.name}
                    </StyledGnbItem>
                )
            })}
        </StyledGnb>
    )
}

BrowseGnb.propTypes = {
  categories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}
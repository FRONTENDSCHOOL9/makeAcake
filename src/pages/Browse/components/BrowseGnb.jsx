import {StyledGnb, StyledGnbItem} from "@pages/Browse/styles/BrowseStyles.js"

export default function BrowseGnb({categories, selectedCategory, onSelect}) {
    return (
        <StyledGnb>
            {categories.map(category => {
                return (
                    <StyledGnbItem key={category} onClick={() => onSelect(category)} isSelected={category === selectedCategory}>
                        {category}
                    </StyledGnbItem>
                )
            })}
        </StyledGnb>
    )
}
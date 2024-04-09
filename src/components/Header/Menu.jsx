import {StyledMenu, StyledMenuContent} from "./styles/HeaderStyles.js"

export default function Menu() {
  return (
    <StyledMenu>
      <StyledMenuContent>SEARCH</StyledMenuContent>
      <StyledMenuContent>BROWSE</StyledMenuContent>
      <StyledMenuContent>WISHLIST</StyledMenuContent>
      <StyledMenuContent>MY PAGE</StyledMenuContent>
    </StyledMenu>
  )
}
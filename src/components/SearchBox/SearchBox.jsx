import Button from "@components/Button/Button.jsx";
import { Input, SearchBoxDiv, SearchDiv } from "@components/SearchBox/style/SearchBoxStyles";
import searchImage from "@assets/images/search.svg"

function SearchBox() {
  return (
    <SearchBoxDiv>
      <label htmlFor="site-search"></label>
      <SearchDiv>
        <Input type="search" id="site-search" placeholder="search cake..."/>
        <Button>
          <img src={searchImage} alt="검색" />
        </Button>
      </SearchDiv>
    </SearchBoxDiv>
  )
}

export default SearchBox;
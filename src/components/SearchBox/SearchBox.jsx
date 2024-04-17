import {useRef} from "react";
import {createPortal} from "react-dom";

import { Input, SearchBoxDiv, SearchDiv } from "@components/SearchBox/style/SearchBoxStyles";
import searchImage from "@assets/images/search.svg"
import { useEffect } from "react";

import { useHandleSearch } from "@hooks/useHandleSearch";

function SearchBox() {
  const {closeSearch} = useHandleSearch();
  
  const modalRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if(modalRef.current && !modalRef.current.contains(event.target)) {
        closeSearch();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }

  }, [closeSearch]);

  return createPortal(
    <SearchBoxDiv ref={modalRef}>
      <label htmlFor="site-search"></label>
      <SearchDiv>
        <Input type="search" id="site-search" placeholder="search cake..."/>
        <button type="button">
          <img src={searchImage} alt="검색" />
        </button>
      </SearchDiv>
    </SearchBoxDiv>,
    document.getElementById("search-modal")
  );
}

export default SearchBox;
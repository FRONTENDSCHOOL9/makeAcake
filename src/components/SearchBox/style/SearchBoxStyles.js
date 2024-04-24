import styled from "styled-components";

export const SearchBoxDiv = styled.div.attrs({
  className: "search-modal"
})`
  width: 80%;
  margin: 0 auto;
  display: flex;
  padding: 15px 0;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--primary-white-color);
  z-index: 10;
  border: 1px solid var(--primary-black-color);
`

export const SearchDiv = styled.div`
  border-bottom: 1px solid var(--primary-black-color);
  display: flex;
  justify-content: center;
  width: 80%;
  padding: 5px 0;
`

export const Input = styled.input`
  border: 0;
  width: 100%;
  height: 120%;

  &::-webkit-search-cancel-button {
    display: none;
  }

  &:focus {
    outline: none;
  }
`
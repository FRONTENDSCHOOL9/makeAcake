import styled from "styled-components";
import IconDefault from '@assets/images/check_default.svg';
import IconActive from '@assets/images/check_active.svg';

export const CheckboxWrapper = styled.div `
  display: flex;
  padding: 0.1rem 1rem;
  font-size: var(--font-size-medium);
  gap: 0.5rem;
`

// style 조정이 되지 않아 숨김 처리
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
	height: 15px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 15px;
  opacity: 0;
`

export const StyledCheckbox = styled.div`
  flex-shrink: 0;
	background-image: url(${props => props.checked === true ? IconActive : IconDefault});
  background-size: cover;
  width: 1rem;
  height: 1rem;

`



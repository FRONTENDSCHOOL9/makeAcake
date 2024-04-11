import PropTypes from 'prop-types';
import styled from 'styled-components';

Button.propTypes = {
  children: PropTypes.string.isRequired
}

const StyledButtonWrap=styled.div`

display: flex;
justify-content:center;

`;

const StyledButton = styled.button`
  // common
  color: #fff;

  // size
  width: 200px;
  height: 44px;

  // background
  background-color: #000;
  &:hover {
    background-color: #E18585;
  }
  &:active {
    background-color: #000;
  }

  font-size: 16px;

  border: none;

  border-radius: 10px;

  font-weight: 600;

`

function Button({children}) {
  return (
    <StyledButtonWrap>
      <StyledButton>{children}</StyledButton>
    </StyledButtonWrap>
  )
}

export default Button;
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {Link} from "react-router-dom";


Button.propTypes = {
  children: PropTypes.node.isRequired,
}

const StyledButtonWrap=styled.div`
  display: flex;
  justify-content:center;
  margin-top: 10px;
  text-align: center;
`;


const StyledButton = styled.button`
  display: block;
  // common
  color: #fff;

  // size
  padding: 10px 60px;

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

export default function Button({children}) {
  const location = useLocation();
  return (
    <StyledButtonWrap>
      {
        location.pathname === "/" ? 
        <StyledButton as={Link} to="/products">{children}</StyledButton> : 
        <StyledButton>{children}</StyledButton>
      }
    </StyledButtonWrap>
  )
}
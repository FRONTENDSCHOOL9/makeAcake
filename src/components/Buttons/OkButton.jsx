import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {Link} from "react-router-dom";


Button.propTypes = {
  children: PropTypes.node.isRequired
}

const StyledButtonWrap=styled.div`
  display: flex;
  justify-content:center;
  text-align: center;
`;


const StyledButton = styled.button`
  display: block;
  color: #000;
  padding: 5px 10px;
  background-color: #FFF;
  font-size: 0.9rem;
  font-weight: 600;
  border: solid 1px #000;
  border-radius: 10px;
  border-color: #000;
  text-align: center;
  // margin-top: 50px;
`

export default function Button({children}) {
  const location = useLocation();
  return (
    <StyledButtonWrap>
        <StyledButton>{children}</StyledButton>
    </StyledButtonWrap>
  )
}
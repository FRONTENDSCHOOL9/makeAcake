import { CheckboxWrapper, HiddenCheckbox, StyledCheckbox } from "@components/Checkbox/styles/StyledCheckbox"
import PropTypes from 'prop-types';
import { useState } from "react";

Checkbox.propTypes = {
  id: PropTypes.string,
  children: PropTypes.string,
}

function Checkbox({id, children}) {
  const [ isChecked, setIsChecked ] = useState(false);
  const handleCheckboxChange = e => {
    setIsChecked(e.target.checked);
  }
  
  return (
    <CheckboxWrapper>
      <HiddenCheckbox id={id} checked={isChecked} onChange={handleCheckboxChange}/>
      <StyledCheckbox checked={isChecked} />
      <label htmlFor={id}>
        <p>{children}</p>
      </label>
    </CheckboxWrapper>
  )
}

export default Checkbox
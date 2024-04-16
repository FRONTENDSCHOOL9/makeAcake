import { CheckboxWrapper, HiddenCheckbox, StyledCheckbox } from "@components/Checkbox/styles/StyledCheckbox"
import PropTypes from 'prop-types';

Checkbox.propTypes = {
  id: PropTypes.string,
  children: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

function Checkbox({id, children, checked, onChange, ...props}) {

  
  return (
    <CheckboxWrapper>
      <HiddenCheckbox id={id} checked={checked} onChange={({ target: {checked} }) => onChange(checked)}/>
      <StyledCheckbox checked={checked} />
      <label htmlFor={id}>
        <p>{children}</p>
      </label>
    </CheckboxWrapper>
  )
}

export default Checkbox
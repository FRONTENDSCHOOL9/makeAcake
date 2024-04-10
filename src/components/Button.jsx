import PropTypes from 'prop-types';

Button.propTypes = {
  children: PropTypes.string.isRequired
}

function Button({children}) {
  return (
    <button type="button">{children}</button>
  )
}

export default Button;
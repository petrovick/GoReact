import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => (
  <button 
    onClick={props.onClick}
    style={{backgroundColor: '#F00'}}>
      {props.children}
  </button>
)

Button.defaultProps = {
  children: 'Salvar'
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
}

export default Button

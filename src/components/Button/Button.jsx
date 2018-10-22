import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

const Button = props => {
  let className = 'ts-button'

  const { purple, cyan, active, borderless, ...otherProps} = props

  if (purple) {
    className += ' purple'
  }

  if (cyan) {
    className += ' cyan'
  }

  if (active) {
    className += ' active'
  }

  if (borderless) {
    className += ' borderless'
  }

  return (
    <button 
      className={ className } 
      type="button" { ...otherProps }
    >
      { props.children }
    </button>
  )
}

Button.propTypes = {
  active: PropTypes.bool,
  borderless: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  cyan: PropTypes.bool,
  purple: PropTypes.bool,
}

export default Button
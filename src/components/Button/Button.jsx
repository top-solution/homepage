import React from 'react'

import './Button.scss'

const Button = props => {
  let className = 'ts-button'

  if (props.purple) {
    className += ' purple'
  }

  if (props.cyan) {
    className += ' cyan'
  }

  if (props.active) {
    className += ' active'
  }

  if (props.borderless) {
    className += ' borderless'
  }

  return (
    <button 
      className={ className } 
      type="button" { ...props }
    >
      { props.children }
    </button>
  )
}

export default Button
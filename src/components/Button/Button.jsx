import React from 'react';

import './Button.scss';

const Button = (props) => {
  let className = 'ts-button';

  if (props.purple) {
    className += ' purple';
  }

  if (props.active) {
    className += ' active';
  }

  return (
    <button 
      className={ className } 
      type="button" { ...props }
    >
      { props.children }
    </button>
  );
};

export default Button;
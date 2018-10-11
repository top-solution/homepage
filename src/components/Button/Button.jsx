import React from 'react';

import './Button.scss';

const Button = (props) => {
  return (
    <button className={`ts-button ${ props.className }`} type="button" { ...props } />
  );
};

export default Button;
import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ name }) => {
  return (
    <svg viewBox="0 0 100 100" className={ `icon ${ name }` }>
      <use xlinkHref={ `#${ name }` }/>
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string,
};

export default Icon;
import React from 'react'
import PropTypes from 'prop-types'

import './Jumbotron.scss'


const Jumbotron = ({ children }) => (
  <div className="jumbotron">
    <div className="jumbotron-wrapper">
      { children }
    </div>
  </div>
)

Jumbotron.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Jumbotron
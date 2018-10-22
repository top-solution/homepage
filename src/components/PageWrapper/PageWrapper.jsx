import React from 'react'
import PropTypes from 'prop-types'

import './PageWrapper.scss'


const PageWrapper = ({ children }) => (
  <div className="page-wrapper">
    <div className="page-content">
      { children }
    </div>
  </div>
)

PageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default PageWrapper
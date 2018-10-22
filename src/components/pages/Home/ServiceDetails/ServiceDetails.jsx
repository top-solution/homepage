import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../../Icon/Icon'

import './ServiceDetails.scss'

const ServiceDetails = ( { data } ) => {
  if (!data) {
    return null
  }

  const details = data.edges.map(({ node }) => (
    <div className="service-details-item" key={ node.frontmatter.title }>
      <h3>{ node.frontmatter.title }</h3>
      <div className="item-content">
        <div className="item-icon">
          <Icon name={ node.frontmatter.icon } />
        </div>
        <div className="text" dangerouslySetInnerHTML={ { __html: node.html } } />
      </div>
    </div>

  ))

  return (
    <div className="service-details">
      { details }
    </div>
  )
}

ServiceDetails.propTypes = {
  data: PropTypes.object,
}

export default ServiceDetails
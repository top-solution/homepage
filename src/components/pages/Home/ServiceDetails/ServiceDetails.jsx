import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../../Icon/Icon'

import './ServiceDetails.scss'

const ServiceDetails = ( { details } ) => {
  if (!details) {
    return null
  }

  const detailsElements = details.map(detail => (
    <div className="service-details-item" key={ detail.title }>
      <h3>{ detail.title }</h3>
      <div className="item-content">
        <div className="item-icon">
          <Icon name={ detail.icon } />
        </div>
        <div className="text" dangerouslySetInnerHTML={ { __html: detail.html } } />
      </div>
    </div>
  ))

  return (
    <div className="service-details">
      { detailsElements }
    </div>
  )
}

ServiceDetails.propTypes = {
  data: PropTypes.array,
}

export default ServiceDetails
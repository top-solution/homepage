import React from 'react'
import PropTypes from 'prop-types'

const ServicePreview = ( { service } ) => {
  if (!service) {
    return null
  }

  return (
    <div>
      <h2>{ service.title }</h2>
      <div dangerouslySetInnerHTML={ { __html: service.html } }/>
    </div>
  )
}

ServicePreview.propTypes = {
  service: PropTypes.object,
}

export default ServicePreview
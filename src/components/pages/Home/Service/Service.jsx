import React from 'react'
import PropTypes from 'prop-types'

import HexagonCard from '../HexagonCard/HexagonCard'
import ServiceDetails from '../ServiceDetails/ServiceDetails'
import ServicePreview from '../ServicePreview/ServicePreview'


const Service = ( { accent, service, mobile } ) => {
  if (!service) {
    return null
  }

  let content = null

  if (mobile === true) {
    content = (
      <HexagonCard 
        service={ service }
        icon="web-platforms" 
        text={ 'Piattaforme\nWeb' }
        accent={ accent }
      >
      </HexagonCard>
    )
  } else { 
    content = (
      <div>
        <ServicePreview service={ service } />
        <ServiceDetails details={ service.details } />
      </div>
    )
  }

  return (
    <div itemScope itemType="http://schema.org/Service">
      { content }
    </div>
  )
}

Service.propTypes = {
  accent: PropTypes.string,
  service: PropTypes.object,
  mobile: PropTypes.bool,
}

export default Service
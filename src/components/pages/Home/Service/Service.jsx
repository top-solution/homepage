import React from 'react'
import PropTypes from 'prop-types'

import HexagonCard from '../HexagonCard/HexagonCard'
import ServiceDetails from '../ServiceDetails/ServiceDetails'
import ServicePreview from '../ServicePreview/ServicePreview'


const Service = ( { accent, data, mobile } ) => {
  if (!data) {
    return null
  }

  let content = null

  if (mobile === true) {
    content = (
      <HexagonCard 
        data={ data }
        icon="web-platforms" 
        text={ 'Piattaforme\nWeb' }
        accent={ accent }
      >
      </HexagonCard>
    )
  } else { 
    content = (
      <div>
        <ServicePreview data={ data.excerpt } />
        <ServiceDetails data={ data.details } />
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
  data: PropTypes.object,
  mobile: PropTypes.bool,
}

export default Service
import React from 'react'

import HexagonCard from '../HexagonCard/HexagonCard'
import ServiceDetails from '../ServiceDetails/ServiceDetails'
import ServicePreview from '../ServicePreview/ServicePreview'


const Service = ( {accent, data, mobile} ) => {
  if (!data) {
    return null;
  }

  let content = null;

  if (mobile === true) {
    content =  (
      <HexagonCard 
        data={data}
        // onClick={ () => onHexagonClick('PIATTAFORME_WEB', 'left') }
        // x= { hexWidthAdjusted - (hexWidthAdjusted / 2) }
        // y={ 0 }
        // width={ hexWidth } 
        // height={hexHeight} 
        icon="web-platforms" 
        text={'Piattaforme\nWeb'}
        accent={ accent }
      >
      </HexagonCard>
    )
  } else { 
    content = (
      <div>
        <ServicePreview data={data.excerpt} />
        <ServiceDetails data={data.details} />
      </div>
    )
  }

  return (
    <div itemScope itemType="http://schema.org/Service">
      { content }
    </div>
  );
};

export default Service;
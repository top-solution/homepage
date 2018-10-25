import React from 'react'
import PropTypes from 'prop-types'
import Hexagon from '../Hexagon/Hexagon'

import './HexagonChart.scss'

const handleHexagonClick = (onHexagonClick, topic, side) => {
  return (event) => {
    event.preventDefault();
    event.stopPropagation();
    onHexagonClick(topic, side)
  }
}

const HexagonChart = ({ className, highlighted, onHexagonClick }) => {
  const hexWidth = 512
  const hexHeight = (hexWidth * 2) / Math.sqrt(3) 
  const hexWidthAdjusted = hexWidth - (hexWidth / 8)
  const hexHeightAdjusted = hexHeight - (hexHeight / 3)

  return (
    <svg className={ `hexagon-chart ${ className }` } viewBox={ `0 0 ${ hexWidthAdjusted * 3.15 } ${ hexHeightAdjusted * 3.9 }` }>
      <Hexagon 
        className={ `purple ${ highlighted === 'web-platforms' ? 'highlighted' : '' }` }
        onClick={ handleHexagonClick(onHexagonClick, 'web-platforms', 'it') }
        x={ hexWidthAdjusted - (hexWidthAdjusted / 2) }
        y={ 0 }
        width={ hexWidth } 
        height={ hexHeight } 
        icon="web-platforms" 
        text={ 'Piattaforme\nWeb' }
      />
      <Hexagon 
        className={ `cyan ${ highlighted === 'expertise-audits' ? 'highlighted' : '' }` }
        onClick={ handleHexagonClick(onHexagonClick, 'expertise-audits', 'consulting') }
        x={ 2 * hexWidthAdjusted - (hexWidthAdjusted / 2) }
        y={ 0 }
        width={ hexWidth } 
        height={ hexHeight } 
        icon="expertise-audits" 
        text={ 'Audit\ncompetenze' }
      />
      <Hexagon 
        className={ `purple ${ highlighted === 'web-applications' ? 'highlighted' : '' }` }
        onClick={ handleHexagonClick(onHexagonClick, 'web-applications', 'it') }
        x={ 0 }
        y={ hexHeightAdjusted }
        width={ hexWidth } 
        height={ hexHeight } 
        icon="web-applications" 
        text={ 'Applicazioni\nweb' }
      />
      <Hexagon 
        className="orange"
        onClick={ handleHexagonClick(onHexagonClick, null) }
        x={ hexWidthAdjusted }
        y={ hexHeightAdjusted }
        width={ hexWidth } 
        height={ hexHeight } 
        centralText 
        text={ 'il tuo\nbusiness' }
      />
      <Hexagon 
        className={ `cyan ${ highlighted === 'individual-development' ? 'highlighted' : '' }` }
        onClick={ handleHexagonClick(onHexagonClick, 'individual-development', 'consulting') }
        x={ 2 * hexWidthAdjusted }
        y={ hexHeightAdjusted }
        width={ hexWidth } 
        height={ hexHeight } 
        icon="individual-development" 
        text={ 'Sviluppo\nindividuale' }
      />
      <Hexagon 
        className={ `purple ${ highlighted === 'ict-training' ? 'highlighted' : '' }` }
        onClick={ handleHexagonClick(onHexagonClick, 'ict-training', 'it') }
        x={ hexWidthAdjusted - (hexWidthAdjusted / 2) }
        y={ hexHeightAdjusted * 2 }
        width={ hexWidth } 
        height={ hexHeight } 
        icon="ict-training" 
        text={ 'Training\nICT' }
      />
      <Hexagon 
        className={ `cyan ${ highlighted === 'management-development' ? 'highlighted' : '' }` }
        onClick={ handleHexagonClick(onHexagonClick, 'management-development', 'consulting') }
        x={ 2 * hexWidthAdjusted - (hexWidthAdjusted / 2) }
        y={ hexHeightAdjusted * 2 }
        width={ hexWidth } 
        height={ hexHeight } 
        icon="management-development" 
        text={ 'Sviluppo\norganizzativo' }
      />
    </svg>
  )
}

HexagonChart.propTypes = {
  className: PropTypes.string,
  onHexagonClick: PropTypes.func,
  highlighted: PropTypes.string,
}

export default HexagonChart
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

const HexagonChart = ({ className, highlighted, onHexagonClick, services }) => {
  const hexWidth = 512
  const hexHeight = (hexWidth * 2) / Math.sqrt(3) 
  const hexWidthAdjusted = hexWidth - (hexWidth / 8)
  const hexHeightAdjusted = hexHeight - (hexHeight / 3)

  const hexagons = services.map(service => {
    let color = ''

    switch (service.type) {
      case 'ict': 
        color = 'purple';
        break;
      case 'consulting':
        color = 'cyan';
        break;
      default:
        color = 'orange';
        break;
    }

    const id = service.id;

    const y = hexHeightAdjusted * (-service.y || 0)
    let x = hexWidthAdjusted * (service.x || 0)

    if (service.y % 2 !== 0) {
      x += (hexWidthAdjusted / 2)
      
      if (service.x > 0) {
        x -=  hexWidthAdjusted
      }
    }

    return (
      <Hexagon
        key={ service.id }
        className={ `${ color } ${ highlighted === id ? 'highlighted' : '' }` }
        onClick={ handleHexagonClick(onHexagonClick, id, service.type) }
        x={ x }
        y={ y }
        width={ hexWidth } 
        height={ hexHeight } 
        icon={ service.icon }
        text={ (service.hexagonTitle || service.title).replace('\\n', '\n') }
        centralText={ service.x === 0 && service.y === 0 }
      />
    );
  });


  return (
    <svg className={ `hexagon-chart ${ className }` } viewBox={ `${ -hexWidthAdjusted } ${ -hexHeightAdjusted } ${ hexWidthAdjusted * 3.15 } ${ hexHeightAdjusted * 4 }` }>
      { hexagons }
    </svg>
  )
}

HexagonChart.propTypes = {
  className: PropTypes.string,
  onHexagonClick: PropTypes.func,
  highlighted: PropTypes.string,
}

export default HexagonChart
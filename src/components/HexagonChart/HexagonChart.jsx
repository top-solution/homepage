import React from 'react';
import PropTypes from 'prop-types';
import Hexagon from '../Hexagon/Hexagon';

import './HexagonChart.scss'

const HexagonChart = ({ className, highlighted, onHexagonClick }) => {
  const hexWidth = 512;
  const hexHeight = (hexWidth * 2) / Math.sqrt(3) ;
  const hexWidthAdjusted = hexWidth - (hexWidth / 8);
  const hexHeightAdjusted = hexHeight - (hexHeight / 3);

  return (
    <svg className={ `hexagon-chart ${ className }` } viewBox={ `0 0 ${ hexWidthAdjusted * 3.15 } ${ hexHeightAdjusted * 3.5 }` }>
      <Hexagon 
        className={`purple ${ highlighted === 'PIATTAFORME_WEB'? 'highlighted' : ''}`}
        onClick={ () => onHexagonClick('PIATTAFORME_WEB', 'left') }
        x= { hexWidthAdjusted - (hexWidthAdjusted / 2) }
        y={ 0 }
        width={ hexWidth } 
        height={hexHeight} 
        icon="web-platforms" 
        text={'Piattaforme\nWeb'}
      />
      <Hexagon 
        className={`cyan ${ highlighted === 'AUDIT_COMPETENZE'? 'highlighted' : ''}`}
        onClick={ () => onHexagonClick('AUDIT_COMPETENZE', 'right') }
        x= { 2 * hexWidthAdjusted - (hexWidthAdjusted / 2) }
        y={ 0 }
        width={ hexWidth } 
        height={hexHeight} 
        icon="expertise-audits" 
        text={'Audit\ncompetenze'}
      />
      <Hexagon 
        className={`purple ${ highlighted === 'APPLICAZIONI_WEB'? 'highlighted' : ''}`}
        onClick={ () => onHexagonClick('APPLICAZIONI_WEB', 'left') }
        x={0}
        y={ hexHeightAdjusted }
        width={ hexWidth } 
        height={hexHeight} 
        icon="web-applications" 
        text={'Applicazioni\nweb'}
      />
      <Hexagon 
        className={`orange ${ highlighted === ''? highlighted : ''}`}
        x={ hexWidthAdjusted }
        y={ hexHeightAdjusted }
        width={ hexWidth } 
        height={hexHeight} 
        centralText 
        text={'il tuo\nbusiness'}
      />
      <Hexagon 
        className={`cyan ${ highlighted === 'SVILUPPO_INDIVIDUALE'? 'highlighted' : ''}`}
        onClick={ () => onHexagonClick('SVILUPPO_INDIVIDUALE', 'right') }
        x={ 2 * hexWidthAdjusted }
        y={ hexHeightAdjusted }
        width={ hexWidth } 
        height={hexHeight} 
        icon="individual-development" 
        text={'Sviluppo\nindividuale'}
      />
      <Hexagon 
        className={`purple ${ highlighted === 'TRAINING_ICT'? 'highlighted' : ''}`}
        onClick={ () => onHexagonClick('TRAINING_ICT', 'left') }
        x= { hexWidthAdjusted - (hexWidthAdjusted / 2) }
        y={ hexHeightAdjusted * 2 }
        width={ hexWidth } 
        height={hexHeight} 
        icon="ict-training" 
        text={'Training\nICT'}
      />
      <Hexagon 
        className={`cyan ${ highlighted === 'SVILUPPO_ORGANIZZATIVO'? 'highlighted' : ''}`}
        onClick={ () => onHexagonClick('SVILUPPO_ORGANIZZATIVO', 'right') }
        x= { 2 * hexWidthAdjusted - (hexWidthAdjusted / 2) }
        y={ hexHeightAdjusted * 2 }
        width={ hexWidth } 
        height={hexHeight} 
        icon="management-development" 
        text={'Sviluppo\norganizzativo'}
      />
    </svg>
  );
};

HexagonChart.propTypes = {
  className: PropTypes.string,
};

export default HexagonChart;
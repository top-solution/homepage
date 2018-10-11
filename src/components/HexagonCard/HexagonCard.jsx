import React from 'react';
import PropTypes from 'prop-types';

import Hexagon from '../Hexagon/Hexagon'
import SVGHexagon from '../../images/hexagons/hexagon';

import './HexagonCard.scss'

const HexagonCard = ({ ...props }) => {
  return (
    <div className="hexagon-card">
      <SVGHexagon height={ null } width={144} className="hexagon">
        <g className="hexagon-icon" transform="scale(0.32) translate(18, 28)">        
          <use xlinkHref={ `#${ props.icon }` }/>
        </g>
      </SVGHexagon>
      <div className="card-content">
        { props.children }
      </div>
      
    </div>
  );
};

HexagonCard.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
};

export default HexagonCard;
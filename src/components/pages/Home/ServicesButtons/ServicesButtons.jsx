import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Button from '../../../Button/Button'
import Icon from '../../../Icon/Icon'

import './ServicesButtons.scss'


const ServicesButtons = ({ onClick, services }) => {
  const buttons = services
    .filter(service => service.type !== 'central')  
    .map(service => (            
      <Button
        key={ service.id }
        borderless
        purple={ service.type === 'ict' }
        cyan={ service.type === 'consulting' }
        onClick={ () => onClick(service.id) }
      >
        <Icon name={ service.icon } />
        { service.title }
      </Button>
    )) 

  return (
    <div className="service-buttons">
      { buttons }
    </div>
  )
}

ServicesButtons.propTypes = {
  onClick: PropTypes.func,
}

export default ServicesButtons
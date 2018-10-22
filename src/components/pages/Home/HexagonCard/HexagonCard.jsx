import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from '../../../Button/Button'

import SVGHexagon from 'images/hexagons/hexagon'
import ServiceDetails from '../ServiceDetails/ServiceDetails'
import ServicePreview from '../ServicePreview/ServicePreview'

import './HexagonCard.scss'


class HexagonCard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      collapsed: true,
    }

    this.collapsibleRef = React.createRef()
    this.collapsibleButtonRef = React.createRef()

    this.handleCollapseClick = this.handleCollapseClick.bind(this)
  }

  handleCollapseClick() {
    if (this.state.collapsed) {
      this.setState({ 
        collapsed: false,
        collapsibleHeight: this.collapsibleRef.current.clientHeight + 32,
      })

      setTimeout(() => {
        this.setState({ collapsibleHeight: this.collapsibleRef.current.clientHeight + 32 })
      }, 400)

      setTimeout(() => {
        // TODO: polyfill for safari
        this.collapsibleButtonRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'end', 
          inline: 'nearest',
        })
      }, 500)
    } else {
      this.setState({ 
        collapsed: true,
        collapsibleHeight: 0,
      })
    }
  }
  
  render() {
    if (!this.props.data) {
      return null
    }

    return (
      <div id={ `page-${ this.props.data.excerpt.frontmatter.icon }` } className={ `hexagon-card ${ this.props.accent || '' }` }>
        <SVGHexagon height={ null } width={ 144 } className="hexagon">
          <g className="hexagon-icon" transform="scale(0.32) translate(18, 28)">        
            <use xlinkHref={ `#${ this.props.data.excerpt.frontmatter.icon }` } />
          </g>
        </SVGHexagon>
        <div className="card-content">
          <ServicePreview data={ this.props.data.excerpt } />
          <div className="collapsible">
            <Button
              purple
              active={ !this.state.collapsed }
              onClick={ this.handleCollapseClick }>
              {'Scopri i servizi'}
            </Button>
            <div className={ 'scroller' }
              ref={ this.collapsibleButtonRef }>
            </div>
            <div 
              className={ `card-content-collapsible ${ this.state.collapsed? 'collapsed' : '' }` }
              style={ { maxHeight: this.state.collapsibleHeight } }
            >
              <div ref={ this.collapsibleRef }>
                <ServiceDetails data={ this.props.data.details } />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

HexagonCard.propTypes = {
  accent: PropTypes.string,
  data: PropTypes.object,
  icon: PropTypes.string,
  text: PropTypes.string,
}

export default HexagonCard
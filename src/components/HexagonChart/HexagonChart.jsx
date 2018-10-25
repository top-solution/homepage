import React from 'react'
import PropTypes from 'prop-types'
import Hexagon from '../Hexagon/Hexagon'
import { StaticQuery, graphql } from 'gatsby'


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
    <svg className={ `hexagon-chart ${ className }` } viewBox={ `${ -hexWidthAdjusted } ${ -hexHeightAdjusted } ${ hexWidthAdjusted * 3.15 } ${ hexHeightAdjusted * 4 }` }>
      <StaticQuery
        query={ graphql`
          {
            allMarkdownRemark(filter: {fields: {slug: {regex: "//homepage/[a-zA-Z0-9-]*/[a-zA-Z0-9-]*/$/"}}}) {
              edges {
                node {
                  frontmatter {
                    title
                    hexagonTitle
                    icon
                    type
                    id
                    x
                    y
                  }
                }
              }
            }
          }
        ` }
        render={ (data) => {
          return data.allMarkdownRemark.edges.map(({ node }) => {
            let color = ''

            switch (node.frontmatter.type) {
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

            const id = node.frontmatter.id;

            const y = hexHeightAdjusted * (-node.frontmatter.y || 0)
            let x = hexWidthAdjusted * (node.frontmatter.x || 0)

            if (node.frontmatter.y % 2 !== 0) {
              x += (hexWidthAdjusted / 2)
              
              if (node.frontmatter.x > 0) {
                x -=  hexWidthAdjusted
              }
            }

            return (
              <Hexagon
                key={ node.frontmatter.id }
                className={ `${ color } ${ highlighted === id ? 'highlighted' : '' }` }
                onClick={ handleHexagonClick(onHexagonClick, id, node.frontmatter.type) }
                x={ x }
                y={ y }
                width={ hexWidth } 
                height={ hexHeight } 
                icon={ node.frontmatter.icon }
                text={ (node.frontmatter.hexagonTitle || node.frontmatter.title).replace('\\n', '\n') }
                centralText={ node.frontmatter.x === 0 && node.frontmatter.y === 0 }
              />
            )
          })
        } }
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
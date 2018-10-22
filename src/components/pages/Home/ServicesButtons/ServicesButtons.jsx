import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Button from '../../../Button/Button'
import Icon from '../../../Icon/Icon'

import './ServicesButtons.scss'


const ServicesButtons = ({ onClick }) => {
  return (
    <div>
      <StaticQuery
        query={ graphql`
          query {
            services: allMarkdownRemark(filter: {fields: {slug: {regex: "//homepage/[a-zA-Z0-9-]*/[^/]*/$/"}}}) {
              edges {
                node {
                  frontmatter {
                    id
                    title
                    icon
                    type
                  }
                }
              }
            }
          }
        ` }
        render={ data => {
          const buttons = data.services.edges.map(({ node: { frontmatter } }) => (
            <Button
              key={ frontmatter.id }
              borderless
              purple={ frontmatter.type === 'ict' }
              cyan={ frontmatter.type === 'consulting' }
              onClick={ () => onClick(frontmatter.id) }
            >
              <Icon name={ frontmatter.icon } />
              { frontmatter.title }
            </Button>
          )) 

          return (
            <div className="service-buttons">
              { buttons }
            </div>
          )
        } }
      />
    </div>
  )
}

ServicesButtons.propTypes = {
  onClick: PropTypes.func,
}

export default ServicesButtons
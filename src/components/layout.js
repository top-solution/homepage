import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header/Header'

import SvgIconsSprite from '../images/icons/IconsSprite'

import './style.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={ graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    ` }
    render={ data => (
      <div>
        <Helmet
          title={ data.site.siteMetadata.title }
          meta={ [
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ] }
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={ data.site.siteMetadata.title } />
        <SvgIconsSprite className="svg-icon-sprite" />
        <div className="page-content">
          {children}
        </div>
      </div>
    ) }
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

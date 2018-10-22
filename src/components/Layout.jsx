import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header/Header'

import SvgIconsSprite from '../images/icons/IconsSprite'

import './style.scss'

const Layout = ({ children, variant, hideServices }) => (
  <StaticQuery
    query={ graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
            siteUrl
          }
        }
      }
    ` }
    render={ data => (
      <div>
        <Helmet
          title={ data.site.siteMetadata.title }
          meta={ [
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
            { name: 'canonical', content: data.site.siteMetadata.siteUrl },
            { name: 'robots', content: 'index, follow' },
          ] }
        >
          <html lang="en" />
        </Helmet>
        <Header variant={ variant } siteTitle={ data.site.siteMetadata.title } hideServices={ hideServices } />
        <SvgIconsSprite className="svg-icon-sprite" />
        <div className="page-content">
          {children}
        </div>
      </div>
    ) }
  />
)

Layout.propTypes = {
  hideServices: PropTypes.bool,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
}

export default Layout

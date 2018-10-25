import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import smoothscroll from 'smoothscroll-polyfill';

import Header from './Header/Header'


import SvgIconsSprite from '../images/icons/IconsSprite'

import logoText from '../images/top-solution/logo-text.png'

import './style.scss'

if (typeof window !== 'undefined') {
  // Enable the smooth scroll polyfill for Safari & Co.
  smoothscroll.polyfill();
}

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
            company {
              name
              streetAddress
              locality
              postalCode
              countryName
              latitude
              longitude
            }
            contacts {
              phone
              email
            }
          }
        }
      }
    ` }
    render={ data => {
      const company = data.site.siteMetadata.company
      const contacts = data.site.siteMetadata.contacts

      return (
        <div>
          <Helmet
            title={ data.site.siteMetadata.title }
            meta={ [
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: data.site.siteMetadata.keywords },
              { name: 'canonical', content: data.site.siteMetadata.siteUrl },
              { name: 'robots', content: 'index, follow' },
              { name: 'og:title', content: company.name }, 
              { name: 'og:type', content: 'business.business' }, 
              { name: 'og:url', content: data.site.siteMetadata.siteUrl }, 
              { name: 'og:image', content: '' }, 
              { name: 'business:contact_data:street_address', content: company.streetAddress },
              { name: 'business:contact_data:locality', content: company.locality },
              { name: 'business:contact_data:postal_code', content: company.postalCode },
              { name: 'business:contact_data:country_name', content: company.countryName },
              { name: 'place:location:latitude', content: company.latitude },
              { name: 'place:location:longitude', content: company.longitude },
            ] }
            head={ [
              { prefix: 'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# business: http://ogp.me/ns/business#' },
            ] }
          >
            <html lang="en" />
            <script type="application/ld+json">
              {
                JSON.stringify({ 
                  '@context': 'http://schema.org',
                  '@type': 'Organization',
                  'name': company.name,
                  'legalName': company.name,
                  'url': data.site.siteMetadata.siteUrl,
                  'logo': data.site.siteMetadata.siteUrl + logoText,
                  'address': {
                    '@type': 'PostalAddress',
                    'streetAddress': company.streetAddress,
                    'addressLocality': company.locality,
                    'addressRegion': company.region,
                    'postalCode': company.postalCode,
                    'addressCountry': company.countryName,
                  },
                  'contactPoint': {
                    '@type': 'ContactPoint',
                    'contactType': 'sales',
                    'telephone': `+39 ${ contacts.phone }`,
                    'email': contacts.email,
                  },
                })
              }
            </script>
          </Helmet>
          <Header variant={ variant } siteTitle={ data.site.siteMetadata.title } hideServices={ hideServices } />
          <SvgIconsSprite className="svg-icon-sprite" />
          <div className="page-content">
            {children}
          </div>
        </div>
      ) 
    } }
  />
)

Layout.propTypes = {
  hideServices: PropTypes.bool,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
}

export default Layout

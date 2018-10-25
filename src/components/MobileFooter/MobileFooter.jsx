import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Jumbotron from '../Jumbotron/Jumbotron'

import './MobileFooter.scss'

const MobileFooterContent = ({ markdownRemark, site: {siteMetadata: {company, contacts}} }) => {
  return (
    <div className="mobile-footer-content">
      <Jumbotron>
        <h2>{ markdownRemark.frontmatter.title }</h2>
        <p>{ markdownRemark.frontmatter.subtitle }</p>
      </Jumbotron>
      <div className="info">
        <div>
          <h4>Telefono</h4>
          <a href={`tel:${ contacts.phone }`}>{ contacts.phone }</a>
        </div>
        <div>
          <h4>Email</h4>
          <a href={`mailto:${ contacts.email }`} target="_top">{ contacts.email }</a>
        </div>
        <div>
          <h4>P.IVA/CF</h4>
          <span>{ company.vatId }</span>
        </div>
      </div>
      <span className="copyright">© <span>{ company.name }</span></span>
    </div>
  );
}

MobileFooterContent.propTypes = {
  markdownRemark: PropTypes.shape({
    html: PropTypes.string,
  }),
}

const MobileFooter = () => (
  <div className="mobile-footer">
    <StaticQuery
      query={ graphql`
        {
          markdownRemark(fields: {slug: {regex: "//pages/contact-us/contact-us//"}}) {
            html
            frontmatter {
              title
              subtitle
            }
          }
          site {
            siteMetadata {
              company {
                locality
                name
                postalCode
                streetAddress
                vatId
              }
              contacts {
                phone
                email
              }
            }
          }
        }      
      ` }
      render={ MobileFooterContent }
    />
  </div>
)

export default MobileFooter

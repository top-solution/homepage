import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../Layout'
import Jumbotron from '../Jumbotron/Jumbotron'
import PageWrapper from '../PageWrapper/PageWrapper'

import './Footer.scss'

const FooterContent = ({ site: {siteMetadata: {company, contacts}} }) => {
  return [
    <div key="name">© <span>{ company.name }</span></div>,
    <div key="vatId"><b>P.IVA/CF</b> <span>{ company.vatId }</span></div>,
    <div key="phone"><b>Tel</b> <a href={`tel:${ contacts.phone }`}>{ contacts.phone }</a></div>,
    <div key="email"><b>Email</b> <a href={`mailto:${ contacts.email }`} target="_top">{ contacts.email }</a></div>,
  ];
}

FooterContent.propTypes = {
  markdownRemark: PropTypes.shape({
    html: PropTypes.string,
  }),
}

const Footer = () => (
  <div className="footer">
    <StaticQuery
      query={ graphql`
        {
          site {
            siteMetadata {
              company {
                name,
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
      render={ FooterContent }
    />
  </div>
)

export default Footer

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../../Layout'
import PageWrapper from '../../PageWrapper/PageWrapper'
import Jumbotron from '../../Jumbotron/Jumbotron'

import Map from './Map'

import './ContactUs.scss'

const ContactUsMD = ({ markdownRemark }) => {
  return [
    <Jumbotron key="jumbotron">
      <h2>{ markdownRemark.frontmatter.title }</h2>
      <p>{ markdownRemark.frontmatter.subtitle }</p>
    </Jumbotron>,
    <PageWrapper key="content">
      <div dangerouslySetInnerHTML={ { __html: markdownRemark.html } } />
      <Map />
    </PageWrapper>,
  ]
}

ContactUsMD.propTypes = {
  markdownRemark: PropTypes.shape({
    html: PropTypes.string,
  }),
}

const ContactUs = () => (
  <div className="page-contact-us page">
    <Layout variant="dark">
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
            }
          ` }
        render={ ContactUsMD }
      />
    </Layout>
  </div>
)

export default ContactUs

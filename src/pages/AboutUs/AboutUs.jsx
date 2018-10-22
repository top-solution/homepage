import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import PageWrapper from '../../components/PageWrapper/PageWrapper'

import './AboutUs.scss'

const AboutUsMD = ({ markdownRemark }) => {
  return [
    <Jumbotron key="jumbotron">
      <h2>{ markdownRemark.frontmatter.title }</h2>
    </Jumbotron>,
    <PageWrapper key="content">
      <div dangerouslySetInnerHTML={ { __html: markdownRemark.html } } />
    </PageWrapper>,
  ]
}

AboutUsMD.propTypes = {
  markdownRemark: PropTypes.shape({
    html: PropTypes.string,
  }),
}

const AboutUs = () => (
  <div className="page-about-us page">
    <Layout variant="dark">
      <StaticQuery
        query={ graphql`
          {
            markdownRemark(fields: {slug: {regex: "//pages/about-us/about-us//"}}) {
              html
              frontmatter {
                title
              }
            }
          }
        ` }
        render={ AboutUsMD }
      />
    </Layout>
  </div>
)

export default AboutUs

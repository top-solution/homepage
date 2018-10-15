import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../../components/Layout'
import PageWrapper from '../../components/PageWrapper/PageWrapper'

// import logoText from '../../images/ts-logo-text.png'
import i3pLogo from '../../images/logos/i3p.png'

import './AboutUs.scss'

const AboutUsMD = ({ markdownRemark }) => {
  return (
    <div dangerouslySetInnerHTML={ { __html: markdownRemark.html } }>

    </div>
  )
}

AboutUsMD.propTypes = {
  markdownRemark: PropTypes.shape({
    html: PropTypes.string,
  }),
}

const AboutUs = () => (
  <div className="page-about-us">
    <Layout>
      <PageWrapper>
        {/* <div className="ts-logo">
          <img src={ logoText } alt="" />
        </div> */}

        <h2>Chi siamo</h2>

        <StaticQuery
          query={ graphql`
            {
              markdownRemark(fields: {slug: {regex: "//pages/about-us//"}}) {
                html
              }
            }
          ` }
          render={ AboutUsMD }
        />
        <div className="logos">
          <img src={ i3pLogo } alt="Incubatore Imprese Innovative Politecnico Torino" />
        </div>
      </PageWrapper>
    </Layout>
  </div>
)

export default AboutUs

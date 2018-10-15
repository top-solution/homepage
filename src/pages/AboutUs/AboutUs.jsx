import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../../components/Layout'
import PageWrapper from '../../components/PageWrapper/PageWrapper'

// import logoText from '../../images/ts-logo-text.png'
// import i3pLogo from '../../images/logos/i3p.png'
// import startCup from '../../images/logos/2008_startcup.jpg'

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
  <div className="page-about-us page">
    <Layout>
      <PageWrapper>
        {/* <div className="ts-logo">
          <img src={ logoText } alt="" />
        </div> */}

        <StaticQuery
          query={ graphql`
            {
              markdownRemark(fields: {slug: {regex: "//pages/about-us/about-us//"}}) {
                html
              }
            }
          ` }
          render={ AboutUsMD }
        />
        {/* <div className="logos">
          <img src={ i3pLogo } alt="Incubatore Imprese Innovative Politecnico Torino" />
          <img src={ startCup } alt="2008 StartCup Torino Piemonte" />
        </div> */}
      </PageWrapper>
    </Layout>
  </div>
)

export default AboutUs

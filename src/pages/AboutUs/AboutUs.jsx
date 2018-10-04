import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import Layout from '../../components/layout'
import PageWrapper from '../../components/PageWrapper/PageWrapper';

import logoText from '../../images/logo_text.png'
import i3pLogo from '../../images/logos/i3p.png'

import './AboutUs.scss'
import Editorial from '../../components/Editorial/Editorial';


const AboutUs = () => (
  <div className="page-about-us">
    <Layout>
      <PageWrapper>
        <div className="ts-logo">
          <img src={ logoText } alt="" />
        </div>

        <StaticQuery
          query={ graphql`
            {
              markdownRemark(fields: {slug: {regex: "//pages/about-us//"}}) {
                html
              }
            }
          ` }
          render={ Editorial }
        />
        
        <div className="logos">
          <img src={ i3pLogo } alt="Incubatore Imprese Innovative Politecnico Torino"/>
        </div>
      </PageWrapper>
    </Layout>
  </div>
)

export default AboutUs

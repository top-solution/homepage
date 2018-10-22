import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Service from '../Service/Service'


const ICTTraining = props => {
  return (
    <div>
      <StaticQuery
        query={ graphql`
          query {
            excerpt: markdownRemark(fields: {slug: {regex: "//homepage/ict-training/ict-training//"}}) {
              html
              frontmatter {
                title
                icon
              }
            }
            details: allMarkdownRemark(filter: {fields: {slug: {regex: "//homepage/ict-training/details//"}}}) {
              edges {
                node {
                  html
                  frontmatter {
                    title
                    icon
                  }
                }
              }
            }
          }
        ` }
        render={ data => ( <Service data={ data } { ...props } /> ) }
      />
    </div>
  )
}

export default ICTTraining
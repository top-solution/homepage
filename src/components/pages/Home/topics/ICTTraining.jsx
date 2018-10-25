import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Service from '../Service/Service'


const ICTTraining = props => {
  return (
    <div>
      <StaticQuery
        query={ graphql`
          query {
            excerpt: markdownRemark(fields: {slug: {regex: "//homepage/ict-consulting/ict-consulting//"}}) {
              html
              frontmatter {
                title
                icon
              }
            }
            details: allMarkdownRemark(filter: {fields: {slug: {regex: "//homepage/ict-consulting/details//"}}}, sort: { fields: fields___slug }) {
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
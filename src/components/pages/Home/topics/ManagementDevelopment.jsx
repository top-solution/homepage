import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Service from '../Service/Service'


const ManagementDevelopment = props => {
  return (
    <div>
      <StaticQuery
        query={ graphql`
          query {
            excerpt: markdownRemark(fields: {slug: {regex: "//homepage/management-development/management-development//"}}) {
              html
              frontmatter {
                title
                icon
              }
            }
            details: allMarkdownRemark(filter: {fields: {slug: {regex: "//homepage/management-development/details//"}}}, sort: { fields: fields___slug }) {
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

export default ManagementDevelopment
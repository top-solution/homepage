import React from 'react';
import { StaticQuery, graphql } from "gatsby"

import Service from '../Service/Service'
import ServiceDetails from '../ServiceDetails/ServiceDetails'


const WebApplications = (props) => {
  return (
    <div>
      <StaticQuery
        query={ graphql`
          query {
            excerpt: markdownRemark(fields: {slug: {regex: "//homepage/web-applications/web-applications//"}}) {
              html
              frontmatter {
                title
                icon
              }
            }
            details: allMarkdownRemark(filter: {fields: {slug: {regex: "//homepage/web-applications/details//"}}}) {
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
        render={ (data) => ( <Service data={ data } { ...props }/> )}
      />
    </div>
  );
};

export default WebApplications;
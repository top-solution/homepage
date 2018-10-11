import React from 'react';
import { StaticQuery, graphql } from "gatsby"

import IndexTopic from '../../../components/IndexTopic/IndexTopic'
import IndexDetails from '../../../components/IndexDetails/IndexDetails'


const CompetenceAudits = () => {
  return (
    <div>
      <StaticQuery
        query={ graphql`
          query {
            excerpt: markdownRemark(fields: {slug: {regex: "//homepage/competence-audits/competence-audits//"}}) {
              html
              frontmatter {
                title
                icon
              }
            }
            details: allMarkdownRemark(filter: {fields: {slug: {regex: "//homepage/web-platforms/details//"}}}) {
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
        render={ (data) => {
          return (
            <div>
              <IndexTopic data={data.excerpt} />
              <IndexDetails data={data.details} />
            </div>
          )
        } }
      />
    </div>
  );
};

export default CompetenceAudits;
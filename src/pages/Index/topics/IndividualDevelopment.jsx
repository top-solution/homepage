import React from 'react';
import { StaticQuery, graphql } from "gatsby"

import IndexTopic from '../../../components/IndexTopic/IndexTopic'


const IndividualDevelopment = () => {
  return (
    <div>
      <StaticQuery
        query={ graphql`
          {
            markdownRemark(fields: {slug: {regex: "//homepage/individual-development/individual-development//"}}) {
              html,
              frontmatter {
                title
                icon
              }
            }
          }
        ` }
        render={ IndexTopic }
      />
    </div>
  );
};

export default IndividualDevelopment;
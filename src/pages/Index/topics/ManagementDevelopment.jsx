import React from 'react';
import { StaticQuery, graphql } from "gatsby"

import IndexTopic from '../../../components/IndexTopic/IndexTopic'


const ManagementDevelopment = () => {
  return (
    <div>
      <StaticQuery
        query={ graphql`
          {
            markdownRemark(fields: {slug: {regex: "//homepage/management-development/management-development//"}}) {
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

export default ManagementDevelopment;
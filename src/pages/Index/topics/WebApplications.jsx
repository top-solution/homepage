import React from 'react';
import { StaticQuery, graphql } from "gatsby"

import IndexTopic from '../../../components/IndexTopic/IndexTopic'


const WebApplications = () => {
  return (
    <div>
      <StaticQuery
        query={ graphql`
          {
            markdownRemark(fields: {slug: {regex: "//homepage/web-applications/web-applications//"}}) {
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

export default WebApplications;
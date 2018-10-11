import React from 'react';
import { StaticQuery, graphql } from "gatsby"

import IndexTopic from '../../../components/IndexTopic/IndexTopic'


const WebPlatforms = () => {
  return (
    <div>
      <StaticQuery
        query={ graphql`
          {
            markdownRemark(fields: {slug: {regex: "//homepage/web-platforms/web-platforms//"}}) {
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

export default WebPlatforms;
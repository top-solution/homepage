import React from 'react';
import { StaticQuery, graphql } from "gatsby"

import IndexTopic from '../../../components/IndexTopic/IndexTopic'


const ICTTraining = () => {
  return (
    <div>
      <StaticQuery
        query={ graphql`
          {
            markdownRemark(fields: {slug: {regex: "//homepage/ict-training/ict-training//"}}) {
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

export default ICTTraining;
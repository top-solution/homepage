import React from 'react';
import { StaticQuery, graphql } from "gatsby"

import Editorial from '../../../components/Editorial/Editorial'


const ICTTraining = () => {
  return (
    <div>
      <StaticQuery
        query={ graphql`
          {
            markdownRemark(fields: {slug: {regex: "//homepage/ict-training//"}}) {
              htmlAst
            }
          }
        ` }
        render={ Editorial }
      />
    </div>
  );
};

export default ICTTraining;
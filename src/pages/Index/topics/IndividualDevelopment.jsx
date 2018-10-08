import React from 'react';
import { StaticQuery, graphql } from "gatsby"

import Editorial from '../../../components/Editorial/Editorial'


const IndividualDevelopment = () => {
  return (
    <div>
      <StaticQuery
        query={ graphql`
          {
            markdownRemark(fields: {slug: {regex: "//homepage/individual-development//"}}) {
              htmlAst
            }
          }
        ` }
        render={ Editorial }
      />
    </div>
  );
};

export default IndividualDevelopment;
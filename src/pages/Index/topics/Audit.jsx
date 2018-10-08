import React from 'react';
import { StaticQuery, graphql } from "gatsby"

import Editorial from '../../../components/Editorial/Editorial'


const Audit = () => {
  return (
    <div>
      <StaticQuery
        query={ graphql`
          {
            markdownRemark(fields: {slug: {regex: "//homepage/competence-audits//"}}) {
              htmlAst
            }
          }
        ` }
        render={ Editorial }
      />
    </div>
  );
};

export default Audit;
import React from 'react';
import { StaticQuery, graphql } from "gatsby"

import Editorial from '../../../components/Editorial/Editorial'


const ManagementDevelopment = () => {
  return (
    <div>
      <StaticQuery
        query={ graphql`
          {
            markdownRemark(fields: {slug: {regex: "//homepage/management-development//"}}) {
              htmlAst
            }
          }
        ` }
        render={ Editorial }
      />
    </div>
  );
};

export default ManagementDevelopment;
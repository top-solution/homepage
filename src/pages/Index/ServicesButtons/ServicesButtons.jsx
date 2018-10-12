import React from 'react';
import { StaticQuery, graphql } from "gatsby"

import Button from '../../../components/Button/Button';
import Icon from '../../../components/Icon/Icon';

import './ServicesButtons.scss'


const ServicesButtons = ({ onClick }) => {
  return (
    <div>
      <StaticQuery
        query={ graphql`
          query {
            services: allMarkdownRemark(filter: {fields: {slug: {regex: "//homepage/[a-zA-Z0-9-]*/[^/]*/$/"}}}) {
              edges {
                node {
                  frontmatter {
                    id
                    title
                    icon
                    type
                  }
                }
              }
            }
          }
        ` }
        render={ (data) => {
          console.log(data.services.edges)
          const buttons = data.services.edges.map(({ node : { frontmatter }}) => (
            <Button
              key={ frontmatter.id }
              borderless
              purple={ frontmatter.type === 'ict' }
              cyan={ frontmatter.type === 'consulting' }
              onClick={ () => onClick(frontmatter.id) }
            >
              <Icon name={ frontmatter.icon }/>
              { frontmatter.title }
            </Button>
          )) 

          return (
            <div className="service-buttons">
              { buttons }
            </div>
          )
        }}
      />
    </div>
  );
};

export default ServicesButtons;
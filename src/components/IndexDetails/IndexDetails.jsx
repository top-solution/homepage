import React from 'react'

import Icon from '../Icon/Icon';

const IndexDetails = ( { data } ) => {
  if (!data) {
    return null;
  }

  const details = data.edges.map(({ node }) => (
    <div>
      <h2>{ node.frontmatter.title }</h2>
      <Icon name={ node.frontmatter.icon } />
      <div dangerouslySetInnerHTML={{__html: node.html}}>
      </div>
    </div>

  ))

  return (
    <div>
      {details}
    </div>
  );
};

export default IndexDetails;
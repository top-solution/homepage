import React from 'react'

const IndexTopic = ( {data} ) => {
  if (!data || !data.frontmatter) {
    return null;
  }

  return (
    <div>
      <h2>{ data.frontmatter.title }</h2>
      <div dangerouslySetInnerHTML={{__html: data.html}}>
      </div>
    </div>
  );
};

export default IndexTopic;
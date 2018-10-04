import React from 'react'

const Editorial = ( data ) => {
  return (
    <div dangerouslySetInnerHTML={ {__html :  data.markdownRemark.html} }>
    </div>
  )
};

export default Editorial;
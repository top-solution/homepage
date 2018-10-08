import React from 'react'
import rehypeReact from "rehype-react"

import Icon from '../Icon/Icon'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "icon": Icon },
}).Compiler

const Editorial = ( data ) => {
  if (!data || !data.markdownRemark) {
    return null;
  }

  if (!renderAst) {
    return (
      <div dangerouslySetInnerHTML={ {__html : renderAst(data.markdownRemark.htmlAst)} }>
      </div>
    )
  } else {
    if (!data.markdownRemark.htmlAst) {
      return null;
    }

    return (
      <div>
        {
          renderAst(data.markdownRemark.htmlAst)
        }
      </div>
    )
  }
};

export default Editorial;
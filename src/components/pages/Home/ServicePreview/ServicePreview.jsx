import React from 'react'
import PropTypes from 'prop-types'

const ServicePreview = ( { data } ) => {
  if (!data || !data.frontmatter) {
    return null
  }

  return (
    <div>
      <h2>{ data.frontmatter.title }</h2>
      <div dangerouslySetInnerHTML={ { __html: data.html } }>
      </div>
    </div>
  )
}

ServicePreview.propTypes = {
  data: PropTypes.objectOf({
    html: PropTypes.string,
    frontmatter: PropTypes.object,
  }),
}

export default ServicePreview
import React from 'react'

const SVGHexagon = props => (
  <svg viewBox="0 0 16.933 16.933" height={ 64 } width={ 64 } { ...props }>
    <defs>
      <filter id="hexagon-svg-blur-filter" colorInterpolationFilters="sRGB">
        <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
      </filter>
    </defs>
    <path
      className="hexagon-highlight"
      d="M14.705 12.143l-6.235 3.732-6.238-3.676-.004-7.408 6.235-3.733 6.239 3.676z"
      fill="currentColor"
      filter="url(#hexagon-svg-blur-filter)"
    />
    <path
      className="hexagon-shadow"
      d="M14.705 12.143l-6.235 3.732-6.238-3.676-.004-7.408 6.235-3.733 6.239 3.676z"
      fill="#000"
      filter="url(#hexagon-svg-blur-filter)"
    />
    <path
      className="hexagon"
      d="M14.705 12.143l-6.235 3.732-6.238-3.676-.004-7.408 6.235-3.733 6.239 3.676z"
      fill="#fff"
    />
    { props.children }
  </svg>
)

export default SVGHexagon

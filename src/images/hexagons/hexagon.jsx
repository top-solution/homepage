import React from 'react'

const SVGHexagon = props => (
  <svg viewBox="0 0 16.933 16.933" height={64} width={64} {...props}>
    <defs>
      <filter id="a" colorInterpolationFilters="sRGB">
        <feFlood result="flood" floodColor="#000" floodOpacity={0.498} />
        <feComposite
          result="composite1"
          operator="in"
          in2="SourceGraphic"
          in="flood"
        />
        <feGaussianBlur result="blur" stdDeviation={0.2} in="composite1" />
        <feOffset result="offset" />
        <feComposite result="composite2" in2="offset" in="SourceGraphic" />
      </filter>
    </defs>
    <path
      className="hexagon"
      d="M14.705 292.21l-6.235 3.732-6.238-3.676-.004-7.408 6.235-3.733 6.239 3.676z"
      fill="#fff"
      transform="translate(0 -280.067)"
    />
    <path
      className="hexagon-shadow"
      d="M14.705 292.21l-6.235 3.732-6.238-3.676-.004-7.408 6.235-3.733 6.239 3.676z"
      fill="#fff"
      filter="url(#a)"
      transform="translate(0 -280.067)"
    />
    { props.children }
  </svg>
)

export default SVGHexagon

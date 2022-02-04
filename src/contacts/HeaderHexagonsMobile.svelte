<svelte:options tag="ts-header-hexagons-mobile" />

<div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="428"
    height="496"
    fill="none"
    viewBox="0 0 428 496"
  >
    <path
      fill="url(#header-hexagons-mobile__a)"
      fill-opacity=".1"
      fill-rule="evenodd"
      d="M300.123 183.592c17.914 14.079 15.766 45.73 7.557 73.033-7.2 23.951-35.241 40.586-48.674 63.728-15.071 25.963 33.153 89.409-9.887 82.866-64.363-9.784-47.038 60.437-68.96 65.104-21.216 4.517-66.822-28.905-82.112-44.52-15.386-15.713-56.662-53.191-51.66-79.426 4.884-25.614 48.775-58.797 63.87-83.581 16.121-26.467 11.625-62.89 38.051-79.803 26.154-16.737 47.602 7.843 73.691 8.289 25.985.445 60.27-19.723 78.124-5.69Z"
      clip-rule="evenodd"
    />
    <g filter="url(#header-hexagons-mobile__b)">
      <path
        fill="#211A59"
        d="m238.971 262.972 10.015 5.205 9.995 5.244.5 11.276.456 11.277-9.515 6.071-9.538 6.034-10.016-5.204-9.994-5.244-.501-11.276-.456-11.278 9.515-6.071 9.539-6.034Z"
      />
    </g>
    <g filter="url(#header-hexagons-mobile__c)">
      <path
        fill="#312783"
        d="m162.583 218.024-11.127-5.588-11.148-5.544-10.325 6.822-10.297 6.862.803 12.409.851 12.407 11.127 5.587 11.149 5.544 10.324-6.822 10.298-6.862-.803-12.409-.852-12.406Z"
      />
    </g>
    <defs>
      <filter
        id="header-hexagons-mobile__b"
        width="200.02"
        height="205.106"
        x="139.917"
        y="262.973"
        color-interpolation-filters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="80" />
        <feGaussianBlur stdDeviation="40" />
        <feColorMatrix
          values="0 0 0 0 0.117647 0 0 0 0 0.117647 0 0 0 0 0.396078 0 0 0 0.25 0"
        />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1628_12514"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1628_12514"
          result="shape"
        />
      </filter>
      <filter
        id="header-hexagons-mobile__c"
        width="204.552"
        height="209.63"
        x="39.685"
        y="206.893"
        color-interpolation-filters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="80" />
        <feGaussianBlur stdDeviation="40" />
        <feColorMatrix
          values="0 0 0 0 0.117647 0 0 0 0 0.117647 0 0 0 0 0.396078 0 0 0 0.25 0"
        />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1628_12514"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1628_12514"
          result="shape"
        />
      </filter>
      <linearGradient
        id="header-hexagons-mobile__a"
        x1="219.237"
        x2="59.868"
        y1="208.822"
        y2="373.298"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#312783" />
        <stop offset="1" stop-color="#312783" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
</div>

<style lang="scss">
  @use "../styles/variables";

  div {
    position: relative;
  }

  svg {
    position: absolute;
    right: -140px;
    top: -280px;

    @media only screen and (min-width: variables.$ts-tablet-min) {
      display: none;
    }
  }
</style>

<svelte:options tag="ts-header-hexagons-mobile" />

<div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="header-hexagons-mobile__left"
    width="227.58"
    height="235.06"
    fill="none"
    viewBox="0 0 227.58 235.06"
  >
    <g
      filter="url(#header-hexagons-mobile__la)"
      transform="translate(-.606 -674.969)"
    >
      <path
        fill="#312783"
        d="m80.606 695.964 1.251 18.768 1.325 18.762 16.878 8.3 16.911 8.235 15.628-10.468 15.587-10.528-1.252-18.767-1.324-18.763-16.879-8.3-16.911-8.234-15.627 10.467z"
      />
    </g>
    <defs>
      <filter
        id="header-hexagons-mobile__la"
        width="227.58"
        height="235.06"
        x=".606"
        y="674.969"
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
          result="effect1_dropShadow_1621_12152"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1621_12152"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="header-hexagons-mobile__right"
    width="391.929"
    height="524.081"
    fill="none"
    viewBox="0 0 391.929 524.081"
  >
    <g
      filter="url(#header-hexagons-mobile__ra)"
      transform="translate(-180.673 -75.84)"
    >
      <path
        fill="#312783"
        fill-opacity=".5"
        d="m327.204 399.952 30.18 20.044 30.251 19.925 30.842-16.173 30.775-16.3.663-36.218.524-36.225-30.18-20.044-30.25-19.926-30.842 16.174-30.776 16.3-.662 36.217z"
      />
    </g>
    <g
      filter="url(#header-hexagons-mobile__rb)"
      transform="translate(-180.673 -75.84)"
    >
      <path
        fill="#312783"
        d="m303.549 229.566-11.134-5.613-11.155-5.569-10.307 6.803-10.28 6.843.827 12.416.874 12.413 11.134 5.613 11.155 5.569 10.307-6.803 10.28-6.843-.826-12.416z"
      />
    </g>
    <defs>
      <filter
        id="header-hexagons-mobile__ra"
        width="283.235"
        height="304.886"
        x="247.205"
        y="295.035"
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
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          values="0 0 0 0 0.192157 0 0 0 0 0.152941 0 0 0 0 0.513726 0 0 0 0.25 0"
        />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1621_12152"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1621_12152"
          result="shape"
        />
      </filter>
      <filter
        id="header-hexagons-mobile__rb"
        width="204.577"
        height="209.658"
        x="180.673"
        y="218.383"
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
          result="effect1_dropShadow_1621_12152"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1621_12152"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</div>

<style lang="scss">
  @use "../styles/variables";

  @use "../styles/main.scss";

  div {
    position: relative;
    pointer-events: none;
  }

  #header-hexagons-mobile__left {
    position: absolute;
    right: 66%;
    top: -240px;
  }

  #header-hexagons-mobile__right {
    position: absolute;
    top: -880px;
    right: -130px;
  }

  #header-hexagons-mobile__hex {
    position: absolute;
    bottom: -690px;
    left: -70px;
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

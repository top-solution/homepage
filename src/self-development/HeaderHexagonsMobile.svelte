<svelte:options tag="ts-header-hexagons-mobile" />

<div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="header-hexagons-mobile__right"
    width="387.357"
    height="518.602"
    fill="none"
    viewBox="0 0 387.357 518.602"
  >
    <g
      filter="url(##header-hexagons-mobile__a)"
      transform="translate(-175.65 -70.815)"
    >
      <path
        fill="#312783"
        fill-opacity=".5"
        d="m303.204 389.447 30.18 20.044 30.251 19.926 30.842-16.174 30.775-16.3.663-36.217.524-36.226-30.18-20.044-30.25-19.925-30.842 16.173-30.776 16.3-.662 36.218z"
      />
    </g>
    <g
      filter="url(##header-hexagons-mobile__b)"
      transform="translate(-175.65 -70.815)"
    >
      <path
        fill="#312783"
        d="m298.486 218.128-11.145-5.658-11.167-5.614-10.275 6.77-10.249 6.811.87 12.428.917 12.425 11.145 5.658 11.167 5.614 10.276-6.77 10.248-6.811-.869-12.428z"
      />
    </g>
    <defs>
      <filter
        id="#header-hexagons-mobile__a"
        width="283.235"
        height="304.886"
        x="223.204"
        y="284.531"
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
          result="effect1_dropShadow_1628_12550"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1628_12550"
          result="shape"
        />
      </filter>
      <filter
        id="#header-hexagons-mobile__b"
        width="204.623"
        height="209.706"
        x="175.65"
        y="206.856"
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
          result="effect1_dropShadow_1628_12550"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1628_12550"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="header-hexagons-mobile__hex"
    width="229"
    height="257"
    fill="none"
    viewBox="0 0 229 257"
  >
    <g filter="url(#a)">
      <path
        fill="#312783"
        d="m80.606 42.46 1.251 18.767 1.325 18.763 16.878 8.3 16.911 8.234 15.628-10.467 15.587-10.528-1.252-18.768L145.61 38l-16.879-8.3-16.911-8.235-15.627 10.468L80.606 42.46Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width="227.579"
        height="235.06"
        x=".606"
        y="21.464"
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
          result="effect1_dropShadow_1628_12529"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1628_12529"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</div>

<style lang="scss">
  @use "../styles/variables";

  @use "../styles/main.scss";

  #header-hexagons-mobile__right {
    position: absolute;
    top: -130px;
    right: -120px;
  }

  #header-hexagons-mobile__hex {
    position: absolute;
    bottom: -690px;
    left: -70px;
  }
</style>

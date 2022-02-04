<svelte:options tag="ts-snail" />

<script>
  export let flip = "false";
  export let color = "#8D88BA";
</script>

<div class="snail" class:snail--flip={flip === "true"}>
  <svg
    class="snail__snail"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 96"
    ><path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M199.233 42.496c-1.39-6.522-5.283-12.948-34.537-11.94-31.563 1.088-13.246-59.94-48.523-12.429C97.316 43.524 21.65 49.031 8.37 59.184c-8.713 6.66-13.367 24.002 0 26.223 13.658 2.27 47.534-4.871 62.516 4.603 30.805 19.48 71.243-13.965 101.457-23.593 31.12-9.918 28.292-17.352 26.89-23.92Z"
      fill="url(#snail__filter-a)"
    />
    <defs>
      <linearGradient
        id="snail__filter-a"
        x1="190"
        y1="80"
        x2="100"
        y2="160"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#EBEAF3" />
        <stop offset="1" stop-color="#EBEAF3" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
  <svg
    class="snail__hexagon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1427 1148"
  >
    <g
      filter="url(#snail__snail-filter-b)"
      transform="translate(-448.54 -19.607)"
    >
      <path
        d="m1529.46 275.276-148.75-73.263-149.02-72.683-137.82 92.182-137.458 92.719 10.923 165.445 11.567 165.401 148.738 73.263 149.03 72.683 137.82-92.181 137.46-92.719-10.93-165.445z"
        fill={color}
      />
    </g>
    <defs>
      <filter
        id="snail__snail-filter-b"
        x="876.412"
        y="129.33"
        width="755.533"
        height="821.693"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="80" />
        <feGaussianBlur stdDeviation="40" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          values="0 0 0 0 0.192157 0 0 0 0 0.152941 0 0 0 0 0.513726 0 0 0 0.25 0"
        />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1579_39065"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1579_39065"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</div>

<style lang="scss">
  @use "./styles/variables";

  .snail {
    position: relative;
    margin-left: -495px;

    &.snail--flip {
      margin-right: -410px;
      margin-left: unset;

      .snail__snail {
        right: 0;
        left: unset;
        transform: scaleX(1);
      }

      .snail__hexagon {
        right: -250px;
        left: unset;
      }
    }

    .snail__snail {
      position: absolute;
      bottom: -100px;
      z-index: -2;
      left: 0;
      transform: scaleX(-1);
      height: 580px;
    }

    .snail__hexagon {
      position: absolute;
      bottom: -120px;
      z-index: 1;
      height: 800px;
      left: -290px;
    }

    @media screen and (max-width: variables.$ts-tablet-max) {
      .snail__hexagon {
        bottom: -240px;
        left: -290px;
      }

      .snail__snail {
        height: 435px;
      }

      .snail__hexagon {
        height: 600px;
        left: -80px;
      }

      &.snail--flip {
        .snail__snail {
          right: 0;
        }

        .snail__hexagon {
          right: -80px;
        }
      }
    }

    @media screen and (max-width: variables.$ts-mobile-max) {
      .snail__snail {
        height: 290px;
        bottom: 0;
      }

      .snail__hexagon {
        height: 400px;
        bottom: -90px;
        left: 90px;
      }

      &.snail--flip {
        .snail__snail {
          right: 0;
        }

        .snail__hexagon {
          right: 60px;
        }
      }
    }
  }
</style>

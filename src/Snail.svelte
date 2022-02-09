<svelte:options tag="ts-snail" />

<script>
  export let flip = "false";
  export let color = "#8D88BA";
  export let paddingtop = "false";
</script>

<div
  class="snail"
  class:snail--flip={flip === "true"}
  class:snail--padding-top={paddingtop === "true"}
>
  <div
    class="snail__layout-shift"
    class:snail--flip__layout-shift={flip === "true"}
  >
    <svg
      class="snail__snail"
      class:snail--flip__snail={flip === "true"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 96"
    >
      <path
        fill="url(#snail__filter-a)"
        fill-rule="evenodd"
        d="M.767 42.496c1.39-6.522 5.283-12.948 34.537-11.94 31.563 1.088 13.246-59.94 48.523-12.429 18.857 25.397 94.523 30.904 107.803 41.057 8.713 6.66 13.367 24.002 0 26.223-13.658 2.27-47.534-4.871-62.516 4.603C98.31 109.49 57.871 76.045 27.657 66.417-3.463 56.499-.635 49.065.767 42.497Z"
        clip-rule="evenodd"
      />
      <defs>
        <linearGradient
          id="snail__filter-a"
          x1="190"
          x2="100"
          y1="80"
          y2="160"
          gradientTransform="matrix(-1 0 0 1 200 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EBEAF3" />
          <stop offset="1" stop-color="#EBEAF3" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
    <svg
      class="snail__hexagon"
      class:snail--flip__hexagon={flip === "true"}
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
</div>

<style lang="scss">
  @use "./styles/variables";

  $width: 1210px;
  $layout-width: variables.$ts-tablet-max - (2 * variables.$ts-spacing-3);
  $x-margin: -470px;

  .snail {
    position: relative;
    display: flex;
    justify-content: flex-start;
    z-index: -1;

    &--padding-top {
      .snail__layout-shift {
        padding-top: 40px;
      }
    }

    &__layout-shift {
      position: absolute;
      width: $width;
      left: $x-margin;
      top: -300px;
      height: 580px;
    }

    &__snail {
      position: absolute;
      z-index: -2;
      width: $width;
      left: 0;
      bottom: 0px;
    }

    &__hexagon {
      position: absolute;
      z-index: 1;
      height: 800px;
      left: -310px;
      bottom: 0px;
    }

    &--flip {
      &__layout-shift {
        right: $x-margin;
        left: unset;
      }

      &__snail {
        transform: scaleX(-1);
      }

      &__hexagon {
        left: 400px;
      }
    }

    @media screen and (min-width: variables.$ts-tablet-min) and (max-width: variables.$ts-tablet-max) {
      $x-margin: -500px;

      &__layout-shift {
        transform: scale(0.75);
        transform-origin: center;
        left: $x-margin;
        top: -250px;
      }

      &--flip {
        &__layout-shift {
          right: $x-margin;
          left: unset;
        }
      }
    }

    @media screen and (max-width: variables.$ts-mobile-max) {
      $x-margin: -540px;

      &__layout-shift {
        transform: scale(0.5);
        transform-origin: center;
        left: $x-margin;
        top: -250px;
      }

      &--flip {
        &__layout-shift {
          right: $x-margin;
          left: unset;
        }
      }
    }
  }
</style>

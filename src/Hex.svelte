<svelte:options tag="ts-hex" />

<script>
  export let width = 64;
  export let fill = "#312783";
  export let shadow = "false";
  export let rotation = 4;
  export let opacity = 1;
</script>

<div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={Number(width) * 3}
    viewBox="0 0 45.385 49.227"
  >
    {#if shadow === "true"}
      <defs>
        <filter
          id="hex__filter"
          width="3.095"
          height="2.814"
          x="-1.047"
          y="-.907"
          color-interpolation-filters="sRGB"
        >
          <feGaussianBlur result="blur" stdDeviation="6.4 6.4" />
        </filter>
      </defs>
    {/if}
    <g {fill}>
      <path
        fill-opacity={Number(opacity)}
        style:transform={`rotate(${Number(rotation)}deg)`}
        d="M22.692 16.933 15.36 12.7V4.233L22.692 0l7.333 4.233V12.7z"
      />
      {#if shadow === "true"}
        <path
          fill-opacity={0.4 * Number(opacity)}
          style:transform={`rotate(${Number(rotation)}deg)`}
          d="m22.692 33.867-7.332-4.234v-8.466l7.332-4.234 7.333 4.234v8.466z"
          filter={shadow === "true" ? "url(#hex__filter)" : ""}
        />
      {/if}
    </g>
  </svg>
</div>

<style lang="scss">
  svg {
    path {
      transform-origin: center;
      transform-box: fill-box;
    }
  }
</style>

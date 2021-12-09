<svelte:options tag="svelte-picture" />

<script>
  export let style;
  export let src;
  export let alt;
</script>

<picture class={style}>
  <source
    srcSet={`../img/customers/${src}@2x.png 2x, ../img/customers/${src}.png 1x`}
  />
  <img loading="lazy" src={`../img/customers/${src}.png`} alt={alt} />
</picture>

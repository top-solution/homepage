<svelte:options tag="svelte-picture" />

<script>
  export let base;
  export let src;
  export let alt;
</script>

<picture>
  <source
    srcSet={`../img/${base}/${src}@2x.png 2x, ../img/${base}/${src}.png 1x`}
  />
  <img loading="lazy" src={`../img/${base}/${src}.png`} alt={alt} />
</picture>

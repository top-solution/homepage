<svelte:options tag="ts-picture" />

<script>
  export let base = "";
  export let src = "";
  export let alt = "";
  export let extension = "png";
</script>

{#if extension === "png"}
  <picture class="spacing-margin-8">
    <source
      srcSet={`../img/${base}/${src}@2x.${extension} 2x, ../img/${base}/${src}.${extension} 1x`}
    />
    <img loading="lazy" src={`../img/${base}/${src}.${extension}`} {alt} />
  </picture>
{/if}
{#if extension === "svg"}
  <img class="spacing-margin-8" loading="lazy" src={`../img/${base}/${src}.${extension}`} {alt} />
{/if}

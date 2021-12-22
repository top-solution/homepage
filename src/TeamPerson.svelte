<svelte:options tag="ts-team-person" />

<script>
  import Blob from "./Blob.svelte";
  import { onMount } from "svelte";

  export let src;
  export let name;
  export let companyrole;

  let personSrc;

  onMount(async () => {
    personSrc = src
      ? src
      : `img/team/${`${name}`.toLowerCase().replace(/\s/g, "-")}.jpg`;
  });

  console.log(src, personSrc);
</script>

<div class="team-person">
  <ts-blob interactive="false" shape="hexagon" src={personSrc}>
    <div class="team-person__image-sizer" />
  </ts-blob>
  <div class="team-person__name">{name}</div>
  {#if companyrole}
    <div class="team-person__role">{companyrole}</div>
  {/if}
  <slot />
</div>

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  .team-person {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 280px;
    margin: 0 var(--ts-spacing-3);
  }

  .team-person__name,
  .team-person__role {
    font-weight: 300;
    font-size: 24px;
  }

  .team-person__name {
    margin-top: var(--ts-spacing-3);
  }

  .team-person__role {
    font-weight: 500;
  }

  .team-person__image-sizer {
    width: 220px;
    height: 220px;
  }

  ts-blob {
    max-width: 280px;
    max-height: 280px;
  }
</style>

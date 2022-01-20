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
</script>

<div class="team-person">
  <ts-blob interactive="false" shape="hexagon" src={personSrc}>
    <!-- <div class="team-person__image-sizer" /> -->
  </ts-blob>
  <div class="team-person__name body-2">{name}</div>
  {#if companyrole}
    <div class="team-person__role body-2"><b>{companyrole}</b></div>
  {/if}
  <slot />
</div>

<style lang="scss">
  @use "./styles/variables";

  @import "./styles/main.scss";

  .team-person {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 variables.$ts-spacing-1;
  }

  .team-person__name,
  .team-person__role {
    text-align: center;
  }

  .team-person__name {
    margin-top: variables.$ts-spacing-3;
  }

  .team-person__role {
    font-weight: 500;
  }

  ts-blob {
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    .team-person {
      margin: 0 variables.$ts-spacing-1;
    }

    .team-person__name,
    .team-person__role {
      font-size: 15px;
    }
  }
</style>

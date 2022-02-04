<svelte:options tag="ts-top-banner" />

<script>
  export let title = "";
  export let title2 = false;
  export let azure = "";
  export let mobilealignleft = "";
</script>

<div
  class="top-banner"
  class:top-banner--azure={Boolean(azure)}
  class:top-banner--mobile-align-left={Boolean(mobilealignleft)}
>
  <div class="top-banner__content">
    <div class="top-banner__external">
      <slot name="external" />
    </div>
    <h1
      class:title-1={!title2}
      class:title-2={title2}
      class="top-banner__title"
    >
      {title}
    </h1>
    <div class="top-banner__text">
      <slot name="text" />
    </div>
    <div class="top-banner__actions">
      <slot name="actions" />
    </div>
  </div>
</div>

<style lang="scss">
  @use "./styles/variables";

  @import "./styles/main.scss";

  .top-banner {
    position: relative;
    background-color: variables.$ts-blue-background;
    color: variables.$ts-blue-color;
  }

  .top-banner.top-banner--azure {
    background-color: variables.$ts-azure-color-light;
  }

  .top-banner__content {
    box-sizing: border-box;
    max-width: variables.$ts-tablet-max;
    margin: auto;
    padding: variables.$ts-spacing-4 variables.$ts-spacing-8;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .top-banner__title {
    text-align: center;

    &,
    &.title-1 {
      margin: 0 0 variables.$ts-spacing-3 0;
    }
  }

  .top-banner__text {
    max-width: variables.$ts-mobile-max;
    margin: 0 auto variables.$ts-spacing-3;
  }

  .top-banner__actions {
    margin: variables.$ts-spacing-9 auto variables.$ts-spacing-5;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .top-banner__external {
    max-width: variables.$ts-tablet-max;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: variables.$ts-mobile-max) {
    .top-banner__title {
      &.title-1 {
        margin-top: variables.$ts-spacing-9;
        text-align: center;
      }
      &.title-2 {
        margin-top: variables.$ts-spacing-4;
        text-align: left;
        max-width: 50%;
      }
    }

    .top-banner__content {
      align-items: flex-start;
      padding: variables.$ts-spacing-5 variables.$ts-spacing-4;
    }

    .top-banner__text {
      max-width: 80%;
      margin-left: 0;
    }

    .top-banner.top-banner--mobile-align-left .top-banner__text,
    .top-banner.top-banner--mobile-align-left .top-banner__title {
      &.title-2 {
        text-align: left;
      }
    }
  }

  @media screen and (min-width: variables.$ts-mobile-max) {
    .top-banner__text {
      text-align: center;
    }
  }
</style>

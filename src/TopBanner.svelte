<svelte:options tag="ts-top-banner" />

<script>
  export let title = "";
  export let azure = "";
  export let mobilealignleft = "";
</script>

<div
  class="top-banner"
  class:top-banner--azure={Boolean(azure)}
  class:top-banner--mobile-align-left={Boolean(mobilealignleft)}
>
  <div class="top-banner__content">
    <h1 class="top-banner__title">{title}</h1>
    <div class="top-banner__text">
      <slot name="text" />
    </div>
    <div class="top-banner__actions">
      <slot name="actions" />
    </div>
  </div>
</div>

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  .top-banner {
    background-color: var(--ts-blue-background);

    color: var(--ts-blue-color);
  }

  .top-banner.top-banner--azure {
    background-color: var(--ts-azure-color-light);
  }

  .top-banner__content {
    box-sizing: border-box;
    max-width: 960px;
    margin: auto;
    padding: var(--ts-spacing-4) var(--ts-spacing-8);
  }

  .top-banner__title {
    margin: 0 0 var(--ts-spacing-3) 0;
  }

  .top-banner__text {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 39px;
    text-align: center;
    max-width: 600px;
    margin: 0 auto var(--ts-spacing-3);
  }

  .top-banner__actions {
    margin: var(--ts-spacing-9) auto var(--ts-spacing-5);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (max-width: 900px) {
    .top-banner__title {
      font-size: 28px;
    }

    .top-banner__text {
      font-size: 25px;
    }

    .top-banner.top-banner--mobile-align-left .top-banner__text,
    .top-banner.top-banner--mobile-align-left .top-banner__title {
      text-align: left;
    }
  }
</style>

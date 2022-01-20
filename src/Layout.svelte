<svelte:options tag="ts-layout" />

<div class="layout">
  <slot name="external" />
  <div class="layout__content">
    <slot />
  </div>
</div>

<style lang="scss">
  @use "./styles/variables";

  @import "./styles/main.scss";

  .layout {
    max-width: variables.$ts-tablet-max;
    margin: 0 auto;
    padding: 0 variables.$ts-spacing-3;
    position: relative;
  }

  .layout__content {
    min-height: calc(100vh - 621px);
  }
</style>

<svelte:options tag="ts-layout" />

<div class="layout">
  <slot name="external" />
  <div class="layout__content">
    <slot />
  </div>
</div>

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  .layout {
    max-width: var(--ts-tablet-max);
    margin: 0 auto;
    padding: 0 var(--ts-spacing-3);
    position: relative;
  }

  .layout__content {
    min-height: calc(100vh - 621px);
  }
</style>

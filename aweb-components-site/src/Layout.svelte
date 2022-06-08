<svelte:options tag="ts-layout" />

<div class="layout">
  <slot name="external" />
  <div class="layout__content">
    <slot />
  </div>
</div>

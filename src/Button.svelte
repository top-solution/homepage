<svelte:options tag="ts-button" />

<script>
  export let variant = "primary"; // "primary" | "secondary" | "outlined"
  export let component = null; // null | "a" | "button"

  export let href;
  export let type;
  export let icon;
</script>

{#if component === null || component === "a"}
  <a
    class="button"
    class:button--primary={variant === "primary"}
    class:button--secondary={variant === "secondary"}
    class:button--outlined={variant === "outlined"}
    class:button--icon={icon === true}
    {href}
  >
    <slot />
    {#if variant === "outlined"}
      <img
        class="button__icon"
        src="../img/icons/rightArrow.svg"
        alt="arrow icon"
        width="16"
        height="16"
      />
    {/if}
  </a>
{/if}
{#if component === "button"}
  <button
    class="button"
    {type}
    class:button--primary={variant === "primary"}
    class:button--secondary={variant === "secondary"}
    class:button--outlined={variant === "outlined"}
    class:button--icon={icon === true}
  >
    <slot />
    {#if variant === "outlined"}
      <img
        class="button__icon"
        src="../img/icons/rightArrow.svg"
        alt="arrow icon"
        width="16"
        height="16"
      />
    {/if}
  </button>
{/if}

<style lang="scss">
  @use "./styles/variables";

  @import "./styles/main";

  .button {
    user-select: none;
  }

  .button--primary {
    color: white;
    background-color: variables.$ts-blue-color;
  }

  .button--primary:hover {
    background-color: variables.$ts-blue-color-light;
  }

  .button--secondary {
    color: variables.$ts-blue-color;
    border: 1px solid transparent;
    background-color: variables.$ts-azure-color;
  }

  .button--secondary:hover {
    color: variables.$ts-blue-color;
    border-color: variables.$ts-blue-color;
    background-color: variables.$ts-azure-color-light;
  }

  .button--primary,
  .button--secondary {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
      rgba(0, 0, 0, 0.14) 0px 4px 5px 0px,
      rgba(240, 177, 177, 0.12) 0px 1px 10px 0px;
  }

  .button--outlined {
    color: variables.$ts-blue-color;
    border: 1px solid variables.$ts-blue-color;
    background-color: transparent;
  }

  .button--icon {
    padding-left: variables.$ts-spacing-1;
    padding-right: variables.$ts-spacing-1;
  }

  .button__icon {
    width: 0;
    margin-left: 0;
    opacity: 0;
    transition: width variables.$ts-transition-timing-quick
        variables.$ts-transition-function-default,
      opacity variables.$ts-transition-timing-quick
        variables.$ts-transition-function-default,
      margin-left variables.$ts-transition-timing-quick
        variables.$ts-transition-function-default;
  }

  .button--outlined:hover .button__icon {
    width: 16px;
    opacity: 1;
    margin-left: 12px;
  }
</style>

<svelte:options tag="ts-button" />

<script>
  export let variant = "primary"; // "primary" | "secondary" | "outlined"
  export let component = null; // null | "a" | "button"
  export let small = false; // false | true

  export let href = "";
  export let type = "";
  export let icon = "";
</script>

{#if component === null || component === "a"}
  <a
    class="button"
    class:button--primary={variant === "primary"}
    class:button--secondary={variant === "secondary"}
    class:button--outlined={variant === "outlined"}
    class:button--icon={icon === true}
    class:button--small={small === true || small === "true"}
    {href}
  >
    <slot />
    {#if variant === "outlined"}
      <svg
        class="button__icon"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
      </svg>
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
    class:button--small={small === true}
  >
    <slot />
    {#if variant === "outlined"}
      <svg
        class="button__icon"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
      </svg>
    {/if}
  </button>
{/if}

<style lang="scss">
  @use "./styles/variables";

  @import "./styles/main";

  .button {
    align-items: center;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    height: 42px;
    justify-content: center;
    letter-spacing: 0.46px;
    line-height: 26px;
    padding: 8px 22px;
    text-transform: uppercase;
    white-space: nowrap;
    user-select: none;

    &--primary,
    &--secondary {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
        rgba(0, 0, 0, 0.14) 0px 4px 5px 0px,
        rgba(240, 177, 177, 0.12) 0px 1px 10px 0px;
    }

    &--primary {
      border: 0;
      color: white;
      background-color: #211a58;

      &:hover {
        background-color: variables.$ts-blue-color-light;
      }
    }

    &--secondary {
      color: variables.$ts-blue-color;
      border: 1px solid transparent;
      background-color: variables.$ts-azure-color;

      &:hover {
        color: variables.$ts-blue-color;
        border-color: variables.$ts-blue-color;
        background-color: variables.$ts-azure-color-light;
      }
    }

    &--outlined {
      color: variables.$ts-blue-color;
      border: 1px solid variables.$ts-blue-color;
      background-color: transparent;
    }

    &--icon {
      padding-left: variables.$ts-spacing-1;
      padding-right: variables.$ts-spacing-1;
    }

    &__icon {
      width: 0;
      margin-left: 0;
      opacity: 0;
      transition: width variables.$ts-transition-timing-quick
          variables.$ts-transition-function-default,
        opacity variables.$ts-transition-timing-quick
          variables.$ts-transition-function-default,
        margin-left variables.$ts-transition-timing-quick
          variables.$ts-transition-function-default;
      fill: variables.$ts-blue-color;
    }

    &--outlined:hover &__icon {
      width: 16px;
      opacity: 1;
      margin-left: 12px;
    }

    &--small {
      height: 30px;
      padding: 4px 10px;
      color: variables.$ts-blue-color-light;
      border: 1px solid rgba(63, 81, 181, 0.5);

      &__icon {
        fill: variables.$ts-blue-color-light;
      }
    }
  }
</style>

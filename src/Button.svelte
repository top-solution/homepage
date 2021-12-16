<svelte:options tag="ts-button" />

<script>
  import debounce from "lodash.debounce";

  export let variant = "primary"; // "primary" | "secondary" | "outlined"
  export let component = null; // null | "a" | "button" | "label"

  export let href;
  export let type;
  export let htmlFor;
</script>

{#if component === null || component === "a"}
  <a
    class="button"
    class:button--primary={variant === "primary"}
    class:button--secondary={variant === "secondary"}
    class:button--outlined={variant === "outlined"}
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
{#if component === "label"}
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label
    class="button"
    class:button--primary={variant === "primary"}
    class:button--secondary={variant === "secondary"}
    for={htmlFor}
    {href}
  >
    <slot />
  </label>
{/if}

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  .button {
    box-sizing: border-box;
    height: 42px;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0.46px;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 0;

    transition: background-color var(--ts-transition-timing-quick)
        var(--ts-transition-function-default),
      border-color var(--ts-transition-timing-quick)
        var(--ts-transition-function-default);
  }

  .button--primary {
    color: white;
    background-color: var(--ts-blue-color);
  }

  .button--primary:hover {
    background-color: var(--ts-blue-color-light);
  }

  .button--secondary {
    color: var(--ts-blue-color);
    border: 1px solid transparent;
    background-color: var(--ts-azure-color);
  }

  .button--secondary:hover {
    color: var(--ts-blue-color);
    border-color: var(--ts-blue-color);
    background-color: var(--ts-azure-color-light);
  }

  .button--primary,
  .button--secondary {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
      rgba(0, 0, 0, 0.14) 0px 4px 5px 0px,
      rgba(240, 177, 177, 0.12) 0px 1px 10px 0px;
  }

  .button--outlined {
    color: var(--ts-blue-color);
    border: 1px solid var(--ts-blue-color);
    background-color: transparent;
  }

  .button--outlined:hover {
    background-color: white;
  }

  .button__icon {
    width: 0;
    margin-left: 0;
    opacity: 0;
    transition: width var(--ts-transition-timing-quick)
        var(--ts-transition-function-default),
      opacity var(--ts-transition-timing-quick)
        var(--ts-transition-function-default),
      margin-left var(--ts-transition-timing-quick)
        var(--ts-transition-function-default);
  }

  .button--outlined:hover .button__icon {
    width: 16px;
    opacity: 1;
    margin-left: 12px;
  }
</style>

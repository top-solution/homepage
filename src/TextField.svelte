<svelte:options tag="ts-textfield" />

<script>
  import { createEventDispatcher } from "svelte";
  import { get_current_component } from "svelte/internal";

  export let label = "";
  export let value = "";
  export let error = null;
  export let type = "text";
  export let name = "";

  export let textarea = false;
  export let rows = "3";

  const component = get_current_component();
  const svelteDispatch = createEventDispatcher();

  const dispatch = (name, detail) => {
    svelteDispatch(name, detail);
    component.dispatchEvent &&
      component.dispatchEvent(new CustomEvent(name, { detail }));
  };

  let focused;
</script>

<div
  class="ts-textfield"
  class:ts-textfield--focused={focused}
  class:ts-textfield--shrink={focused || (value && value.length > 0)}
  class:ts-textfield--error={error && error.length > 0}
>
  <label for="outlined-basic">{label}</label>
  <div class="ts-textfield__input">
    {#if textarea}
      <textarea
        aria-invalid="false"
        id="outlined-basic"
        value={value ?? ""}
        {name}
        {rows}
        on:focus={() => (focused = true)}
        on:blur={() => (focused = false)}
        on:change={(e) => {
          component.value = e.target.value;
          dispatch("change", {});
        }}
        on:keyup={(e) => {
          component.value = e.target.value;
          dispatch("keyup");
        }}
      />
    {:else}
      <input
        aria-invalid="false"
        id="outlined-basic"
        {type}
        {name}
        value={value ?? ""}
        on:focus={() => (focused = true)}
        on:blur={() => (focused = false)}
        on:change={(e) => {
          component.value = e.target.value;
          dispatch("change", {});
        }}
        on:keyup={(e) => {
          component.value = e.target.value;
          dispatch("keyup");
        }}
      />
    {/if}
    <fieldset aria-hidden="true" class="ts-textfield__fieldset">
      <legend class="css-173wfxe"><span>{label}</span></legend>
    </fieldset>
  </div>
</div>

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  .ts-textfield {
    width: 25ch;
    display: inline-flex;
    flex-direction: column;
    position: relative;
    min-width: 0;
    padding: 0;
    border: 0;
    vertical-align: top;
    width: 100%;
  }

  .ts-textfield label {
    color: rgba(0, 0, 0, 0.6);
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.4375em;
    letter-spacing: 0.00938em;
    padding: 0px;
    display: block;
    transform-origin: left top;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(100% - 24px);
    position: absolute;
    left: 0px;
    top: 0px;
    transform: translate(14px, 16px) scale(1);
    transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    z-index: 1;
    pointer-events: none;
    box-sizing: border-box;
    transform-origin: left center;
  }
  .ts-textfield--shrink label {
    transform: translate(14px, -10px) scale(0.75);
  }
  .ts-textfield--focused label {
    color: var(--ts-blue-color);
    transform: translate(14px, -10px) scale(0.75);
  }
  .ts-textfield--error label {
    color: var(--ts-error);
  }

  .ts-textfield__input input,
  .ts-textfield__input textarea {
    box-sizing: content-box;
    color: black;
    border-color: currentcolor;
    font: inherit;
    letter-spacing: inherit;
    border: 0px none;
    background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
    margin: 0px;
    display: block;
    min-width: 0px;
    width: 100%;
    animation-name: mui-auto-fill-cancel;
    animation-duration: 10ms;
    padding: 16.5px 14px;
    outline: none;
    box-sizing: border-box;
  }

  .ts-textfield__fieldset {
    text-align: left;
    position: absolute;
    inset: -5px 0px 0px;
    margin: 0px;
    padding: 0px 8px;
    pointer-events: none;
    border-radius: inherit;
    border-style: solid;
    border-width: 1px;
    overflow: hidden;
    min-width: 0%;
    border-color: rgba(0, 0, 0, 0.38);
    border-radius: 4px;
  }
  .ts-textfield--shrink .ts-textfield__fieldset {
    border-width: 2px;
  }
  .ts-textfield--focused .ts-textfield__fieldset {
    border-color: var(--ts-blue-color);
    border-width: 2px;
  }
  .ts-textfield--error .ts-textfield__fieldset {
    border-color: var(--ts-error);
    border-width: 2px;
  }

  .ts-textfield__fieldset legend {
    float: unset;
    display: block;
    width: auto;
    padding: 0px;
    height: 11px;
    font-size: 0.75em;
    visibility: hidden;
    max-width: 0.01px;
    transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    white-space: nowrap;
    background-color: #fff;
  }
  .ts-textfield--shrink legend {
    visibility: visible;
    max-width: 100%;
  }

  .ts-textfield__fieldset legend span {
    padding-left: 5px;
    padding-right: 5px;
    display: inline-block;
    visibility: hidden;
  }

  .ts-textfield--shrink legend span {
    padding-left: 5px;
    padding-right: 5px;
    display: inline-block;
  }
</style>

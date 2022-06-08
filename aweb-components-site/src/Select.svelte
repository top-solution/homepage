<svelte:options tag="ts-select" />

<script>
  import { createEventDispatcher } from "svelte";
  import { get_current_component } from "svelte/internal";

  export let label = "";
  export let value = "";
  export let error = null;
  export let name = "";
  export let options = [];

  let menuOpen = false;
  const component = get_current_component();
  const svelteDispatch = createEventDispatcher();

  const dispatch = (name, detail) => {
    svelteDispatch(name, detail);
    component.dispatchEvent &&
      component.dispatchEvent(new CustomEvent(name, { detail }));
  };

  const closeMenu = () => {
    menuOpen = false;
    document.removeEventListener("mousedown", clickOutsideEventListener);
  };

  const clickOutsideEventListener = () => {
    closeMenu();
  };

  let focused;
</script>

<div
  class="ts-select"
  class:ts-select--focused={focused || menuOpen}
  class:ts-select--shrink={focused || menuOpen || (value && value.length > 0)}
  class:ts-select--error={error && error.length > 0}
>
  <label for="outlined-basic">{label}</label>
  <div class="ts-select__input">
    <select
      aria-invalid="false"
      id="outlined-basic"
      {name}
      value={value ?? ""}
      on:focus={() => (focused = true)}
      on:blur={() => {
        focused = false;
        dispatch("blur", {});
      }}
      on:change={(e) => {
        component.value = e.target.value;
        dispatch("change", {});
      }}
      on:keyup={(e) => {
        component.value = e.target.value;
        dispatch("keyup");
      }}
      on:mousedown={(e) => {
        e.preventDefault();
        setTimeout(() => {
          // Wait for the transition to end
          if (menuOpen) {
            document.addEventListener("mousedown", clickOutsideEventListener);
          }
        }, 250);
        menuOpen = true;
      }}
    >
      {#each options as option}
        <option value={option.value}>{option.text}</option>
      {/each}
    </select>
    <img
      class="ts-select__arrow"
      class:ts-select__arrow--open={menuOpen}
      src="img/icons/arrowDropDown.svg"
      alt=""
    />
    <fieldset aria-hidden="true" class="ts-select__fieldset">
      <legend class="css-173wfxe"><span>{label}</span></legend>
    </fieldset>
  </div>
  <div class="ts-select__menu" class:ts-select__menu--open={menuOpen}>
    <ul>
      {#each options as option}
        <li
          on:mousedown={() => {
            component.value = option.value;
            closeMenu();
            dispatch("change", {});
          }}
        >
          {option.text}
        </li>
      {/each}
    </ul>
  </div>
</div>

<style lang="scss">
  @use "./styles/variables";

  @import "./styles/main.scss";

  .ts-select {
    width: 25ch;
    display: inline-flex;
    flex-direction: column;
    position: relative;
    min-width: 0;
    padding: 0;
    border: 0;
    vertical-align: top;
    width: 100%;
    position: relative;

    & label {
      color: rgba(0, 0, 0, 0.6);
      font-family: Roboto, Helvetica, Arial, sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.4375em;
      letter-spacing: 0.00938em;
      padding: 0px;
      display: block;
      transform-origin: center top;
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

    &--shrink {
      label {
        transform: translate(14px, -10px) scale(0.75);
        max-width: 100%;
        background: #fff;
        padding: 0 4px;
      }

      fieldset {
        legend {
          visibility: visible;
        }

        span {
          padding-left: 5px;
          padding-right: 5px;
          display: inline-block;
        }
      }
    }

    &--focused label {
      color: variables.$ts-blue-color;
      transform: translate(14px, -10px) scale(0.75);
    }

    &--focused &__fieldset {
      border-color: variables.$ts-blue-color;
      border-width: 2px;
    }

    &--error label {
      color: variables.$ts-error;
    }

    &--error &__fieldset {
      border-color: variables.$ts-error;
      border-width: 2px;
    }

    &__input select {
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
      -moz-appearance: none; /* Firefox */
      -webkit-appearance: none; /* Safari and Chrome */
      appearance: none;
      cursor: pointer;
    }

    &__arrow {
      width: 26px;
      height: 26px;
      position: absolute;
      right: 16px;
      top: 14px;
      opacity: 0.6;
      pointer-events: none;

      &--open {
        transform: rotate(180deg);
      }
    }

    &__fieldset {
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

      legend {
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

        span {
          padding-left: 5px;
          padding-right: 5px;
          display: inline-block;
          visibility: hidden;
        }
      }
    }

    &__menu {
      border-radius: 2px;
      min-width: 120px;
      transition: opacity 251ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        transform 167ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      transform-origin: 60px 0px;
      background-color: rgb(255, 255, 255);
      color: rgba(0, 0, 0, 0.87);
      border-radius: 4px;
      box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,
        rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
      position: absolute;
      overflow: hidden auto;
      min-height: 16px;
      outline: 0px;
      width: 100%;
      z-index: 10;
      opacity: 0;
      transform: scale(90%, 50%);
      top: 56px;
      pointer-events: none;

      &--open {
        opacity: 1;
        transform: scale(100%, 100%);
        pointer-events: all;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      li {
        color: #000;
        padding: 6px 16px;
        cursor: pointer;
        min-height: 36px;
        vertical-align: middle;

        &:hover {
          background-color: rgba(0, 0, 0, 0.04);
        }
      }
    }
  }
</style>

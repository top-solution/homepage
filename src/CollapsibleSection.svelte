<svelte:options tag="ts-collapsible-section" />

<script>
  import { createEventDispatcher } from "svelte";
  import { get_current_component, onDestroy, onMount } from "svelte/internal";

  export let title = "";
  export let expanded = false;

  let collapsibleElement = null;
  let collapsedElement = null;
  let collapsedElementHeight = null;

  const component = get_current_component();
  const svelteDispatch = createEventDispatcher();

  const dispatch = (name, detail) => {
    svelteDispatch(name, detail);
    component.dispatchEvent &&
      component.dispatchEvent(new CustomEvent(name, { detail }));
  };

  function updateCollapsedElementHeight() {
    setTimeout(() => {
      collapsedElementHeight = collapsedElement.getBoundingClientRect().height;
      dispatch("collapsible-height-change", { height: collapsedElementHeight });
    }, 200);
  }

  onMount(() => {
    window.addEventListener("resize", updateCollapsedElementHeight);

    updateCollapsedElementHeight();
  });

  onDestroy(() => {
    window.removeEventListener(updateCollapsedElementHeight);
  });
</script>

<div
  bind:this={collapsibleElement}
  class="collapsible-section"
  class:collapsible-section--collapsed={!expanded}
>
  <div class="collapsible-section__background">
    <div
      class="collapsible-section-header"
      class:collapsible-section-header--collapsed={!expanded}
      on:mouseup={() => {
        dispatch("expand");
        setTimeout(() => {
          collapsibleElement.scrollIntoView({ behavior: "smooth" });
        }, 100);
        setTimeout(() => {
          collapsibleElement.scrollIntoView({ behavior: "smooth" });
        }, 400);
      }}
    >
      <h5 class="title-5">
        {title}
      </h5>
      <img href="" src="img/icons/expand.svg" alt="" />
    </div>
    <div
      class="collapsible-section__collapsible"
      class:collapsible-section__collapsible--expanded={expanded}
      style={expanded
        ? `max-height: ${collapsedElementHeight}px`
        : "max-height: 0;"}
    >
      <div bind:this={collapsedElement}>
        <slot />
      </div>
    </div>
    <div
      class="collapsible-section__divider"
      class:collapsible-section__divider--collapsed={!expanded}
    >
      <hr />
    </div>
  </div>
</div>

<style lang="scss">
  @use "./styles/variables";

  @import "./styles/main.scss";

  .collapsible-section {
    width: calc(100% + 16px);
    margin-left: -8px;
    display: block;
    padding-top: variables.$ts-spacing-8;
    transition: padding-top variables.$ts-transition-timing-default
      variables.$ts-transition-function-default;

    &--collapsed {
      padding-top: variables.$ts-spacing-1;
      .collapsible-section-header img {
        transform: rotate(0deg);
      }
    }

    &-header {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      padding: variables.$ts-spacing-2 variables.$ts-spacing-1 0;
      background-color: #e3f1fa;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      cursor: pointer;
      transition: background-color variables.$ts-transition-timing-default
        variables.$ts-transition-function-default;

      &--collapsed {
        background-color: transparent;
      }

      & h5 {
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 39px;
        margin: 0;
      }

      & img {
        height: 34px;
        width: 34px;
        margin-bottom: -4px;
        transform: rotate(45deg);
        transition: transform variables.$ts-transition-timing-quick
          variables.$ts-transition-function-default;
      }
    }

    &__divider {
      display: block;
      padding-top: variables.$ts-spacing-1-5;
      background-color: #fff;

      hr {
        border: 0;
        border-top: 1px solid transparent;
        transition: border-color variables.$ts-transition-timing-default
          variables.$ts-transition-function-default;
      }

      &--collapsed hr {
        border-color: variables.$ts-blue-color;
      }
    }

    &__collapsible {
      transition: max-height variables.$ts-transition-timing-default
        variables.$ts-transition-function-default;
      overflow: hidden;
    }

    @media only screen and (max-width: variables.$ts-tablet-max) {
      &-header h5 {
        font-size: 18px;
        line-height: 21px;
        max-width: 150px;
      }
      & img {
        width: 26px;
        height: 26px;
        margin-bottom: 0;
      }
    }
  }
</style>

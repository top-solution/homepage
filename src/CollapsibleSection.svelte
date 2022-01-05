<svelte:options tag="ts-collapsible-section" />

<script>
  import { createEventDispatcher } from "svelte";
  import { get_current_component, onDestroy, onMount } from "svelte/internal";

  export let title = "";
  export let expanded = false;

  let collapsibleHeaderElement = null;
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
  class="collapsible-section"
  class:collapsible-section--collapsed={!expanded}
>
  <div
    bind:this={collapsibleHeaderElement}
    class="collapsible-section-header"
    on:mouseup={() => {
      dispatch("expand");
      setTimeout(() => {
        collapsibleHeaderElement.scrollIntoView({ behavior: "smooth" });
      }, 100);
      setTimeout(() => {
        collapsibleHeaderElement.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }}
  >
    <h5>
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
    <div class="d" bind:this={collapsedElement}>
      <slot />
    </div>
  </div>
  <div class="collapsible-section__divider">
    <hr />
  </div>
</div>

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  * {
    box-sizing: border-box;
  }

  .collapsible-section {
    width: calc(100% + 16px);
    margin-left: -8px;
    display: block;
  }

  .collapsible-section__divider {
    display: block;
    margin-top: var(--ts-spacing-1-5);
  }

  .collapsible-section__divider hr {
    padding: var(--ts-spacing-1) 8px;
    border-top: 1px solid transparent;
    transition: border-color var(--ts-transition-timing-default)
      var(--ts-transition-function-default);
  }

  .collapsible-section--collapsed {
    padding-bottom: var(--ts-spacing-3);
  }

  .collapsible-section--collapsed .collapsible-section__divider hr {
    border-color: var(--ts-blue-color);
  }

  .collapsible-section--collapsed .collapsible-section-header img {
    transform: rotate(0deg);
  }

  .collapsible-section__collapsible {
    transition: max-height var(--ts-transition-timing-default)
      var(--ts-transition-function-default);
    overflow: hidden;
  }

  .collapsible-section-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 8px;
    cursor: pointer;
  }

  .collapsible-section-header h5 {
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 39px;
    margin: 0;
  }

  .collapsible-section-header img {
    height: 34px;
    width: 34px;
    margin-bottom: -4px;
    transform: rotate(45deg);
    transition: transform var(--ts-transition-timing-quick)
      var(--ts-transition-function-default);
  }

  @media only screen and (max-width: 900px) {
    .collapsible-section-header h5 {
      font-size: 18px;
      line-height: 21px;
    }
    .collapsible-section img {
      width: 26px;
      height: 26px;
      margin-bottom: 0;
    }
  }
</style>

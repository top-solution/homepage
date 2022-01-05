<svelte:options tag="ts-collapsible-section" />

<script>
  export let title = "";

  let expanded = false;
</script>

<div
  class="collapsible-section"
  class:collapsible-section--collapsed={!expanded}
>
  <div
    class="collapsible-section-header"
    on:mousedown={() => {
      expanded = !expanded;
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
  >
    <slot />
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
  }

  .collapsible-section__divider {
    display: none;
    padding: var(--ts-spacing-1) 16px;
  }

  .collapsible-section--collapsed {
    padding-bottom: var(--ts-spacing-3);
  }

  .collapsible-section--collapsed .collapsible-section__divider {
    display: block;
  }

  .collapsible-section--collapsed .collapsible-section__divider hr {
    border-top: 1px solid var(--ts-blue-color);
  }

  .collapsible-section--collapsed .collapsible-section-header img {
    transform: rotate(0deg);
  }

  .collapsible-section__collapsible {
    max-height: 0;
    transition: max-height var(--ts-transition-timing-default)
      var(--ts-transition-function-default);
    overflow: hidden;
  }

  .collapsible-section__collapsible.collapsible-section__collapsible--expanded {
    max-height: 400vh;
  }

  .collapsible-section-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 16px;
    cursor: pointer;
  }

  .collapsible-section-header h5 {
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 39px;
    margin: 0;
    max-width: 220px;
  }

  .collapsible-section-header img {
    height: 30px;
    width: 30px;
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
      width: 20px;
      height: 20px;
      margin-bottom: 0;
    }
  }
</style>

<svelte:options tag="ts-pricing-table" />

<script>
  import { createEventDispatcher } from "svelte";
  import { get_current_component, onDestroy, onMount } from "svelte/internal";

  export let title = "";
  export let rows = [];
  export let columns = [];
  export let subcolumns = null;
  export let expanded = null;

  let tableElement = null;
  let headerElement = null;
  let headerSpyElement = null;
  let collapsedElementHeight = 0;

  const stickyHeader = {
    sticky: false,
    width: 0,
  };

  const component = get_current_component();
  const svelteDispatch = createEventDispatcher();

  const dispatch = (name, detail) => {
    svelteDispatch(name, detail);
    component.dispatchEvent &&
      component.dispatchEvent(new CustomEvent(name, { detail }));
  };

  function updateCollapsedElementHeight() {
    setTimeout(() => {
      collapsedElementHeight = tableElement.getBoundingClientRect().height;
      dispatch("collapsible-height-change", { height: collapsedElementHeight });
    }, 200);
  }

  /**
   * Poor man's sticky header, built with javascript & tears.
   * The native position: sticky doesn't work because an ancestor
   * element (body) has overflow-x: hidden. The overflow is vital
   * on this site because all graphical elements (blobs, hexagonx)
   * are absolute-positioned and will be hidden if the screen is
   * too small. Without the overflow on body the would make the page
   * scroll horizontally, which is not acceptable. So here is a
   * custom sticky implementation. At least it should work on
   * Safari...
   */
  function setSticky() {
    if (expanded && tableElement && headerElement && headerSpyElement) {
      const tableRect = tableElement.getBoundingClientRect();
      const headerRect = headerElement.getBoundingClientRect();
      const rect = headerSpyElement?.getBoundingClientRect();

      if (
        tableRect.height + tableRect.y > headerRect.height + 68 &&
        rect.top < 0
      ) {
        stickyHeader.sticky = true;
        stickyHeader.width = rect.width;
        stickyHeader.height = headerRect.height;
      } else {
        stickyHeader.sticky = false;
        stickyHeader.width = 0;
        stickyHeader.height = 1;
      }
    }
  }

  onMount(() => {
    window.addEventListener("scroll", setSticky);
    window.addEventListener("resize", updateCollapsedElementHeight);

    updateCollapsedElementHeight();
  });

  onDestroy(() => {
    window.removeEventListener("scroll", setSticky);
    window.removeEventListener(updateCollapsedElementHeight);
  });
</script>

<ts-collapsible-section
  class="pricing-table"
  class:pricing-table--subcolumns={Boolean(subcolumns)}
  {expanded}
  on:expand={() => {
    dispatch("expand");
  }}
  {title}
>
  <div class="pricing-table__table" bind:this={tableElement}>
    <div
      bind:this={headerElement}
      class="pricing-table__header"
      style={stickyHeader.sticky && expanded
        ? `position: fixed; top: 0; width: ${stickyHeader.width}px; background-color: #e3f1fa;`
        : ""}
    >
      <div class="pricing-table__header__row">
        <div class="pricing-table__col" />
        {#each columns as column, i}
          <div
            class="pricing-table__col"
            class:pricing-table__last-col={subcolumns &&
              Number(i) !== columns.length - 1}
            colspan={subcolumns ? subcolumns.length : undefined}
          >
            <span class="pricing-table__col__text">
              {column}
            </span>
          </div>
        {/each}
      </div>
      {#if subcolumns}
        <div class="pricing-table__subheader__row">
          <div class="pricing-table__col" />
          {#each columns as column, i}
            {#each subcolumns as subColumn, j}
              <div
                class="pricing-table__col"
                class:pricing-table__last-col={Number(i) !==
                  columns.length - 1 &&
                  columns.length &&
                  Number(j) === subcolumns.length - 1}
              >
                <span class="pricing-table__col__text">
                  {subColumn}
                </span>
              </div>
            {/each}
          {/each}
        </div>
      {/if}
    </div>
    <div
      bind:this={headerSpyElement}
      style={`width: 100%; height: ${stickyHeader.height}px;`}
    />
    <div class="pricing-table__body">
      {#each rows as row}
        <div class="pricing-table__body__row">
          {#each row as column, i}
            <div
              class="pricing-table__col pricing-table__body__col"
              class:pricing-table__last-col={subcolumns &&
                Number(i) === subcolumns.length}
            >
              {#if column === true}
                <img src="img/icons/check-true.svg" alt="SI" />
              {:else if column === false}
                <img src="img/icons/check-false.svg" alt="NO" />
              {:else}
                {column}
              {/if}
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </div>
  <div class="pricing-table__slot">
    <slot />
  </div>
</ts-collapsible-section>

<style lang="scss">
  @use "../styles/variables";

  @import "../styles/main.scss";

  .pricing-table {
    &__table {
      font-size: 18px;
      border-collapse: collapse;

      padding: variables.$ts-spacing-1 variables.$ts-spacing-3;
    }

    &__subheader__row {
      font-size: 15px;
    }

    &__header {
      font-size: 24px;
      text-transform: uppercase;
      border-bottom: 1px solid black;

      .pricing-table__col {
        font-weight: 500;
        text-align: center;
        border-right: 0;
        border-left: 0;
        padding: 0;
      }

      &__col__text {
        padding: 4px;
        box-sizing: border-box;
        border-radius: 4px;
      }
    }

    &__header__row,
    &__subheader__row,
    &__body__row {
      display: flex;
    }

    &__col {
      flex: 1 1 0;
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;

      &:first-child {
        flex: 0 0 30%;
        justify-content: flex-start;
        text-align: left;
      }

      img {
        width: 30px;
      }
    }

    &__body__col {
      border-bottom: 1px solid #acacac;

      &:first-child {
        font-weight: 300;
        text-align: left;
      }
    }

    &__last-col {
      border-right: 1px solid #000;
    }

    &__slot {
      background: #fff;
      padding: variables.$ts-spacing-10 variables.$ts-spacing-3;
    }

    @media only screen and (min-width: variables.$ts-mobile-max) {
      &__header__row &__col {
        height: variables.$ts-spacing-9;
      }

      &--subcolumns &__header__row &__col {
        height: 54px;
      }

      &__subheader__row &__col {
        height: variables.$ts-spacing-4;
      }

      &__col {
        height: 68px;
      }
    }

    @media only screen and (max-width: variables.$ts-mobile-max) {
      &__header {
        font-size: 15px;
        text-transform: none;
        padding: variables.$ts-spacing-1 0 variables.$ts-spacing-2;
      }

      &__col {
        font-weight: normal;
        font-size: 15px;
        padding: variables.$ts-spacing-1 0;

        img {
          width: 20px;
          height: 20px;
        }
      }
    }

    @media only screen and (min-width: variables.$ts-tablet-min) and (max-width: variables.$ts-tablet-max) {
      &__header {
        text-transform: none;
        font-size: 18px;

        &__col {
          height: 32px;
        }
      }

      &__col img {
        width: 20px;
        height: 20px;
      }
    }
  }
</style>

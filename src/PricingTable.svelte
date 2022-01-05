<svelte:options tag="ts-pricing-table" />

<script>
  import { createEventDispatcher } from "svelte";
  import { get_current_component } from "svelte/internal";

  export let title = "";
  export let rows = [];
  export let columns = [];
  export let subcolumns = null;
  export let expanded = null;

  const component = get_current_component();
  const svelteDispatch = createEventDispatcher();

  const dispatch = (name, detail) => {
    svelteDispatch(name, detail);
    component.dispatchEvent &&
      component.dispatchEvent(new CustomEvent(name, { detail }));
  };
</script>

<ts-collapsible-section
  class="pricing-table"
  class:pricing-table--subcolumns={Boolean(subcolumns)}
  {expanded}
  on:expand={() => {
    dispatch("expand");
  }}
  on:collapsible-height-change={(e) => {
    dispatch("collapsible-height-change", e.detail);
  }}
  {title}
>
  <div class="pricing-table__table">
    <div class="pricing-table__header">
      <div class="pricing-table__header__row">
        <div class="pricing-table__col" />
        {#each columns as column, i}
          <div
            class="pricing-table__col"
            class:pricing-table__last-col={subcolumns &&
              Number(i) !== columns.length - 1}
            colspan={subcolumns ? subcolumns.length : undefined}
          >
            {column}
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
                {subColumn}
              </div>
            {/each}
          {/each}
        </div>
      {/if}
    </div>
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
  <slot />
</ts-collapsible-section>

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  * {
    box-sizing: border-box;
  }

  .pricing-table__table {
    width: 100%;
    font-size: 18px;
    border-collapse: collapse;
  }

  .pricing-table__subheader__row {
    font-size: 15px;
  }

  .pricing-table__header .pricing-table__col {
    font-weight: 500;
    text-align: center;
    border-right: 0;
    border-left: 0;
    padding: 0;
  }

  .pricing-table__header {
    font-size: 24px;
    text-transform: uppercase;
    border-bottom: 1px solid black;
  }

  .pricing-table__header__row,
  .pricing-table__subheader__row,
  .pricing-table__body__row {
    display: flex;
  }

  .pricing-table__col {
    flex: 1 1 0;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  .pricing-table__col:first-child {
    flex: 0 0 30%;
    justify-content: flex-start;
    text-align: left;
  }

  .pricing-table__col img {
    width: 30px;
  }

  .pricing-table__body__col {
    border-bottom: 1px solid #acacac;
  }

  .pricing-table__body__col:first-child {
    font-weight: 300;
    text-align: left;
  }

  .pricing-table__col.pricing-table__last-col {
    border-right: 1px solid #000;
  }

  @media only screen and (min-width: 900px) {
    .pricing-table__header__row .pricing-table__col {
      height: var(--ts-spacing-9);
    }

    .pricing-table--subcolumns .pricing-table__header__row .pricing-table__col {
      height: 54px;
    }

    .pricing-table__subheader__row .pricing-table__col {
      height: var(--ts-spacing-4);
    }

    .pricing-table__col {
      height: 68px;
    }
  }

  @media only screen and (max-width: 900px) {
    .pricing-table__header {
      font-size: 15px;
      text-transform: none;
      padding: var(--ts-spacing-1) 0 var(--ts-spacing-2);
    }

    .pricing-table__col {
      font-weight: normal;
      font-size: 15px;
    }

    .pricing-table__col img {
      width: 20px;
      height: 20px;
    }

    .pricing-table__col {
      padding: var(--ts-spacing-1) 0;
    }
  }
</style>

<svelte:options tag="ts-pricing-table" />

<script>
  import { onMount } from "svelte";

  export let title = "";
  export let rows = [];
  export let columns = [];
  export let subcolumns = null;

  let expanded = false;

  onMount(() => {
    console.log(subcolumns);
  });
</script>

<div class="pricing-table" class:pricing-table--collapsed={!expanded}>
  <div
    class="pricing-table-header"
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
    class="pricing-table__collapsible"
    class:pricing-table__collapsible--expanded={expanded}
  >
    <table>
      <thead>
        <tr>
          <td />
          {#each columns as column}
            <td colspan={subcolumns ? subcolumns.length : undefined}
              >{column}</td
            >
          {/each}
        </tr>
        {#if subcolumns}
          <tr class="pricing-table__subheader">
            <td />
            {#each columns as column, i}
              {#each subcolumns as subColumn, j}
                <td
                  class:pricing-table__last-td-col={Number(i) !==
                    columns.length - 1 &&
                    columns.length &&
                    Number(j) === subcolumns.length - 1}>{subColumn}</td
                >
              {/each}
            {/each}
          </tr>
        {/if}
      </thead>
      <tbody>
        {#each rows as row}
          <tr>
            {#each row as column, i}
              <td
                class:pricing-table__last-td-col={subcolumns &&
                  Number(i) === subcolumns.length}
              >
                {#if column === true}
                  <img src="img/icons/check-true.svg" alt="SI" />
                {:else if column === false}
                  <img src="img/icons/check-false.svg" alt="NO" />
                {:else}
                  {column}
                {/if}
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
    <slot />
  </div>
</div>

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  .pricing-table--collapsed {
    padding-bottom: var(--ts-spacing-3);
    border-bottom: 1px solid var(--ts-blue-color);
  }

  .pricing-table--collapsed .pricing-table-header img {
    transform: rotate(0deg);
  }

  .pricing-table__collapsible {
    max-height: 0;
    transition: max-height var(--ts-transition-timing-default)
      var(--ts-transition-function-default);
    overflow: hidden;
  }

  .pricing-table__collapsible.pricing-table__collapsible--expanded {
    max-height: 400vh;
  }

  .pricing-table-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .pricing-table-header h5 {
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 39px;
    margin: 0;
    max-width: 220px;
  }

  .pricing-table-header img {
    height: 30px;
    width: 30px;
    cursor: pointer;
    transform: rotate(45deg);
    transition: transform var(--ts-transition-timing-quick)
      var(--ts-transition-function-default);
  }

  table {
    width: 100%;
    font-size: 18px;
    border-collapse: collapse;
  }

  .pricing-table__subheader {
    font-size: 15px;
  }

  .pricing-table td {
    height: var(--ts-spacing-9);
    font-weight: 500;
    text-align: center;
    border-right: 0;
    border-left: 0;
    padding: 0;
  }

  .pricing-table thead {
    font-size: 24px;
    text-transform: uppercase;
    margin-bottom: 1px solid var(--ts-blue-color);
  }

  .pricing-table thead td {
    height: 30px;
  }

  .pricing-table thead tr:last-child td {
    border-bottom: 1px solid #000;
  }

  .pricing-table tbody td {
    border-bottom: 1px solid #acacac;
  }

  .pricing-table td:first-child {
    font-weight: 300;
    text-align: left;
  }

  .pricing-table td.pricing-table__last-td-col {
    border-right: 1px solid #000;
  }

  @media only screen and (max-width: 900px) {
    .pricing-table-header h5 {
      font-size: 18px;
      line-height: 21px;
    }
    .pricing-table thead {
      font-size: 15px;
      text-transform: none;
    }
    .pricing-table td {
      max-width: 56px;
      font-weight: normal;
      font-size: 15px;
    }
    .pricing-table img {
      width: 20px;
      height: 20px;
    }
  }
</style>

<svelte:options tag="svelte-customers" />

<div class="flex-container">
  <div class="title">I NOSTRI CLIENTI</div>
</div>

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  .flex-container {
    display: flex;
    justify-content: center;
    margin: 70px 0;
  }

  .title {
    font-size: 36px;
    line-height: 42px;
    color: var(--ts-blue-color);
    margin-bottom: 70px;
  }
</style>

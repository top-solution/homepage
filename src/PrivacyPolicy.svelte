<svelte:options tag="ts-privacy-policy" />

<script>
  import Layout from "./Layout.svelte";
</script>

<ts-layout class="privacy-policy">
  <div class="privacy-policy__container">Privacy policy page</div>
</ts-layout>

<style lang="scss" global>
  @use "./styles/variables";

  @import "./styles/main.scss";

  .privacy-policy {
    color: variables.$ts-blue-color;

    &__container {
      padding: variables.$ts-spacing-5;
      margin-top: variables.$ts-spacing-10;
      background-color: variables.$ts-azure-color-light;
      border: 1px solid variables.$ts-azure-color;
      border-radius: 4px;
    }
  }
</style>

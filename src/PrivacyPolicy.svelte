<svelte:options tag="ts-privacy-policy" />

<script>
  import Layout from "./Layout.svelte";
</script>

<ts-layout class="privacy-policy">
  <div>Privacy policy page</div>
</ts-layout>

<style lang="scss" global>
  @use "./styles/variables";

  @import "./styles/main.scss";

  .privacy-policy {
    color: variables.$ts-blue-color;
  }
</style>

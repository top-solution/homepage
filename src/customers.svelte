<svelte:options tag="svelte-customers" />

<script>
  import sveltePicture from "../public/build/picture.js";
</script>

<div class="component-container">
  <div class="title">I NOSTRI CLIENTI</div>
  <div class="flex-container">
    <svelte-picture style="img" name="a" scr="a" />
  </div>
</div>

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  .flex-container {
    display: flex;
    justify-content: center;
    margin: 70px 0;
    flex-wrap: wrap;
  }

  .img {
    flex: 0 0 20%;
  }

  .title {
    font-size: 36px;
    line-height: 42px;
    color: var(--ts-blue-color);
    margin-bottom: 70px;
  }
</style>

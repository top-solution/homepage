<svelte:options tag="ts-home-hero" />

<script>
  //import Button from "../public/build/Button.js"; //"./Button.svelte";
</script>

<div class="component-container">
  <div class="flex-container hero-title">
    <div class="flex-item">
      Entra in <strong>contatto</strong> con noi Scopri le opportunità per il
      tuo <strong>business</strong>
      offerte dalle nostre <strong>soluzioni</strong>
    </div>
  </div>
  <div class="button-container">
    <!-- svelte-ignore missing-declaration -->
    <Button
      bg="#312783"
      textColor="#fff"
      text="Contattaci"
      href="randompage.html"
      border="1px solid rgba(49, 39, 131, 0.5)"
      type="contact"
    />
  </div>
</div>

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  .flex-container {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 24px;
    color: #312783;
  }

  .flex-item {
    flex: 0 0 60%;
  }

  .button-container {
    display: flex;
    justify-content: center;
  }

  .hero-title {
    font-size: 48px;
    line-height: 67px;
    color: var(--ts-blue-color);
  }
</style>

<svelte:options tag="ts-home-hero" />

<script>
</script>

<div class="component-container">
  <div class="flex-container hero-title">
    <div class="flex-item">
      <div class="text">
        Entra in <strong>contatto</strong> con noi Scopri le opportunità per il
        tuo <strong>business</strong>
        offerte dalle nostre <strong>soluzioni</strong>
      </div>
      <div class="button-container">
        <ts-button variant="primary" href="randompage.html"
          >Contattaci</ts-button
        >
      </div>
    </div>
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

  .text {
    margin-bottom: 80px;
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

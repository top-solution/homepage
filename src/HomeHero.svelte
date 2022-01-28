<svelte:options tag="ts-home-hero" />

<div class="home-hero">
  <div class="home-hero__banner">
    <div class="home-hero__text">
      Entra in <strong>contatto</strong> con noi Scopri le opportunità per il
      tuo <strong>business</strong>
      offerte dalle nostre <strong>soluzioni</strong>
    </div>
    <div class="home-hero__button">
      <ts-button variant="primary" href="randompage.html">Contattaci</ts-button>
    </div>
  </div>
</div>

<style lang="scss">
  @use "./styles/variables";

  @import "./styles/main.scss";

  .home-hero {
    margin-top: variables.$ts-spacing-9;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 67px;
    color: variables.$ts-blue-color;

    &__banner {
      flex: 0 0 65%;
    }

    &__text {
      margin-bottom: 80px;
    }

    &__button {
      display: flex;
      justify-content: center;
    }
  }
</style>

<svelte:options tag="ts-home-hero" />

<div class="home-hero">
  <div class="home-hero__banner">
    <div class="home-hero__text">
      Entra in <strong>contatto</strong> con noi
      <p>
        Scopri le opportunità per il tuo <strong>business</strong>
        offerte dalle nostre <strong>soluzioni</strong>
      </p>
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

  @media only screen and (max-width: variables.$ts-mobile-max) {
    .home-hero {
      margin-top: variables.$ts-spacing-15;
      display: flex;
      margin-bottom: 24px;
      font-size: 25px;
      color: variables.$ts-blue-color;
      justify-content: center;
      width: 100%;
      line-height: 37px;

      &__text {
        margin-bottom: 80px;
      }

      &__banner {
        flex: 0 0 80%;
        text-align: center;
      }

      &__button {
        display: flex;
        justify-content: center;
      }
    }
  }
</style>

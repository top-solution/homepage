<svelte:options tag="ts-page-hr-development" />

<ts-top-banner
  title="Sviluppo delle Risorse Umane"
  mobilealignleft="true"
  title2={false}
>
  <div class="claim" slot="text">
    I nostri <b>servizi</b> vengono proposti in modalità SaaS e sono rivolti
    allo sviluppo delle <b>Risorse Umane</b> e del <b>Marketing Aziendale</b>
  </div>
  <div
    slot="actions"
    style="display: flex; flex-direction: column; max-width: 175px; margin: auto;"
  >
    <ts-button variant="primary" href="/contacts.html">Contattaci</ts-button>
  </div>
  <div slot="external">
    <ts-header-hexagons-desktop />
    <ts-header-hexagons-mobile />
    <ts-hex
      class="page-hr-development__floating-hex-1"
      width="85"
      fill="#312783"
      shadow="true"
    />
  </div>
</ts-top-banner>
<ts-layout class="page-hr-development">
  <div class="page-hr-development__copy">
    <p class="claim">
      Le nostre piattaforme permettono di integrare in un <b>unico sistema</b>
      di comunicazione on-line, diversi moduli per la <b>gestione</b> delle
      attività del <b>personale</b> interno ed esterno
    </p>
    <ts-hr-svg />
    <ts-hex
      class="page-hr-development__floating-hex-3"
      width="130"
      fill="#4758a3"
      shadow="true"
    />
  </div>
  <div class="page-hr-development__our-services">
    <h2 class="title-3 title-form">I nostri <b>servizi</b></h2>
    <ol>
      <li>
        <span class="title-5">AUDIT COMPETENZE</span>
        <ts-button
          class="page-hr-development__our-services__button"
          variant="outlined"
          href="haka.html">Scopri</ts-button
        >
        <ts-button
          class="page-hr-development__our-services__button--small"
          variant="outlined"
          small="true"
          href="haka.html">Scopri</ts-button
        >
      </li>
      <li>
        <span class="title-5">SVILUPPO ORGANIZZATIVO</span>
        <ts-button
          class="page-hr-development__our-services__button"
          variant="outlined"
          href="company-development.html">Scopri</ts-button
        >
        <ts-button
          class="page-hr-development__our-services__button--small"
          variant="outlined"
          small="true"
          href="company-development.html">Scopri</ts-button
        >
      </li>
      <li>
        <span class="title-5">SVILUPPO INDIVIDUALE</span>
        <ts-button
          class="page-hr-development__our-services__button"
          variant="outlined"
          href="self-development.html">Scopri</ts-button
        >
        <ts-button
          class="page-hr-development__our-services__button--small"
          variant="outlined"
          small="true"
          href="self-development.html">Scopri</ts-button
        >
      </li>
    </ol>
    <svg
      class="page-hr-development__our-services__hexagon"
      viewBox="0 0 616 573"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M615.851 371.212L588.675 228.197L560.868 85.3133L407.215 42.7312L253.339 0.697273L126.861 101.13L0.791841 201.98L27.968 344.995L55.7745 487.878L209.428 530.461L363.304 572.495L489.781 472.062L615.851 371.212Z"
        fill="#E3F1FA"
      />
    </svg>
  </div>
  <ts-blob
    class="page-hr-development__blob"
    interactive="true"
    shape="hexagon"
    fill="#EBEAF3"
    padding="48"
    variance="1.4"
  >
    <div class="page-hr-development__blob-content">
      <p class="body-2">
        I nostri <b>prodotti</b> sono continuamente rinnovati utilizzando le più
        <b>moderne tecnologie</b> web garantendo al cliente una
        <b>user experience</b> sempre aggiornata e performance adeguate
      </p>
      <ts-button
        variant="primary"
        href="/contacts.html"
        style="display: inline-block;"
      >
        Contattaci
      </ts-button>
    </div>
  </ts-blob>
  <ts-hex
    class="page-hr-development__floating-hex-4"
    width="75"
    fill="#312783"
    shadow="false"
    rotation="-4"
  />
</ts-layout>

<style lang="scss">
  @use "../styles/variables";

  @use "../styles/main.scss";

  ts-header-hexagons-desktop {
    right: 0px;
    width: 100%;
    top: 0px;
  }

  ts-header-hexagons-mobile {
    display: none;
  }

  ts-header-hexagons-desktop,
  ts-header-hexagons-mobile {
    position: absolute;
  }

  .page-hr-development__floating-hex-1 {
    width: 85px;
    position: absolute;
    bottom: -50px;
    right: 30px;
  }

  .page-hr-development {
    display: block;
    color: variables.$ts-blue-color;
    box-sizing: border-box;

    &__floating-hex {
      &-1 {
        position: absolute;
        bottom: -230px;
        right: -90px;
      }

      &-3 {
        width: 130px;
        position: absolute;
        top: 300px;
        left: -30;
      }

      &-4 {
        width: 225px;
        display: block;
        margin-left: auto;
        margin-right: variables.$ts-spacing-3;
      }
    }

    &__copy {
      display: flex;
      margin-top: variables.$ts-spacing-15;
      position: relative;

      p {
        flex: 1 1 0;
        margin-top: variables.$ts-spacing-5;
      }

      ts-hr-svg {
        display: block;
        max-width: 320px;
        flex: 0 1 320px;
        overflow: visible;
      }
    }

    &__our-services {
      max-width: 540px;
      margin: variables.$ts-spacing-20 auto;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;

      .title-3 {
        text-align: center;
      }

      ol {
        list-style: none;
        padding: 0;
      }

      li {
        min-width: 500px;
        margin-bottom: variables.$ts-spacing-3;
      }

      &__button {
        display: inline-block;
        margin-left: variables.$ts-spacing-8;

        &--small {
          display: none;
        }
      }

      &__hexagon {
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        width: 110%;
      }
    }

    &__blob {
      display: block;
      max-width: 540px;
      margin: 220px auto variables.$ts-spacing-10;
    }

    &__blob-content {
      text-align: center;

      ts-button {
        margin-top: variables.$ts-spacing-3;
      }
    }

    @media only screen and (max-width: variables.$ts-tablet-max) {
      ts-hr-svg {
        display: none;
      }

      .claim {
        text-align: center;
      }
    }

    @media only screen and (min-width: variables.$ts-tablet-min) and (max-width: variables.$ts-tablet-max) {
      &__floating-hex {
        &-3 {
          display: none;
        }
      }
    }

    @media only screen and (max-width: variables.$ts-mobile-max) {
      &__floating-hex {
        &-3 {
          display: none;
        }

        &-4 {
          width: 45px;
          margin-right: 134px;
        }
      }

      &__copy {
        align-items: flex-start;
        margin-top: variables.$ts-spacing-6;

        .claim {
          font-size: 20px;
          margin-top: 0;
        }

        ts-hr-svg {
          max-width: 160px;
          flex: 0 1 160px;
          margin-left: variables.$ts-spacing-1;
          margin-top: variables.$ts-spacing-1;
        }
      }

      &__blob {
        margin-top: 100px;
      }

      &__our-services {
        align-items: stretch;
        margin-top: variables.$ts-spacing-10;

        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-width: 0;
        }

        &__button {
          display: none;

          &--small {
            display: block;
            margin-left: auto;
          }
        }

        &__hexagon {
          width: 125%;
        }
      }
    }

    ts-header-hexagons-desktop {
      display: none;
    }

    ts-header-hexagons-mobile {
      display: block;
      right: 72px;
      width: 100%;
      top: 30px;
    }

    .page-hr-development__floating-hex-1 {
      width: 58px;
    }
  }
</style>

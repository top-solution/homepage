<svelte:options tag="ts-page-hr-development" />

<script>
</script>

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
    <ts-button variant="primary" href="/contacts.html">Contattaci </ts-button>
  </div>
  <div slot="external">
    <ts-header-hexagons-desktop />
    <ts-header-hexagons-mobile />
    <svg
      class="page-company_floating-hex-1"
      viewBox="0 0 85 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M84.5619 27.0231L83.007 50.3464L81.3611 73.6634L60.3851 83.9785L39.3691 94.2116L19.948 81.2034L0.577766 68.1196L2.13268 44.7963L3.77851 21.4793L24.7545 11.1642L45.7706 0.931033L65.1917 13.9393L84.5619 27.0231Z"
        fill="#312783"
      />
    </svg>
  </div>
</ts-top-banner>
<ts-layout class="page-hr-development">
  <svg
    class="page-company_floating-hex-2"
    viewBox="0 0 82 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.02874 20.2452L24.1346 10.3419L44.2788 0.517134L62.9082 12.9777L81.4888 25.5107L80.0124 47.8745L78.4488 70.2323L58.343 80.1356L38.1987 89.9604L19.5693 77.4998L0.988672 64.9668L2.46512 42.603L4.02874 20.2452Z"
      fill="#d6d4e6"
    />
  </svg>
  <div class="page-hr-development__copy">
    <p class="claim">
      Le nostre piattaforme permettono di integrare in un <b>unico sistema</b>
      di comunicazione on-line, diversi moduli per la <b>gestione</b> delle
      attività del <b>personale</b> interno ed esterno
    </p>
    <ts-hr-svg />
    <svg
      class="page-company_floating-hex-3"
      viewBox="0 0 130 145"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M129.306 41.0613L126.913 76.9547L124.381 112.839L92.0994 128.713L59.7567 144.461L29.8685 124.442L0.0585764 104.307L2.45153 68.4134L4.98438 32.5295L37.2655 16.6551L69.6083 0.906706L99.4965 20.9258L129.306 41.0613Z"
        fill="#4758a3"
      />
    </svg>
  </div>
  <div class="page-hr-development__our-services">
    <h2 class="title-3 title-form">I nostri <b>servizi</b></h2>
    <ol>
      <li>
        <span class="title-5">AUDIT COMPETENZE</span>
        <ts-button variant="outlined" href="haka.html">Scopri</ts-button>
        <ts-button
          class="page-hr-development__button-small"
          variant="outlined"
          small="true"
          href="haka.html">Scopri</ts-button
        >
      </li>
      <li>
        <span class="title-5">SVILUPPO ORGANIZZATIVO</span>
        <ts-button variant="outlined" href="company-development.html"
          >Scopri</ts-button
        >
        <ts-button
          class="page-hr-development__button-small"
          variant="outlined"
          small="true"
          href="company-development.html">Scopri</ts-button
        >
      </li>
      <li>
        <span class="title-5">SVILUPPO INDIVIDUALE</span>
        <ts-button variant="outlined" href="self-development.html"
          >Scopri</ts-button
        >
        <ts-button
          class="page-hr-development__button-small"
          variant="outlined"
          small="true"
          href="self-development.html">Scopri</ts-button
        >
      </li>
    </ol>
    <svg
      class="page-hr-development__hexagon"
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
        style="display: inline-block;">Contattaci</ts-button
      >
    </div>
  </ts-blob>
  <svg
    class="page-company_floating-hex-4"
    viewBox="0 0 75 83"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M71.3761 18.4619L52.9801 9.40085L34.549 0.411597L17.5039 11.8124L0.503459 23.2796L1.85434 43.7415L3.28498 64.198L21.6809 73.259L40.1121 82.2483L57.1571 70.8474L74.1576 59.3802L72.8067 38.9183L71.3761 18.4619Z"
      fill="#312783"
    />
  </svg>
</ts-layout>

<style lang="scss">
  @use "../styles/variables";

  @use "../styles/main.scss";

  .page-hr-development {
    display: block;
    color: variables.$ts-blue-color;
    box-sizing: border-box;

    ts-header-hexagons-desktop,
    ts-header-hexagons-mobile {
      position: absolute;
    }

    ts-header-hexagons-desktop {
      right: 0px;
      width: 100%;
      top: 0px;
    }

    ts-header-hexagons-mobile {
      display: none;
    }

    & {
      width: 85px;
      position: absolute;
      bottom: -50px;
      right: 30px;
    }

    &_floating-hex-2 {
      width: 82px;
      position: absolute;
      top: -60px;
      right: calc(50% - 41px);
    }

    &_floating-hex-3 {
      width: 130px;
      position: absolute;
      top: 350px;
      left: 12%;
    }

    &_floating-hex-4 {
      width: 75px;
      display: block;
      margin-left: auto;
      margin-right: variables.$ts-spacing-3;
      margin-bottom: variables.$ts-spacing-8;
    }

    &__copy {
      display: flex;
      margin-top: variables.$ts-spacing-10;
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

        ts-button {
          display: inline-block;
          margin-left: variables.$ts-spacing-8;
        }
      }

      &__button-small {
        display: none;
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

    @media only screen and (min-width: variables.$ts-tablet-min) and (max-width: variables.$ts-tablet-max) {
      &_floating-hex-3 {
        display: none;
      }
    }

    @media only screen and (max-width: variables.$ts-mobile-max) {
      ts-header-hexagons-desktop {
        display: none;
      }

      ts-header-hexagons-mobile {
        display: block;
        right: 72px;
        width: 100%;
        top: 30px;
      }

      & {
        width: 58px;
      }

      &_floating-hex-2 {
        right: unset;
        left: 33%;
        top: -80px;
        width: 55px;
      }

      &_floating-hex-3 {
        display: none;
      }

      &_floating-hex-4 {
        width: 45px;
      }

      &__copy {
        align-items: flex-start;
        margin-top: variables.$ts-spacing-15;

        .claim {
          font-size: 20px;
        }

        ts-hr-svg {
          max-width: 160px;
          flex: 0 1 160px;
          margin-left: variables.$ts-spacing-1;
        }
      }

      &__blob {
        margin-top: 100px;
      }

      &__our-services {
        align-items: stretch;

        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-width: 0;

          ts-button {
            display: none;
          }
        }
        &__hexagon {
          width: 125%;
        }
      }

      &__button-small {
        display: block;
        margin-left: auto;
      }
    }
  }
</style>

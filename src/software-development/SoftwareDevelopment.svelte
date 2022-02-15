<svelte:options tag="ts-software-development" />

<ts-top-banner
  title="Sviluppo Software"
  mobilealignleft="true"
  title2={true}
  azure={true}
>
  <div class="claim" slot="text">
    Affrontiamo lo sviluppo dei nostri prodotti e servizi con <b>tecnologie</b>
    sempre
    <b>nuove</b>, perchè la curiosità e la voglia di sperimentare fanno parte
    del nostro DNA. Per questo siamo in grado di offrire una consulenza di
    <b>sviluppo software chiavi in mano</b> su tecnologie open source all'avanguardia.
  </div>
  <div
    slot="actions"
    style="display: flex; flex-direction: column; max-width: 175px; margin: auto;"
  >
    <ts-button variant="primary" href="/contacts.html">Contattaci </ts-button>
  </div>
  <div slot="external">
    <ts-header-hexagons-desktop></ts-header-hexagons-desktop>
    <ts-header-hexagons-mobile></ts-header-hexagons-mobile>
    <ts-hex
      class="software-development__floating-hex-1"
      width="56"
      fill="#4857A3"
      shadow="true"
    />
  </div>
</ts-top-banner>
<ts-layout class="software-development">
  <div class="software-development__copy">
    <p class="body-1">
      Le doti di <b>flessibilità</b> e <b>scalabilità</b> dei nostri sistemi
      consentono di ottenere: naturale estendibilità a tutta la popolazione
      aziendale,
      <b>chiarezza</b> interpretativa, <b>facilità di utilizzo</b> con il minimo
      disagio organizzativo.
    </p>
  </div>
  <div class="software-development__our-services">
    <h2 class="title-3 title-form">I nostri <b>servizi</b></h2>
    <ol>
      <li>
        <span class="title-5">APPLICAZIONI WEB E MOBILE</span>
        <ts-button
          class="software-development__our-services__button"
          variant="outlined"
          href="web-applications-mobile.html">Scopri</ts-button
        >
        <ts-button
          class="software-development__our-services__button--small"
          variant="outlined"
          small="true"
          href="web-applications-mobile.html">Scopri</ts-button
        >
      </li>
      <li>
        <span class="title-5">SVILUPPO SOFTWARE</span>
        <ts-button
          class="software-development__our-services__button"
          variant="outlined"
          href="software-development-consulting.html">Scopri</ts-button
        >
        <ts-button
          class="software-development__our-services__button--small"
          variant="outlined"
          small="true"
          href="software-development-consulting.html">Scopri</ts-button
        >
      </li>
      <li>
        <span class="title-5">CLOUD COMPUTING</span>
        <ts-button
          class="software-development__our-services__button"
          variant="outlined"
          href="cloud-computing.html">Scopri</ts-button
        >
        <ts-button
          class="software-development__our-services__button--small"
          variant="outlined"
          small="true"
          href="cloud-computing.html">Scopri</ts-button
        >
      </li>
    </ol>
    <svg
      class="software-development__our-services__hexagon"
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
    class="software-development__blob"
    interactive="true"
    shape="hexagon"
    fill="#EBEAF3"
    padding="48"
    variance="1.4"
  >
    <div class="software-development__blob-content">
      <p class="body-2">
        Il <b>software</b> è in continuo mutamento ed essere <b>aggiornati</b>
        sulle ultime tecnologie e tendenze richiede un sacco di tempo, un
        <b>investimento</b> che non tutte le aziende possono permettersi di sostenere.
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
</ts-layout>

<style lang="scss" global>
  @use "../styles/variables";

  @use "../styles/main.scss";

  ts-layout {
    margin-bottom: variables.$ts-spacing-15;
  }

  .software-development {
    display: block;
    color: variables.$ts-blue-color;
    box-sizing: border-box;

    &__floating-hex {
      &-1 {
        position: absolute;
        bottom: -200px;
        left: 50%;
      }
      &-2 {
        position: absolute;
        bottom: -200px;
        left: 50%;
        transform: translateX(-50%);
      }

      &-3 {
        position: absolute;
        left: 73%;
        top: -60px;
      }
    }

    &__copy {
      & p {
        text-align: center;
        margin: variables.$ts-spacing-15 0 variables.$ts-spacing-6;
      }
    }

    &__video {
      width: 100%;
      height: auto;
      margin: variables.$ts-spacing-3 0;
    }

    &__services {
      margin-top: variables.$ts-spacing-15;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      margin-bottom: 310px;

      &-blob {
        width: 1100px;
        position: absolute;
        top: -90px;
        left: -150px;
        z-index: -1;
      }

      & h2 {
        text-transform: none;
        text-align: center;
        margin-bottom: variables.$ts-spacing-6;
      }

      &-list a {
        font-weight: 400;
      }

      &-list a:hover {
        text-decoration: underline;
      }

      &-contact-us-button {
        display: inline-block;
        margin-top: variables.$ts-spacing-4;
      }
    }

    &__services-list li::before,
    &__service-subservices li::before {
      content: "";
      display: inline-block;
      height: 28px;
      width: 28px;
      background-image: url("img/icons/hexagon-list-item.svg");
      background-size: cover;
      margin: 0 variables.$ts-spacing-4 -4px auto;
      padding: 0;
    }

    &__services-list,
    &__service-subservices ol {
      margin: 0 auto;
      padding: 0;
      list-style: none;
      line-height: 28px;
      margin: 0 auto;
      text-align: left;
    }

    &__services-list li,
    &__service-subservices li {
      margin-bottom: variables.$ts-spacing-3;
    }

    &__choose-services {
      margin-bottom: variables.$ts-spacing-6;
    }

    ts-company-development-customers {
      margin-bottom: variables.$ts-spacing-15;
      display: block;
    }

    &__service {
      position: relative;

      & + & {
        margin-top: 280px;
      }

      & p {
        width: 100%;
        max-width: 580px;
      }

      & h4 {
        margin-bottom: variables.$ts-spacing-3;
        line-height: 33px;
      }
    }

    #software-development {
      &__anchor-2 {
        text-align: right;
      }
      &__anchor-2 p {
        margin-left: auto;
      }
    }

    &__service {
      &-subservices {
        margin: variables.$ts-spacing-4 0;
        position: relative;
      }

      &-subservices li {
        font-weight: 500;
        margin-bottom: variables.$ts-spacing-4;
      }
    }

    #software-development__stress_lavoro_correlato {
      &,
      p {
        text-align: right;
        margin-left: auto;
      }
    }

    &__our-plans {
      margin-top: 300px;
      text-align: center;

      .body-2 {
        margin-bottom: variables.$ts-spacing-6;
      }
    }
    @media only screen and (max-width: variables.$ts-tablet-max) {
      & {
        padding: 0 variables.$ts-spacing-3;
      }

      &__services-list li::before,
      &__service-subservices li::before {
        height: 24px;
        width: 24px;
        margin-right: variables.$ts-spacing-2;
      }

      &__services-blob {
        left: -260px;
      }

      &__who-chooses-company {
        &-development__customers {
          margin: 0 -24px 0;
        }

        &-development__customers ts-picture {
          margin: 0 variables.$ts-spacing-3 variables.$ts-spacing-2;
        }
      }

      &__service {
        & + & {
          margin-top: variables.$ts-spacing-10;
        }

        & h4 {
          margin-bottom: variables.$ts-spacing-3;
          font-style: normal;
          line-height: 24px;
        }

        & p {
          box-sizing: border-box;
          padding-right: 60px;
        }

        &-subservices ol {
          margin: variables.$ts-spacing-7 auto;
        }
      }

      #software-development {
        &__anchor-2,
        &__stress_lavoro_correlato {
          p {
            padding-left: 60px;
            padding-right: 0;
          }
        }
      }
    }

    @media only screen and (max-width: variables.$ts-mobile-max) {
      .claim {
        max-width: 80%;
      }

      &__services {
        margin-bottom: 180px;

        &-blob {
          left: -480px;
        }
      }

      &__floating {
        &-hex-2 {
          top: 480px;
        }

        &-hex-3 {
          display: none;
        }
      }

      &__services-list,
      &__service-subservices ol {
        font-size: 18px;
        width: 250px;
      }
    }
  }

  @media only screen and (max-width: variables.$ts-mobile-max) {
    ts-header-hexagons-desktop {
      display: none;
    }

    ts-header-hexagons-mobile {
      display: block;
      width: 100%;
    }
  }

  .software-development {
    display: block;
    color: variables.$ts-blue-color;
    box-sizing: border-box;

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
  }
</style>

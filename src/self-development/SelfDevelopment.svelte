<svelte:options tag="ts-page-self-development" />

<script>
  let formazioneSuMisuraElement = null;
  let sentieriDiCarrieraElement = null;
  let coachingElement = null;
</script>

<ts-top-banner
  title="Sviluppo Individuale"
  mobilealignleft="true"
  title2={true}
>
  <div class="claim" slot="text">
    Il <b>sapere</b> delle persone rappresenta il bene immateriale
    <b>più importante</b> delle organizzazioni.
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
      class="page-self-development__floating-hex-1"
      width="56"
      fill="#9893c1"
      shadow="true"
    />
  </div>
</ts-top-banner>
<ts-layout class="page-self-development">
  <div class="page-self-development__copy">
    <p class="body-1">
      Far crescere con continuità le <b>competenze</b> delle persone è, oltre a
      un dovere, una <b>necessità</b> legata alla <b>continuità</b> del
      <b>business</b>
      e dell’organizzazione. Le <b>persone</b> sono quindi il fulcro di tutte le
      <b>organizzazioni</b>
      e le <b>competenze</b> sono l’<b>asset strategico</b> sul quale costruire l’identità
      aziendale.
    </p>
  </div>
  <div class="page-self-development__services">
    <div class="page-self-development__services-blob">
      <ts-blob
        shape="potato"
        variance="0.25"
        style="min-width: 900px;"
        flip="true"
        fill="#E3F1FA"
      >
        <div style="min-width: 900px; height: 500px; " />
      </ts-blob>
    </div>
    <h3 class="title-3 title-form page-self-development__choose-services">
      Scegli tra i <b>SERVIZI</b>
    </h3>
    <ol class="page-self-development__services-list">
      <li>
        <a
          class="body-2"
          href="#page-self-development__formazione-su-misura"
          on:mouseup={() =>
            formazioneSuMisuraElement.scrollIntoView({ behavior: "smooth" })}
        >
          Formazione su misura
        </a>
      </li>
      <li>
        <a
          class="body-2"
          href="#page-self-development__sentieri-di-carriera"
          on:mouseup={() =>
            sentieriDiCarrieraElement.scrollIntoView({ behavior: "smooth" })}
        >
          Sentieri di carriera
        </a>
      </li>
      <li>
        <a
          class="body-2"
          href="#page-self-development__coaching"
          on:mouseup={() =>
            coachingElement.scrollIntoView({ behavior: "smooth" })}
        >
          Coaching
        </a>
      </li>
    </ol>
    <ts-button
      class="page-self-development__services-contact-us-button"
      variant="primary"
      href="/contacts.html"
      target="_blank"
    >
      Contattaci
    </ts-button>
    <ts-hex
      class="page-self-development__floating-hex-2"
      width="44"
      fill="#312783"
      opacity=".7"
      shadow="false"
      rotation="-4"
    />
  </div>
  <div
    id="page-self-development__formazione-su-misura"
    class="page-self-development__service"
  >
    <h4 bind:this={formazioneSuMisuraElement} class="title-4">
      Formazione su misura
    </h4>
    <ts-snail color="#8D88BA" flip="true" paddingtop="true" />
    <p class="body-2">
      Investire sulle <b>conoscenze</b> e <b>competenze</b> professionali delle
      persone è l’elemento centrale per la continuità e/o la crescita del
      business. Il Training che offriamo è di tipo <b>esperienziale</b>.
    </p>
    <ts-hex
      class="page-self-development__floating-hex-3"
      width="90"
      fill="#211A58"
      shadow="true"
      rotation="-4"
    />
  </div>
  <div
    id="page-self-development__sentieri-di-carriera"
    class="page-self-development__service"
  >
    <h4 bind:this={sentieriDiCarrieraElement} class="title-4">
      Sentieri di carriera
    </h4>
    <ts-snail color="#4C429C" paddingtop="true" />
    <p class="body-2">
      Nell’ottica del <b>miglioramento continuo</b>, lo sviluppo delle
      competenze professionali evolve con la maturità professionale dei singoli.
      <b>Pianificare</b> la crescita professionale permette all’organizzazione
      lo sviluppo delle competenze e la continuità aziendale nel
      <b>ricercare</b>
      gli
      <b>obiettivi d’impresa</b>.
    </p>
  </div>
  <div
    id="page-self-development__coaching"
    class="page-self-development__service"
  >
    <h4 bind:this={coachingElement} class="title-4">Coaching</h4>
    <ts-snail color="#4857A3" flip="true" paddingtop="true" />
    <p class="body-2">
      Il Coaching è una metodologia formativa che <b>permette</b> ai manager e
      ai responsabili di funzione di apprendere tecniche e strumenti innovativi
      per
      <b>migliorare</b> la <b>performance</b> professionale e organizzativa. È
      un processo utile a sostenere l’apprendimento e a far emergere le
      potenzialità individuali di <b>guida</b> e di <b>orientamento</b> al
      <b>business</b>.
    </p>
  </div>
</ts-layout>

<style lang="scss" global>
  @use "../styles/variables";

  @use "../styles/main.scss";

  .page-self-development {
    &__floating-hex {
      display: block;
      color: variables.$ts-blue-color;
      box-sizing: border-box;

      &-1 {
        position: absolute;
        bottom: -200px;
        left: 50%;
      }
      &-2 {
        position: absolute;
        bottom: -220px;
        left: 50%;
        transform: translateX(-50%);
      }

      &-3 {
        position: absolute;
        left: 73%;
        top: -140px;
      }
    }

    &__copy {
      & p {
        text-align: center;
        margin: variables.$ts-spacing-15 0 variables.$ts-spacing-6;
      }
    }

    &__services {
      margin-top: variables.$ts-spacing-15;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      margin-bottom: 310px;

      &-blob {
        width: 1000px;
        position: absolute;
        top: 120%;
        left: 42%;
        transform: translate(-50%, -50%);
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

    &__choose-services {
      margin-bottom: variables.$ts-spacing-6;
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

    #page-self-development {
      &__sentieri-di-carriera {
        text-align: right;

        & p {
          margin-left: auto;
        }
      }
    }

    &__service-subservices {
      margin: variables.$ts-spacing-4 0;
      position: relative;

      & li {
        font-weight: 500;
        margin-bottom: variables.$ts-spacing-4;
      }
    }

    #page-self-development {
      &__free-trial {
        position: absolute;
        right: 0;
      }

      &__stress_lavoro_correlato {
        &,
        p {
          text-align: right;
          margin-left: auto;
        }
      }

      &__coaching {
        margin-bottom: 200px;
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

      &__services-list,
      &__service-subservices ol {
        font-size: 18px;
        width: 250px;
      }

      &__services-list li::before,
      &__service-subservices li::before {
        height: 24px;
        width: 24px;
        margin-right: variables.$ts-spacing-2;
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
          padding-right: 60px;
        }

        &-subservices ol {
          margin: variables.$ts-spacing-7 auto;
        }
      }

      &__services-blob {
        top: 105%;
      }

      #page-self-development {
        &__sentieri-di-carriera,
        &__stress_lavoro_correlato {
          p {
            padding-left: 60px;
            padding-right: 0;
          }
        }

        &__free-trial {
          position: static;
          display: flex;
        }

        &__free-trial ts-button {
          margin: auto;
        }
      }
    }

    @media only screen and (max-width: variables.$ts-mobile-max) {
      &__services-blob {
        top: 130%;
      }
    }
  }
</style>

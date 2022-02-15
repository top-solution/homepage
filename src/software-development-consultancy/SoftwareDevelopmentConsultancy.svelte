<svelte:options tag="ts-software-development-consultancy" />

<script>
  let kickOffProjectElement = null;
  let developmentAndMaintenanceElement = null;
  let disasterRecoverysElement = null;
</script>

<ts-top-banner
  title="Consulenza sviluppo software"
  mobilealignleft="true"
  title2={true}
  azure={true}
>
  <div class="claim" slot="text">
    Affrontiamo lo sviluppo dei nostri <b>prodotti</b> e <b>servizi</b> con
    <b>tecnologie</b>
    sempre
    <b>nuove</b>, perchè la curiosità e la voglia di sperimentare fanno parte
    del nostro DNA.
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
    <ts-hex
      class="web-application-mobile__floating-hex-1"
      width="56"
      fill="#4857A3"
      shadow="true"
    />
  </div>
</ts-top-banner>
<ts-layout class="web-application-mobile">
  <div class="web-application-mobile__copy">
    <p class="body-1">
      Siamo in grado di offrire una <b>consulenza</b> di sviluppo
      <b>software chiavi in mano</b>
      su tecnologie <b>open source</b> all'avanguardia.
    </p>
  </div>
  <div class="web-application-mobile__services">
    <div class="web-application-mobile__services-blob">
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
    <h3 class="title-3 title-form web-application-mobile__choose-services">
      Scegli tra i <b>SERVIZI</b>
    </h3>
    <ol class="web-application-mobile__services-list">
      <li>
        <a
          class="body-2"
          href="#web-application-mobile__anchor-1"
          on:mouseup={() =>
            kickOffProjectElement.scrollIntoView({
              behavior: "smooth",
            })}
        >
          Kick-off progetti
        </a>
      </li>
      <li>
        <a
          class="body-2"
          href="#web-application-mobile__anchor-2"
          on:mouseup={() =>
            developmentAndMaintenanceElement.scrollIntoView({
              behavior: "smooth",
            })}
        >
          Sviluppo e manutenzione
        </a>
      </li>
      <li>
        <a
          class="body-2"
          href="#web-application-mobile__anchor-3"
          on:mouseup={() =>
            disasterRecoverysElement.scrollIntoView({ behavior: "smooth" })}
        >
          Disaster recovery
        </a>
      </li>
    </ol>
    <ts-button
      class="web-application-mobile__services-contact-us-button"
      variant="primary"
      href="/contacts.html"
    >
      Contattaci
    </ts-button>
    <ts-hex
      class="web-application-mobile__floating-hex-2"
      width="44"
      fill="#312783"
      opacity=".7"
      shadow="false"
      rotation="-4"
    />
  </div>
  <ts-software-development-consultancy-customers />
  <div
    id="web-application-mobile__anchor-1"
    class="web-application-mobile__service"
  >
    <h4 bind:this={kickOffProjectElement} class="title-4">Kick-off progetti</h4>
    <ts-snail color="#8D88BA" flip="true" paddingtop="true" />
    <p class="body-2">
      Hai finito l'analisi e adesso è arrivata l'ora di inziare a scrivere
      codice ma non sai che tecnologia scegliere? Hai già individuato la
      tecnologia più adatta ma il tuo team non la conosce a fondo? Nuovi
      framework e linguaggi possono aiutare a risolvere molti problemi, ma una
      conoscenza poco approfondita può portare a scegliere una strada sbagliata
      senza rendersene conto. La nostra esperienza può aiutarti a risparmiare
      tempo e soldi.
    </p>
  </div>
  <div
    id="web-application-mobile__anchor-2"
    class="web-application-mobile__service"
  >
    <h4 bind:this={developmentAndMaintenanceElement} class="title-4">
      Sviluppo e manutenzione
    </h4>
    <ts-snail color="#4C429C" paddingtop="true" />
    <p class="body-2">
      Hai la necessità di aumentare la capacità del tuo team per brevi periodi?
      Trovare professionisti affidabili non è semplice, la nostra società è in
      grado di offrire garanzie molto più solide. Hai sviluppato o hai fatto
      sviluppare un'app in una tecnologia che non padroneggi? A volte affidare
      la manutenzione in outsourcing è più economico che investire in formazione
      o in un nuovo team di sviluppo.
    </p>
  </div>
  <div
    id="web-application-mobile__anchor-3"
    class="web-application-mobile__service"
  >
    <h4 bind:this={disasterRecoverysElement} class="title-4">
      Disaster recovery
    </h4>
    <ts-snail color="#4857A3" flip="true" paddingtop="true" />
    <p class="body-2">
      Prima o poi a tutti capita di sottostimare le sfide legate ad un nuovo
      progetto: il rischio di mancare una consegna o perdere un cliente riduce
      di molto la tua redditività e reputazione. Top Solution può aiutarti a
      rimanere al passo con le scadenze ed evitare di introdurre debito tecnico
      che pagherai inevitabilmente in seguito.
    </p>
  </div>
</ts-layout>

<style lang="scss" global>
  @use "../styles/variables";

  @use "../styles/main.scss";

  ts-layout {
    margin-bottom: variables.$ts-spacing-15;
  }

  .web-application-mobile {
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

    #web-application-mobile {
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

    #web-application-mobile__stress_lavoro_correlato {
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

      #web-application-mobile {
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
</style>

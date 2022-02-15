<svelte:options tag="ts-page-company-development" />

<script>
  let managementDiagnosticElement = null;
  let climaOrganizzativoElement = null;
  let employeesEngagementElement = null;
  let stressLavoroCorrelatoElement = null;
  let customerSatisfactionElement = null;
</script>

<ts-top-banner
  title="Sviluppo Organizzativo"
  mobilealignleft="true"
  title2={true}
>
  <div class="claim" slot="text">
    È necessario <b>ascoltare</b> la voce delle proprie persone per
    <b>capire</b>
    come costruire azioni di miglioramento e con loro
    <b>progettare il futuro</b>
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
      class="page-company-development__floating-hex-1"
      width="56"
      fill="#9893c1"
      shadow="true"
    />
  </div>
</ts-top-banner>
<ts-layout class="page-company-development">
  <div class="page-company-development__copy">
    <p class="body-1">
      Per affrontare <b>situazioni</b> organizzative ritenute <b>critiche</b>
      occorre analizzare i processi organizzativi e <b>identificare</b> i
      <b>meccanismi</b> di successo interni da replicare o apportare
      <b>azioni</b> correttive ove richiesto.
    </p>
    <video class="page-company-development__video" controls>
      <track kind="captions" />
      <source src="videos/company-development.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="page-company-development__services">
    <div class="page-company-development__services-blob">
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
    <h3 class="title-3 title-form page-company-development__choose-services">
      Scegli tra i <b>SERVIZI</b>
    </h3>
    <ol class="page-company-development__services-list">
      <li>
        <a
          class="body-2"
          href="#page-company-development__management_diagnostic"
          on:mouseup={() =>
            managementDiagnosticElement.scrollIntoView({ behavior: "smooth" })}
        >
          Management diagnostic
        </a>
      </li>
      <li>
        <a
          class="body-2"
          href="#page-company-development__clima_organizzativo"
          on:mouseup={() =>
            climaOrganizzativoElement.scrollIntoView({ behavior: "smooth" })}
        >
          Clima organizzativo
        </a>
      </li>
      <li>
        <a
          class="body-2"
          href="#page-company-development__employees_engagement"
          on:mouseup={() =>
            employeesEngagementElement.scrollIntoView({ behavior: "smooth" })}
        >
          Employees engagement
        </a>
      </li>
      <li>
        <a
          class="body-2"
          href="#page-company-development__stress_lavoro_correlato"
          on:mouseup={() =>
            stressLavoroCorrelatoElement.scrollIntoView({ behavior: "smooth" })}
        >
          Stress lavoro correlato
        </a>
      </li>
      <li>
        <a
          class="body-2"
          href="#page-company-development__customer_satisfaction"
          on:mouseup={() =>
            customerSatisfactionElement.scrollIntoView({ behavior: "smooth" })}
        >
          Customer satisfaction
        </a>
      </li>
    </ol>
    <ts-button
      class="page-company-development__services-contact-us-button"
      variant="primary"
      href="/contacts.html"
    >
      Contattaci
    </ts-button>
    <ts-hex
      class="page-company-development__floating-hex-2"
      width="44"
      fill="#312783"
      opacity=".7"
      shadow="false"
      rotation="-4"
    />
  </div>
  <ts-company-development-customers />
  <div
    id="page-company-development__management_diagnostic"
    class="page-company-development__service"
  >
    <h4 bind:this={managementDiagnosticElement} class="title-4">
      Management diagnostic
    </h4>
    <ts-snail color="#8D88BA" flip="true" paddingtop="true" />
    <p class="body-2">
      È un’attività di <b>analisi organizzativa</b>, veloce e dinamica, centrata
      sullo studio delle relazioni professionali, funzionali e interfunzionali
      che permette di comprendere il potenziale delle persone, le
      <b>dinamiche di gruppo</b>, l’integrazione tra organigramma dichiarato e
      reale, i modelli di comunicazione e la qualità delle politiche
      organizzative.
    </p>
  </div>
  <div
    id="page-company-development__clima_organizzativo"
    class="page-company-development__service"
  >
    <h4 bind:this={climaOrganizzativoElement} class="title-4">
      Clima organizzativo
    </h4>
    <ts-snail color="#4C429C" paddingtop="true" />
    <p class="body-2">
      <b>Analisi</b> che permette di comprendere “come le persone vivono” in
      azienda, attraverso l’<b>osservazione</b> “dell’aria che si respira”
      all’interno dell’<b>organizzazione</b> e durante la loro attività
      quotidiana. Fotografa la distanza percepita tra la direzione e l’<b
        >ambiente lavorativo</b
      >.
    </p>
  </div>
  <div
    id="page-company-development__employees_engagement"
    class="page-company-development__service"
  >
    <h4 bind:this={employeesEngagementElement} class="title-4">
      Employees engagement
    </h4>
    <ts-snail color="#4857A3" flip="true" paddingtop="true" />
    <p class="body-2">
      Esprime il livello di <b>coinvolgimento emotivo</b> e <b>professionale</b>
      vissuto dal dipendente nel lavoro e per l’organizzazione. Si focalizza sul
      funzionamento ottimale della persona e sulle potenzialità piuttosto che sulle
      debolezze e disfunzioni. L’analisi del <b>coinvolgimento</b> definisce
      quali sono gli elementi sui quali occorre sviluppare la
      <b>partecipazione</b>.
    </p>
  </div>
  <div
    id="page-company-development__stress_lavoro_correlato"
    class="page-company-development__service"
  >
    <h4 bind:this={stressLavoroCorrelatoElement} class="title-4">
      Stress lavoro correlato
    </h4>
    <ts-snail color="#312783" paddingtop="true" />
    <p class="body-2">
      Può essere definito come lo <b>squilibrio percepito</b> dal lavoratore
      quando le richieste dell’ambiente di lavoro sono eccessive rispetto alla
      capacità individuale di affrontare lo stress conseguente. <b>Aiuta</b>
      quindi l’organizzazione a mettere a disposizione le adeguate risorse per
      <b>fronteggiarle</b>.
    </p>
  </div>
  <div
    id="page-company-development__customer_satisfaction"
    class="page-company-development__service"
  >
    <h4 bind:this={customerSatisfactionElement} class="title-4">
      Customer satisfaction
    </h4>
    <ts-snail color="#211A58" flip="true" paddingtop="true" />
    <p class="body-2">
      La soddisfazione è intesa come <b>stato psicologico</b> derivante da un
      gap tra la <b>valutazione</b> dell’avvenuta <b>esperienza</b> di consumo e
      le attese del <b>consumatore</b> in merito a tale esperienza. La ricerca è
      finalizzata a <b>verificare</b> il livello di gradimento degli
      utilizzatori e a creare una mappa delle priorità per <b>ottimizzare</b>
      gli interventi con le <b>risorse disponibili</b>.
    </p>
  </div>
</ts-layout>

<style lang="scss" global>
  @use "../styles/variables";

  @use "../styles/main.scss";

  ts-layout {
    margin-bottom: variables.$ts-spacing-15;
  }

  .page-company-development {
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

    #page-company-development {
      &__clima_organizzativo {
        text-align: right;
      }
      &__clima_organizzativo p {
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

    #page-company-development__stress_lavoro_correlato {
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

      #page-company-development {
        &__clima_organizzativo,
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

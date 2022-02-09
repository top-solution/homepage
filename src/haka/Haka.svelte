<svelte:options tag="ts-page-haka" />

<script>
  import "@material/mwc-snackbar";
  import { onMount } from "svelte";
  import {
    performanceTable,
    performanceColumns,
    expertiseTable,
    expertiseColumns,
    expertiseSubColumns,
    mobileExpertiseTables,
    mobileExpertiseColumns,
  } from "./tablesDefinition";

  let contactUsOpen = false;
  let snackbarElement = null;

  let performanceElement = null;
  let expertiseElement = null;
  let potentialElement = null;
  let plansElement = null;
  let requestTrialElement = null;

  const collapsibleHeights = {
    performance: 0,
    expertise180: 0,
    expertise360: 0,
    potential: 0,
  };

  let expandedSections = {};

  onMount(() => {
    if (window.location.hash === "#plans") {
      window.addEventListener("load", function () {
        setTimeout(() => {
          plansElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 500);
      });
    }
  });

  function handleRequestTrialSubmit() {
    snackbarElement.show();
  }
</script>

<ts-top-banner title="Audit competenze" mobilealignleft="true" title2={true}>
  <div class="claim" slot="text">
    Rileva il <b>Know-how</b> professionale dei dipendenti e <b>scopri</b> il
    punto di partenza per sviluppare e rafforzare le loro competenze con
    <b>Haka</b>
  </div>
  <div
    slot="actions"
    style="display: flex; flex-direction: column; max-width: 175px; margin: auto;"
  >
    <ts-button
      variant="secondary"
      href="#free-trial"
      style="margin-bottom: 48px"
      on:mouseup={() =>
        requestTrialElement.scrollIntoView({ behavior: "smooth" })}
    >
      Prova gratuita
    </ts-button>
    <ts-button
      variant="primary"
      href="#plans"
      on:mouseup={() => plansElement.scrollIntoView({ behavior: "smooth" })}
    >
      Tariffe
    </ts-button>
  </div>
  <div slot="external">
    <ts-header-hexagons-desktop />
    <ts-header-hexagons-mobile />
    <ts-hex
      class="page-haka__floating-hex-1"
      width="56"
      fill="#9893c1"
      opacity="0.5"
      rotation="-20"
      shadow="true"
    />
  </div>
</ts-top-banner>
<ts-layout class="page-haka">
  <div class="page-haka__copy">
    <h2 class="title-3">測 HAKA</h2>
    <p class="body-1">
      Le <b>Risorse Umane</b> sono il cardine delle organizzazioni: le idee
      guidano il
      <b>cambiamento</b>, le <b>persone</b> lo realizzano.
    </p>
    <video class="page-haka__video" controls>
      <source src="videos/haka.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="page-haka__services">
    <ts-blob
      class="page-haka__services-blob"
      shape="potato"
      variance="0.25"
      flip="true"
      fill="#E3F1FA"
    >
      <div style="min-width: 900px; height: 500px; " />
    </ts-blob>
    <h3 class="title-3 title-form page-haka__choose-services">
      Scegli tra i <b>SERVIZI</b>
    </h3>
    <ol class="page-haka__services-list">
      <li>
        <a
          class="body-2"
          href="#page-haka__service-performance"
          on:mouseup={() =>
            performanceElement.scrollIntoView({ behavior: "smooth" })}
        >
          Valutazione performance
        </a>
      </li>
      <li>
        <a
          class="body-2"
          href="#page-haka__service-expertise"
          on:mouseup={() =>
            expertiseElement.scrollIntoView({ behavior: "smooth" })}
        >
          Bilancio di competenza
        </a>
      </li>
      <li>
        <a
          class="body-2"
          href="#page-haka__service-potential"
          on:mouseup={() =>
            potentialElement.scrollIntoView({ behavior: "smooth" })}
        >
          Valutazione del potenziale
        </a>
      </li>
    </ol>
    <ts-button
      class="page-haka__services-brochure-button"
      variant="primary"
      target="_blank"
      href="/documents/Brochure%20Top%20Solution.pdf"
      download="Brochure Top Solution.pdf"
    >
      SCARICA BROCHURE
    </ts-button>
    <ts-hex
      class="page-haka__floating-hex-2"
      width="44"
      fill="#312783"
      opacity=".7"
      shadow="false"
      rotation="-20"
    />
  </div>
  <div class="page-haka__who-chooses-haka">
    <h3 class="title-3 title-form">Chi ha scelto <b>HAKA</b></h3>
    <div class="page-haka__who-chooses-haka__customers">
      <ts-picture
        base="customers"
        src="unioneIndustriale"
        alt="Unione Industriale"
      />
      <ts-picture base="customers" src="confindustria" alt="Confindustria" />
    </div>
    <div class="page-haka__who-chooses-haka__customers">
      <ts-picture base="customers" src="carrefour" alt="Carrefour" />
      <ts-picture base="customers" src="sanMarco" alt="San Marco" />
      <ts-picture base="customers" src="euroSearch" alt="Euro Search" />
    </div>

    <div class="page-haka__contact-us">
      <ts-contact-us
        open={contactUsOpen}
        on:formsubmit={handleRequestTrialSubmit}
      />
    </div>
    <mwc-snackbar
      bind:this={snackbarElement}
      labelText="La tua richiesta è stata presa in carico dal nostro team"
    />
  </div>
  <div
    class="page-haka__service-performance page-haka__service page-haka__service--flip"
  >
    <h4 class="title-4" bind:this={performanceElement}>
      Valutazione delle performance
    </h4>
    <p class="body-2">
      Permette di <b>comprendere</b> quali <b>risultati professionali</b> ha
      raggiunto la persona nel corso del tempo e come ha espresso il proprio
      <b>contributo</b> all’interno dell’organizzazione.
    </p>
    <ts-snail color="#8D88BA" flip="true" />
    <div class="page-haka__service-subservices body-2">
      <ol>
        <li>AUTO VALUTAZIONE</li>
        <li>ETERO VALUTAZIONE</li>
      </ol>
    </div>
    <div class="page-haka__free-trial">
      <ts-button
        variant="secondary"
        href="#free-trial"
        on:mouseup={() =>
          requestTrialElement.scrollIntoView({ behavior: "smooth" })}
      >
        PROVA GRATUITA
      </ts-button>
    </div>
  </div>
  <div class="page-haka__service-expertise page-haka__service">
    <h4 class="title-4" bind:this={expertiseElement}>Bilancio di competenza</h4>
    <p class="body-2">
      Permette di comprendere come le persone <b>esprimono</b> professionalmente
      <b>le conoscenze</b>, le capacità e le qualità professionali nella
      realizzazione quotidiana del loro lavoro e come esse impattano nel sistema
      azienda. La metodologia consiste nel far <b>valutare</b> il candidato da
      più persone che interagiscono lavorativamente con lui in modo
      <b>diretto</b>
      o <b>indiretto</b>
      (responsabili, colleghi e riporti).
    </p>
    <ts-snail color="#211A58" flip="false" />
    <div class="page-haka__service-subservices body-2">
      <ol>
        <li>VALUTAZIONE 180°</li>
        <li>VALUTAZIONE 360°</li>
      </ol>
    </div>
  </div>
  <div
    class="page-haka__service-potential page-haka__service page-haka__service--flip"
  >
    <h4 class="title-4" bind:this={potentialElement}>
      Valutazione del potenziale
    </h4>
    <p class="body-2">
      È un processo attraverso il quale è possibile comprendere quali sono le
      logiche e gli <b>schemi mentali</b> utilizzati dalle persone nella
      realizzazione delle attività lavorative. È incentrata sull’analisi delle
      <b>capacità manageriali</b>, gestionali ed organizzative ed è finalizzata
      a comprendere se la persona possiede i <b>requisiti</b> per ricoprire una posizione
      organizzativa diversa o superiore a quella attuale.
    </p>
    <ts-snail color="#312783" flip="true" />
    <div class="page-haka__service-subservices body-2">
      <ol>
        <li>ASSESSMENT CENTER</li>
      </ol>
    </div>
  </div>
  <div bind:this={plansElement} class="page-haka__our-plans">
    <h3 id="plans" class="title-3 title-form">
      I nostri <b>PIANI</b>
    </h3>
    <p class="body-2">
      Ogni piano è <b>one shot</b>, scegliendo <b>Haka</b> sei libero di <br />
      utilizzare il servizio <b>senza</b> effettuare <b>abbonamenti</b>
    </p>
  </div>
  <div class="page-haka__our-plans-accordion" style="position: relative;">
    <div class="page-haka__our-plans-accordion" style="position: relative;">
      <ts-pricing-table
        title="Valutazione delle performance"
        rows={performanceTable}
        columns={performanceColumns}
        expanded={expandedSections["performance"]}
        on:expand={() =>
          (expandedSections["performance"] = !expandedSections["performance"])}
        on:collapsible-height-change={(e) =>
          (collapsibleHeights.performance = e.detail.height)}
      >
        <ts-blob
          class="page-haka__enterprise-blob"
          interactive="true"
          shape="hexagon"
          fill="#EBEAF3"
          padding="16"
          variance="1.2"
        >
          <div class="page-haka__enterprise-blob__content">
            <p class="title-6">Desideri un <b>piano custom</b>?</p>
            <p class="body-2">
              Scegli il piano <b>ENTERPRISE</b>
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
      </ts-pricing-table>
      <ts-pricing-table
        class="page-haka__expertise-pricing-table"
        title="Bilancio di competenza"
        rows={expertiseTable}
        columns={expertiseColumns}
        subcolumns={expertiseSubColumns}
        expanded={expandedSections["expertise"]}
        on:expand={() =>
          (expandedSections["expertise"] = !expandedSections["expertise"])}
        on:collapsible-height-change={(e) =>
          (collapsibleHeights.expertise = e.detail.height)}
      >
        <ts-blob
          class="page-haka__enterprise-blob"
          interactive="true"
          shape="hexagon"
          fill="#EBEAF3"
          padding="16"
          variance="1.2"
        >
          <div class="page-haka__enterprise-blob__content">
            <p class="title-6">Desideri un <b>piano custom</b>?</p>
            <p class="body-2">
              Scegli il piano <b>ENTERPRISE</b>
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
      </ts-pricing-table>
      <ts-pricing-table
        class="page-haka__expertise-pricing-table-mobile"
        title="Bilancio di competenza 180°"
        rows={mobileExpertiseTables[0]}
        columns={mobileExpertiseColumns}
        expanded={expandedSections["expertise180"]}
        on:expand={() =>
          (expandedSections["expertise180"] =
            !expandedSections["expertise180"])}
        on:collapsible-height-change={(e) =>
          (collapsibleHeights.expertise180 = e.detail.height)}
      >
        <ts-blob
          class="page-haka__enterprise-blob"
          interactive="true"
          shape="hexagon"
          fill="#EBEAF3"
          padding="16"
          variance="1.2"
        >
          <div class="page-haka__enterprise-blob__content">
            <p class="title-6">Desideri un <b>piano custom</b>?</p>
            <p class="body-2">
              Scegli il piano <b>ENTERPRISE</b>
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
      </ts-pricing-table>
      <ts-pricing-table
        title="Bilancio di competenza 360°"
        class="page-haka__expertise-pricing-table-mobile"
        rows={mobileExpertiseTables[1]}
        columns={mobileExpertiseColumns}
        expanded={expandedSections["expertise360"]}
        on:expand={() =>
          (expandedSections["expertise360"] =
            !expandedSections["expertise360"])}
        on:collapsible-height-change={(e) =>
          (collapsibleHeights.expertise360 = e.detail.height)}
      >
        <ts-blob
          class="page-haka__enterprise-blob"
          interactive="true"
          shape="hexagon"
          fill="#EBEAF3"
          padding="16"
          variance="1.2"
        >
          <div class="page-haka__enterprise-blob__content">
            <p class="title-6">Desideri un <b>piano custom</b>?</p>
            <p class="body-2">
              Scegli il piano <b>ENTERPRISE</b>
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
      </ts-pricing-table>
      <ts-collapsible-section
        class="pricing-table"
        title="Valutazione del potenziale"
        expanded={expandedSections["potential"]}
        on:expand={() =>
          (expandedSections["potential"] = !expandedSections["potential"])}
        on:collapsible-height-change={(e) =>
          (collapsibleHeights.potential = e.detail.height)}
      >
        <div class="page-haka__pricing-table__service-potential-copy">
          <p>
            Per nuove <b>assunzioni</b> o per <b>avanzamenti di carriera</b>
            progettiamo assessment personalizzati con un numero variabile di
            <b>prove</b>
            e scenari. A seguito dell’emergenza sanitaria abbiamo riprogettato gli
            assessment in modalità <b>online</b>, mantenendo comunque inalterati
            il rapporto con gli assessor e le dinamiche di gruppo. Abbiamo
            progettato una piattaforma web ad uso degli assessor per
            standardizzare le valutazioni, e uniformare i giudizi.
          </p>
        </div>
        <div class="page-haka__pricing-table__service-potential-test">
          <h4>Tra le prove:</h4>
          <ol>
            <li>Colloqui in call conference con psicologi</li>
            <li>
              Prove a tempo cronometrate con segnalazione di eventuale overtime
            </li>
            <li>
              Incident e inbasket online con la possibilità di avere assistenza
              remoto
            </li>
            <li>
              Prove di gruppo in call conference con tutti i partecipanti e gli
              psicologi che verificano l’andamento e valutano i comportamenti
            </li>
          </ol>
        </div>
        <div
          class="page-haka__enterprise-blob page-haka__more-info-blob-container"
        >
          <ts-blob
            class="page-haka__enterprise-blob page-haka__more-info-blob"
            interactive="true"
            shape="hexagon"
            fill="#EBEAF3"
            padding="16"
            variance="1.2"
          >
            <div
              class="page-haka__enterprise-blob__content page-haka__more-info-blob__content"
            >
              <p class="body-2">Desideri maggiori<br /><b>informazioni</b>?</p>
              <ts-button
                variant="primary"
                href="/contacts.html"
                style="display: inline-block;"
              >
                Contattaci
              </ts-button>
            </div>
          </ts-blob>
        </div>
      </ts-collapsible-section>
    </div>
    <ts-request-trial
      id="free-trial"
      bind:this={requestTrialElement}
      on:formsubmit={handleRequestTrialSubmit}
    />
    <mwc-snackbar
      bind:this={snackbarElement}
      labelText="La tua richiesta è stata presa in carico dal nostro team"
    />
    <!-- <div style="width: 100%; height: 50vh" /> -->
  </div>
</ts-layout>

<style lang="scss" global>
  @use "../styles/variables";

  @use "../styles/main.scss";

  .page-haka {
    display: block;
    color: variables.$ts-blue-color;
    box-sizing: border-box;

    &__floating-hex-1 {
      position: absolute;
      bottom: -430px;
    }

    &__copy {
      &,
      & h2 {
        text-align: center;
      }

      & h2 {
        margin: variables.$ts-spacing-15 0 variables.$ts-spacing-6;
      }

      & p {
        margin-bottom: variables.$ts-spacing-6;
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
    }

    &__services-blob {
      width: 1100px;
      position: absolute;
      top: -70px;
      left: 42%;
      transform: translate(-50%, 0);
      z-index: -1;
    }

    &__services {
      h2 {
        text-transform: none;
        text-align: center;
        margin-bottom: variables.$ts-spacing-6;
      }
    }
    &__floating-hex-2 {
      display: none;
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
      width: 390px;
      margin: 0 auto;
      text-align: left;
    }

    &__services-list li,
    &__service-subservices li {
      margin-bottom: variables.$ts-spacing-3;
    }

    &__services-list a {
      font-weight: 400;
    }

    &__services-list a:hover {
      text-decoration: underline;
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

    &__services-brochure-button {
      display: inline-block;
      margin-top: variables.$ts-spacing-4;
    }

    &__who-chooses-haka {
      h3 {
        font-weight: 300;
        font-size: 28px;
        line-height: 33px;
        text-align: center;
        margin-bottom: variables.$ts-spacing-4;
      }

      &__customers {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: variables.$ts-spacing-15;
        flex-wrap: wrap;
      }

      &__customers ts-picture {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
        flex-wrap: wrap;
        margin: 0 variables.$ts-spacing-9;
      }
    }

    &__service {
      position: relative;
      .body-2 {
        padding-left: 20%;
      }

      &--flip {
        .body-2 {
          padding-right: 20%;
          padding-left: 0;
        }
      }

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

    &__service-subservices {
      margin: variables.$ts-spacing-4 0;
      position: relative;

      li {
        font-weight: 500;
        margin-bottom: variables.$ts-spacing-4;
      }
    }

    &__service-expertise {
      text-align: right;

      p {
        margin-left: auto;
      }
    }

    &__service-potential {
      .body-2 {
        padding-right: 60px;
      }
    }

    &__free-trial {
      position: absolute;
      right: 0;
    }

    &__contact-us {
      margin-bottom: variables.$ts-spacing-10;
    }

    &__our-plans {
      margin-top: 250px;
      padding-top: variables.$ts-spacing-6;
      text-align: center;

      .body-2 {
        margin-bottom: variables.$ts-spacing-6;
      }
    }

    ts-pricing-table {
      margin: variables.$ts-spacing-1-5 0 0;
    }

    &__our-plans-accordion ts-collapsible-section {
      margin: variables.$ts-spacing-1-5 0;
      display: block;
    }

    &__enterprise-blob {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      width: 400px;

      &__content {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 350px;
        height: 350px;

        & .title-6 {
          font-weight: 300;
        }

        .body-2 {
          margin: variables.$ts-spacing-3 0;
        }
      }
    }

    &__expertise-pricing-table-mobile {
      display: none;
      font-size: 20px;
    }

    &__more-info-blob {
      &-container {
        background-color: #fff;
        width: 100%;
        padding: variables.$ts-spacing-10 0;
      }

      &__more-info-blob__content p {
        font-size: 20px;
      }
    }

    &__pricing-table {
      &__service-potential {
        &-copy {
          padding: variables.$ts-spacing-3 variables.$ts-spacing-10;

          p {
            font-size: 18px;
            font-weight: 300;
            line-height: 150%;
            margin: 0;
          }
        }

        &-test {
          padding: 0 variables.$ts-spacing-3;
          h4 {
            line-height: 14px;
            border-bottom: 1px solid black;
            padding-bottom: variables.$ts-spacing-1;
            margin: variables.$ts-spacing-2 0;
          }

          & ol {
            margin: 0;
            padding: 0;
            list-style: none;
          }

          & ol {
            margin: 0;
            padding: 0;
            list-style: none;
          }

          & li {
            font-weight: 300;
            font-size: 18px;
            padding: variables.$ts-spacing-3 0;
            border-bottom: 1px solid #404040;
            display: flex;
            align-items: center;
          }

          & li:last-child {
            border-bottom: 0;
          }
        }
      }
    }

    &__our-plans-accordion-hexagon {
      width: auto;
      height: 500px;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0) scale(1);
      transition: height var(--ts-transition-timing-default)
          var(--ts-transition-function-default),
        width var(--ts-transition-timing-default)
          var(--ts-transition-function-default),
        transform var(--ts-transition-timing-default)
          var(--ts-transition-function-default);
    }

    &__pricing-table-exagon-container {
      position: relative;

      & > div {
        position: absolute;
        z-index: -2;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0px;
      }
    }

    &__pricing-table-exagon {
      width: auto;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0) scale(1);
      transition: height variables.$ts-transition-timing-default
          variables.$ts-transition-function-default,
        width variables.$ts-transition-timing-default
          variables.$ts-transition-function-default,
        transform variables.$ts-transition-timing-default
          variables.$ts-transition-function-default;
    }

    ts-request-trial {
      display: block;
      margin: 200px auto variables.$ts-spacing-15;
      max-width: 720px;
    }
  }

  @media only screen and (max-width: variables.$ts-tablet-max) {
    .page-haka {
      padding: 0 variables.$ts-spacing-3;
      overflow-x: hidden;

      &__floating-hex-1 {
        display: none;
      }

      &__copy {
        h2 {
          margin: variables.$ts-spacing-8 0 variables.$ts-spacing-6;
        }
      }

      &__services,
      &__who-chooses-haka {
        margin-top: variables.$ts-spacing-8;
      }

      &__who-chooses-haka {
        margin-bottom: variables.$ts-spacing-15;
      }

      &__services-list,
      &__service-subservices ol {
        font-size: 18px;
        width: 350px;
      }

      &__services-list li::before,
      &__service-subservices li::before {
        height: 24px;
        width: 24px;
        margin-right: variables.$ts-spacing-2;
      }

      &__who-chooses-haka__customers {
        margin: 0 -24px 0;
      }

      &__who-chooses-haka__customers ts-picture {
        margin: 0 variables.$ts-spacing-3 variables.$ts-spacing-2;
      }

      &__service + &__service {
        margin-top: variables.$ts-spacing-10;
      }

      &__floating-hex-2 {
        display: block;
        position: absolute;
        bottom: -260px;
      }

      // &__enterprise-blob {
      //   width: 92%;
      //   max-width: 350px;
      //   padding-bottom: variables.$ts-spacing-4;

      //   &__content {
      //     width: unset;
      //     height: unset;
      //     padding: variables.$ts-spacing-2 variables.$ts-spacing-3;
      //   }
      // }

      &__service {
        h4 {
          margin-bottom: variables.$ts-spacing-3;
          font-style: normal;
          line-height: 24px;
        }
      }

      &__service-subservices ol {
        margin: variables.$ts-spacing-7 auto;
      }

      &__free-trial {
        position: static;
        display: flex;
      }

      &__free-trial ts-button {
        margin: auto;
      }

      &__our-plans {
        margin-top: 120px;
      }

      &__our-plans-accordion ts-pricing-table,
      &__our-plans-accordion ts-collapsible-section {
        margin: variables.$ts-spacing-1-5 0;
        display: block;
      }

      &__expertise-pricing-table {
        display: none !important;
      }

      &__expertise-pricing-table-mobile {
        display: block;
      }

      &__pricing-table__service-potential-copy {
        padding: variables.$ts-spacing-3 variables.$ts-spacing-1;
      }

      &__pricing-table__service-potential-test {
        padding: 0 variables.$ts-spacing-1;
      }

      &__enterprise-blob {
        //   margin-top: variables.$ts-spacing-8;
        //   height: 350px !important;
      }

      &__more-info-blob {
        //   margin-top: variables.$ts-spacing-5;
        //   height: 350px;
      }

      &__pricing-table-exagon {
        transform: translate(-50%, 0) scale(1);
      }

      ts-request-trial {
        margin-top: variables.$ts-spacing-15;
      }
    }
  }

  @media only screen and (max-width: variables.$ts-mobile-max) {
    .page-haka__services-list {
      max-width: 250px;
    }
  }

  @media only screen and (min-width: 700px) and (max-width: 800px) {
    .page-haka__pricing-table-exagon {
      transform: translate(-50%, 0) scale(1.1);
    }
  }

  @media only screen and (min-width: 800px) and (max-width: 900px) {
    .page-haka__pricing-table-exagon {
      transform: translate(-50%, 0) scale(1.3);
    }
  }

  @media only screen and (max-width: 600px) {
    .page-haka__pricing-table-exagon {
      transform: translate(-50%, 0) scale(0.8);
    }
  }
</style>

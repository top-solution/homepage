<svelte:options tag="ts-page-haka" />

<script>
  import "@material/mwc-snackbar";
  import {
    performanceTable,
    performanceColumns,
    expertiseTable,
    expertiseColumns,
    expertiseSubColumns,
    mobileExpertiseTables,
    mobileExpertiseColumns,
  } from "./haka/tablesDefinition";

  let contactUsOpen = false;
  let snackbarElement = null;

  const collapsibleHeights = {
    performance: 0,
    expertise180: 0,
    expertise360: 0,
    potential: 0,
  };

  let expandedSection = null;

  function handleRequestTrialSubmit() {
    snackbarElement.show();
  }
</script>

<ts-layout class="page-haka">
  <div class="page-haka__copy">
    <h1 class="title-2">測 HAKA</h1>
    <p>
      Le <b>Risorse Umane</b> sono il cardine delle organizzazioni: le idee
      guidano il
      <b>cambiamento</b>, le <b>persone</b> lo realizzano.
    </p>
    <video class="page-haka__video" controls>
      <source src="videos/haka.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="page-haka__services">
    <div class="page-haka__services-blob">
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
    <h2>Scegli tra i <b>SERVIZI</b></h2>
    <ol class="page-haka__services-list">
      <li><a href="#performance">Valutazione performance</a></li>
      <li><a href="#expertise">Bilancio di competenza</a></li>
      <li><a href="#potential">Valutazione del potenziale</a></li>
    </ol>
    <ts-button
      class="page-haka__services-brochure-button"
      variant="primary"
      href="https://www.example.com"
      target="_blank">SCARICA BROCHURE</ts-button
    >
  </div>
  <div class="page-haka__who-chooses-haka">
    <h3>Chi ha scelto <b>HAKA</b></h3>
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

    <div class="contact-us">
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
  <div id="page-haka__service-performance" class="page-haka__service">
    <h4>Valutazione delle performance</h4>
    <p>
      Permette di <b>comprendere</b> quali <b>risultati professionali</b> ha
      raggiunto la persona nel corso del tempo e come ha espresso il proprio
      <b>contributo</b> all’interno dell’organizzazione.
    </p>
    <div class="page-haka__service-blob page-haka__service-blob--flipped">
      <ts-blob
        shape="snail"
        variance="0.25"
        style="min-width: 900px;"
        fade="x"
        flip="true"
        fill="#EBEAF3"
      >
        <div style="min-width: 900px; height: 500px; " />
      </ts-blob>
    </div>
    <div class="page-haka__service-subservices">
      <ol>
        <li>AUTO VALUTAZIONE</li>
        <li>ETERO VALUTAZIONE</li>
      </ol>
      <div id="page-haka__free-trial">
        <ts-button variant="secondary" href="">PROVA GRATUITA</ts-button>
      </div>
    </div>
  </div>
  <div id="page-haka__service-expertise" class="page-haka__service">
    <h4>Bilancio di competenza</h4>
    <p>
      Permette di comprendere come le persone <b>esprimono</b> professionalmente
      <b>le conoscenze</b>, le capacità e le qualità professionali nella
      realizzazione quotidiana del loro lavoro e come esse impattano nel sistema
      azienda. La metodologia consiste nel far <b>valutare</b> il candidato da
      più persone che interagiscono lavorativamente con lui in modo
      <b>diretto</b>
      o <b>indiretto</b>
      (responsabili, colleghi e riporti).
    </p>
    <div class="page-haka__service-blob">
      <ts-blob
        shape="snail"
        variance="0.25"
        style="min-width: 900px;"
        fade="x"
        fill="#EBEAF3"
      >
        <div style="min-width: 900px; height: 500px; " />
      </ts-blob>
    </div>
    <div class="page-haka__service-subservices">
      <ol>
        <li>VALUTAZIONE 180°</li>
        <li>VALUTAZIONE 360°</li>
      </ol>
    </div>
  </div>
  <div id="page-haka__service-potential" class="page-haka__service">
    <h4>Valutazione del potenziale</h4>
    <p>
      È un processo attraverso il quale è possibile comprendere quali sono le
      logiche e gli <b>schemi mentali</b> utilizzati dalle persone nella
      realizzazione delle attività lavorative. È incentrata sull’analisi delle
      <b>capacità manageriali</b>, gestionali ed organizzative ed è finalizzata
      a comprendere se la persona possiede i <b>requisiti</b> per ricoprire una posizione
      organizzativa diversa o superiore a quella attuale.
    </p>
    <div class="page-haka__service-blob page-haka__service-blob--flipped">
      <ts-blob
        shape="snail"
        variance="0.25"
        style="min-width: 900px;"
        fade="x"
        flip="true"
        fill="#EBEAF3"
      >
        <div style="min-width: 900px; height: 500px; " />
      </ts-blob>
    </div>
    <div class="page-haka__service-subservices">
      <ol>
        <li>ASSESSMENT CENTER</li>
      </ol>
    </div>
  </div>
  <div class="page-haka__our-plans">
    <h2>I nostri <b>PIANI</b></h2>
    <p>
      Ogni piano è <b>one shot</b>, scegliendo <b>Haka</b> sei libero di <br />
      utilizzare il servizio <b>senza</b> effettuare <b>abbonamenti</b>
    </p>
  </div>
  <div class="page-haka__our-plans-accordion" style="position: relative;">
    <!-- TODO: Use hexagon component -->
    <div
      style=" position: absolute; z-index: -1; top: 0; left: 0; right: 0; bottom: 0;top: -150px;"
    >
      <img
        class="page-haka__our-plans-accordion-hexagon"
        src="../img/hexagon-secondary-temp.svg"
        alt=""
        style={expandedSection === null
          ? undefined
          : `height: ${collapsibleHeights[expandedSection] + 100}px !important`}
      />
    </div>
    <ts-pricing-table
      title="Valutazione delle performance"
      rows={performanceTable}
      columns={performanceColumns}
      expanded={expandedSection === "performance"}
      on:expand={() =>
        expandedSection === "performance"
          ? (expandedSection = null)
          : (expandedSection = "performance")}
      on:collapsible-height-change={(e) =>
        (collapsibleHeights.performance = e.detail.height - 260)}
    >
      <div class="page-haka__enterprise-blob">
        <ts-blob
          interactive="true"
          shape="hexagon"
          style="display: inline-block; max-width: 560px;"
          fill="#EBEAF3"
          padding="48"
          variance="1.2"
        >
          <div class="page-haka__enterprise-blob__content">
            <p>Desideri un <b>piano custom</b>?</p>
            <p>
              Scegli il piano <b>ENTREPRISE</b>
            </p>
            <ts-button
              variant="primary"
              href="/contacts.html"
              style="display: inline-block;">Contattaci</ts-button
            >
          </div>
        </ts-blob>
      </div>
    </ts-pricing-table>
    <ts-pricing-table
      id="page-haka__expertise-pricing-table"
      title="Bilancio di competenza"
      rows={expertiseTable}
      columns={expertiseColumns}
      subcolumns={expertiseSubColumns}
      expanded={expandedSection === "expertise"}
      on:expand={() =>
        expandedSection === "expertise"
          ? (expandedSection = null)
          : (expandedSection = "expertise")}
      on:collapsible-height-change={(e) =>
        (collapsibleHeights.expertise = e.detail.height - 240)}
    >
      <div class="page-haka__enterprise-blob">
        <ts-blob
          interactive="true"
          shape="hexagon"
          style="display: inline-block; max-width: 560px;"
          fill="#EBEAF3"
          padding="48"
          variance="1.2"
        >
          <div class="page-haka__enterprise-blob__content">
            <p>Desideri un <b>piano custom</b>?</p>
            <p>
              Scegli il piano <b>ENTREPRISE</b>
            </p>
            <ts-button
              variant="primary"
              href="/contacts.html"
              style="display: inline-block;">Contattaci</ts-button
            >
          </div>
        </ts-blob>
      </div>
    </ts-pricing-table>
    <ts-pricing-table
      class="page-haka__expertise-pricing-table-mobile"
      title="Bilancio di competenza 180°"
      rows={mobileExpertiseTables[0]}
      columns={mobileExpertiseColumns}
      expanded={expandedSection === "expertise180"}
      on:expand={() =>
        expandedSection === "expertise180"
          ? (expandedSection = null)
          : (expandedSection = "expertise180")}
      on:collapsible-height-change={(e) =>
        (collapsibleHeights.expertise180 = e.detail.height - 180)}
    >
      <div class="page-haka__enterprise-blob">
        <ts-blob
          interactive="true"
          shape="hexagon"
          style="display: inline-block; max-width: 560px;"
          fill="#EBEAF3"
          padding="48"
          variance="1.2"
        >
          <div class="page-haka__enterprise-blob__content">
            <p>Desideri un <b>piano custom</b>?</p>
            <p>
              Scegli il piano <b>ENTREPRISE</b>
            </p>
            <ts-button
              variant="primary"
              href="/contacts.html"
              style="display: inline-block;">Contattaci</ts-button
            >
          </div>
        </ts-blob>
      </div>
    </ts-pricing-table>
    <ts-pricing-table
      title="Bilancio di competenza 360°"
      class="page-haka__expertise-pricing-table-mobile"
      rows={mobileExpertiseTables[1]}
      columns={mobileExpertiseColumns}
      expanded={expandedSection === "expertise360"}
      on:expand={() => {
        expandedSection === "expertise360"
          ? (expandedSection = null)
          : (expandedSection = "expertise360");
      }}
      on:collapsible-height-change={(e) =>
        (collapsibleHeights.expertise360 = e.detail.height - 140)}
    >
      <div class="page-haka__enterprise-blob">
        <!-- {ptH} -->
        <ts-blob
          interactive="true"
          shape="hexagon"
          style="display: inline-block; max-width: 560px;"
          fill="#EBEAF3"
          padding="48"
          variance="1.2"
        >
          <div class="page-haka__enterprise-blob__content">
            <p>Desideri un <b>piano custom</b>?</p>
            <p>
              Scegli il piano <b>ENTREPRISE</b>
            </p>
            <ts-button
              variant="primary"
              href="/contacts.html"
              style="display: inline-block;">Contattaci</ts-button
            >
          </div>
        </ts-blob>
      </div>
    </ts-pricing-table>
    <ts-collapsible-section
      class="pricing-table"
      title="Valutazione del potenziale"
      expanded={expandedSection === "potential"}
      on:expand={() =>
        expandedSection === "potential"
          ? (expandedSection = null)
          : (expandedSection = "potential")}
      on:collapsible-height-change={(e) =>
        (collapsibleHeights.potential = e.detail.height)}
    >
      <div class="page-haka__service-potential-copy">
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
      <div class="page-haka__service-potential-test">
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

      <div class="page-haka__more-info-blob">
        <ts-blob
          interactive="true"
          shape="hexagon"
          style="display: inline-block; max-width: 560px;"
          fill="#EBEAF3"
          padding="48"
          variance="1.2"
        >
          <div class="page-haka__more-info-blob__content">
            <p>Desideri maggiori <b>informazioni</b>?</p>
            <ts-button
              variant="primary"
              href="/contacts.html"
              style="display: inline-block;">Contattaci</ts-button
            >
          </div>
        </ts-blob>
      </div>
    </ts-collapsible-section>
  </div>
  <ts-request-trial on:formsubmit={handleRequestTrialSubmit} />
  <mwc-snackbar
    bind:this={snackbarElement}
    labelText="La tua richiesta è stata presa in carico dal nostro team"
  />
  <!-- <div style="width: 100%; height: 50vh" /> -->
</ts-layout>

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  .page-haka {
    display: block;
    color: var(--ts-blue-color);
    box-sizing: border-box;
  }

  .page-haka__copy,
  .page-haka__copy h1 {
    text-align: center;
  }

  .page-haka__copy h1 {
    margin-top: var(--ts-spacing-15);
  }

  .page-haka__video {
    width: 100%;
    height: auto;
    margin: var(--ts-spacing-3) 0;
  }

  .page-haka__services {
    margin-top: var(--ts-spacing-15);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-bottom: 310px;
  }

  .page-haka__services-blob {
    width: 1100px;
    position: absolute;
    top: -70px;
    left: -150px;
    z-index: -1;
  }

  .page-haka__services h2 {
    text-transform: none;
    text-align: center;
    margin-bottom: var(--ts-spacing-6);
  }

  .page-haka__services-list,
  .page-haka__service-subservices ol {
    margin: 0 auto;
    padding: 0;
    list-style: none;
    font-size: 28px;
    line-height: 28px;
    width: 390px;
    margin: 0 auto;
    text-align: left;
  }

  .page-haka__services-list li,
  .page-haka__service-subservices li {
    margin-bottom: var(--ts-spacing-3);
  }

  .page-haka__services-list a {
    font-weight: 400;
  }

  .page-haka__services-list a:hover {
    text-decoration: underline;
  }

  .page-haka__services-list li::before,
  .page-haka__service-subservices li::before {
    content: "";
    display: inline-block;
    height: 28px;
    width: 28px;
    background-image: url("img/icons/hexagon-list-item.svg");
    background-size: cover;
    margin: 0 var(--ts-spacing-4) -4px auto;
    padding: 0;
  }

  .page-haka__services-brochure-button {
    display: inline-block;
    margin-top: var(--ts-spacing-4);
  }

  .page-haka__who-chooses-haka__customers {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: var(--ts-spacing-15);
    flex-wrap: wrap;
  }

  .page-haka__who-chooses-haka__customers ts-picture {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    flex-wrap: wrap;
    margin: 0 var(--ts-spacing-9);
  }

  .page-haka__who-chooses-haka h3 {
    font-weight: 300;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    margin-bottom: var(--ts-spacing-4);
  }

  .page-haka__service {
    position: relative;
  }
  .page-haka__service + .page-haka__service {
    margin-top: 280px;
  }

  .page-haka__service p {
    width: 100%;
    max-width: 580px;
  }

  .page-haka__service h4 {
    margin-bottom: var(--ts-spacing-3);
    font-style: normal;
    font-weight: 900;
    font-size: 28px;
    line-height: 33px;
  }

  .page-haka__service-blob {
    position: absolute;
    width: 1450px;
    transform: scaleY(0.6);
    bottom: -500px;
    left: -500px;
    z-index: -1;
  }

  .page-haka__service-blob.page-haka__service-blob--flipped {
    right: -500px;
    left: unset;
  }

  #page-haka__service-expertise {
    text-align: right;
  }

  #page-haka__service-expertise p {
    margin-left: auto;
  }

  .page-haka__service-subservices {
    margin: var(--ts-spacing-4) 0;
    position: relative;
  }

  .page-haka__service-subservices li {
    font-weight: 500;
    margin-bottom: var(--ts-spacing-4);
  }

  #page-haka__free-trial {
    position: absolute;
    right: 0;
  }

  .contact-us {
    margin-bottom: var(--ts-spacing-10);
  }

  .page-haka__our-plans {
    margin-top: 300px;
    text-align: center;
  }

  .page-haka__our-plans h2 {
    text-transform: none;
  }

  ts-pricing-table {
    margin: var(--ts-spacing-1-5) 0 0;
    display: block;
  }

  .page-haka__our-plans-accordion ts-collapsible-section {
    margin: var(--ts-spacing-1-5) 0;
    display: block;
  }

  .page-haka__enterprise-blob {
    margin: 320px auto var(--ts-spacing-4);
    display: flex;
    justify-content: center;
  }

  .page-haka__enterprise-blob__content {
    padding: var(--ts-spacing-6) 0;
    text-align: center;
  }

  .page-haka__more-info-blob {
    margin: 200px auto;
    display: flex;
    justify-content: center;
  }

  .page-haka__more-info-blob__content {
    padding: var(--ts-spacing-6) 0;
    text-align: center;
  }

  .page-haka__expertise-pricing-table-mobile {
    display: none;
    font-size: 20px;
  }

  .page-haka__more-info-blob__content p {
    font-size: 20px;
  }

  .page-haka__service-potential-copy {
    padding-left: 30%;
    padding-right: var(--ts-spacing-8);
  }

  .page-haka__service-potential-copy p {
    font-size: 18px;
    font-weight: 300;
    line-height: 150%;
    margin: 0;
  }

  .page-haka__service-potential-test h4 {
    line-height: 14px;
    border-bottom: 1px solid black;
    padding-bottom: var(--ts-spacing-1);
    margin: var(--ts-spacing-2) 0;
  }

  .page-haka__service-potential-test ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .page-haka__service-potential-test ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .page-haka__service-potential-test li {
    font-weight: 300;
    font-size: 18px;
    padding: var(--ts-spacing-3) 0;
    border-bottom: 1px solid #404040;
    display: flex;
    align-items: center;
  }

  .page-haka__service-potential-test li:last-child {
    border-bottom: 0;
  }

  .page-haka__our-plans-accordion-hexagon {
    width: auto;
    height: 500px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0) scaleY(1);
    transition: height var(--ts-transition-timing-default)
        var(--ts-transition-function-default),
      width var(--ts-transition-timing-default)
        var(--ts-transition-function-default),
      transform var(--ts-transition-timing-default)
        var(--ts-transition-function-default);
  }

  ts-request-trial {
    display: block;
    margin: 200px auto 0;
    max-width: 720px;
  }

  @media only screen and (max-width: 900px) {
    .page-haka {
      padding: 0 var(--ts-spacing-3);
      overflow-x: hidden;
    }

    .page-haka__services-blob {
      width: 1100px;
      position: absolute;
      top: -120px;
      left: -450px;
      z-index: -1;
    }

    .page-haka__services-list,
    .page-haka__service-subservices ol {
      font-size: 18px;
      width: 250px;
    }

    .page-haka__services-list li::before,
    .page-haka__service-subservices li::before {
      height: 24px;
      width: 24px;
      margin-right: var(--ts-spacing-2);
    }

    .page-haka__who-chooses-haka__customers {
      margin: 0 -24px 0;
    }

    .page-haka__who-chooses-haka__customers ts-picture {
      margin: 0 var(--ts-spacing-3) var(--ts-spacing-2);
    }

    .page-haka__service + .page-haka__service {
      margin-top: var(--ts-spacing-10);
    }

    .page-haka__service h4 {
      margin-bottom: var(--ts-spacing-3);
      font-style: normal;
      font-weight: 900;
      font-size: 20px;
      line-height: 24px;
    }

    .page-haka__service-blob {
      position: absolute;
      width: 950px;
      transform: scaleY(0.6);
      bottom: -300px;
      left: -400px;
      z-index: -1;
    }

    .page-haka__service-subservices ol {
      margin: var(--ts-spacing-7) auto;
    }

    #page-haka__free-trial {
      position: static;
      display: flex;
    }

    #page-haka__free-trial ts-button {
      margin: auto;
    }

    .page-haka__our-plans {
      margin-top: 120px;
    }

    .page-haka__our-plans-accordion ts-pricing-table,
    .page-haka__our-plans-accordion ts-collapsible-section {
      margin: var(--ts-spacing-1-5) 0;
      display: block;
    }

    .page-haka__enterprise-blob__content {
      padding: var(--ts-spacing-2) 0;
    }

    #page-haka__expertise-pricing-table {
      display: none;
    }

    .page-haka__expertise-pricing-table-mobile {
      display: block;
    }

    .page-haka__service-potential-copy {
      padding: var(--ts-spacing-3) var(--ts-spacing-1);
    }

    .page-haka__service-potential-test {
      padding: 0 var(--ts-spacing-1);
    }

    .page-haka__enterprise-blob {
      margin-top: var(--ts-spacing-8);
      height: 350px !important;
    }

    .page-haka__more-info-blob {
      margin-top: var(--ts-spacing-5);
      height: 350px !important;
    }
  }
</style>

<svelte:options tag="ts-page-company-development" />

<script>
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
      <li><a href="#management_diagnostic">Management diagnostic</a></li>
      <li><a href="#clima_organizzativo">Clima organizzativo</a></li>
      <li><a href="#employees_engagement">Employees engagement</a></li>
      <li><a href="#stress_lavoro_correlato">Stress lavoro correlato</a></li>
      <li><a href="#customer_satisfaction">Customer satisfaction</a></li>
    </ol>
    <ts-button
      class="page-company-development__services-contact-us-button"
      variant="primary"
      href="/contacts.html"
      target="_blank">Contattaci</ts-button
    >
  </div>
  <div class="page-company-development__who-chooses-company-development">
    <h3 class="title-3 title-form">Chi ha scelto <b>HAKA</b></h3>
    <div
      class="page-company-development__who-chooses-company-development__customers"
    >
      <ts-picture
        base="customers"
        src="unioneIndustriale"
        alt="Unione Industriale"
      />
      <ts-picture base="customers" src="confindustria" alt="Confindustria" />
    </div>
    <div
      class="page-company-development__who-chooses-company-development__customers"
    >
      <ts-picture base="customers" src="avio" alt="Carrefour" />
      <ts-picture base="customers" src="sanMarco" alt="San Marco" />
      <ts-picture base="customers" src="magna" alt="Euro Search" />
    </div>
  </div>
  <div
    id="page-company-development__service-performance"
    class="page-company-development__service"
  >
    <h4 class="title-4">Management diagnostic</h4>
    <p class="body-2">
      È un’attività di <b>analisi organizzativa</b>, veloce e dinamica, centrata
      sullo studio delle relazioni professionali, funzionali e interfunzionali
      che permette di comprendere il potenziale delle persone, le
      <b>dinamiche di gruppo</b>, l’integrazione tra organigramma dichiarato e
      reale, i modelli di comunicazione e la qualità delle politiche
      organizzative.
    </p>
    <ts-snail color="#8D88BA" flip="true" />
  </div>
  <div
    id="page-company-development__clima_organizzativo"
    class="page-company-development__service"
  >
    <h4 class="title-4">Clima organizzativo</h4>
    <p class="body-2">
      <b>Analisi</b> che permette di comprendere “come le persone vivono” in
      azienda, attraverso l’<b>osservazione</b> “dell’aria che si respira”
      all’interno dell’<b>organizzazione</b> e durante la loro attività
      quotidiana. Fotografa la distanza percepita tra la direzione e l’<b
        >ambiente lavorativo</b
      >.
    </p>
    <ts-snail color="#4C429C" />
  </div>
  <div
    id="page-company-development__service-potential"
    class="page-company-development__service"
  >
    <h4 class="title-4">Employees engagement</h4>
    <p class="body-2">
      Esprime il livello di <b>coinvolgimento emotivo</b> e <b>professionale</b>
      vissuto dal dipendente nel lavoro e per l’organizzazione. Si focalizza sul
      funzionamento ottimale della persona e sulle potenzialità piuttosto che sulle
      debolezze e disfunzioni. L’analisi del <b>coinvolgimento</b> definisce
      quali sono gli elementi sui quali occorre sviluppare la
      <b>partecipazione</b>.
    </p>
    <ts-snail color="#4857A3" flip="true" />
  </div>
  <div
    id="page-company-development__stress_lavoro_correlato"
    class="page-company-development__service"
  >
    <h4 class="title-4">Stress lavoro correlato</h4>
    <p class="body-2">
      Può essere definito come lo <b>squilibrio percepito</b> dal lavoratore
      quando le richieste dell’ambiente di lavoro sono eccessive rispetto alla
      capacità individuale di affrontare lo stress conseguente. <b>Aiuta</b>
      quindi l’organizzazione a mettere a disposizione le adeguate risorse per
      <b>fronteggiarle</b>.
    </p>
    <ts-snail color="#312783" />
  </div>
  <div
    id="page-company-development__employees_engagement"
    class="page-company-development__service"
  >
    <h4 class="title-4">Employees engagement</h4>
    <p class="body-2">
      La soddisfazione è intesa come <b>stato psicologico</b> derivante da un
      gap tra la <b>valutazione</b> dell’avvenuta <b>esperienza</b> di consumo e
      le attese del <b>consumatore</b> in merito a tale esperienza. La ricerca è
      finalizzata a <b>verificare</b> il livello di gradimento degli
      utilizzatori e a creare una mappa delle priorità per <b>ottimizzare</b>
      gli interventi con le <b>risorse disponibili</b>.
    </p>
    <ts-snail color="#211A58" flip="true" />
  </div>
</ts-layout>

<style lang="scss" global>
  @use "../styles/variables";

  @use "../styles/main.scss";

  body {
    background-color: red;
    color: #0084f6;
    transition: background-color 0.3s;
  }
  html {
    background-color: #1d3040;
    color: #bfc2c7;
  }

  .page-company-development {
    display: block;
    color: variables.$ts-blue-color;
    box-sizing: border-box;
  }

  .page-company-development__copy {
    & p {
      text-align: center;
      margin: variables.$ts-spacing-15 0 variables.$ts-spacing-6;
    }
  }

  .page-company-development__video {
    width: 100%;
    height: auto;
    margin: variables.$ts-spacing-3 0;
  }

  .page-company-development__services {
    margin-top: variables.$ts-spacing-15;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-bottom: 310px;
  }

  .page-company-development__services-blob {
    width: 1100px;
    position: absolute;
    top: -90px;
    left: -150px;
    z-index: -1;
  }

  .page-company-development__services h2 {
    text-transform: none;
    text-align: center;
    margin-bottom: variables.$ts-spacing-6;
  }

  .page-company-development__choose-services {
    margin-bottom: variables.$ts-spacing-6;
  }

  .page-company-development__services-list,
  .page-company-development__service-subservices ol {
    margin: 0 auto;
    padding: 0;
    list-style: none;
    line-height: 28px;
    margin: 0 auto;
    text-align: left;
  }

  .page-company-development__services-list li,
  .page-company-development__service-subservices li {
    margin-bottom: variables.$ts-spacing-3;
  }

  .page-company-development__services-list a {
    font-weight: 400;
  }

  .page-company-development__services-list a:hover {
    text-decoration: underline;
  }

  .page-company-development__services-list li::before,
  .page-company-development__service-subservices li::before {
    content: "";
    display: inline-block;
    height: 28px;
    width: 28px;
    background-image: url("img/icons/hexagon-list-item.svg");
    background-size: cover;
    margin: 0 variables.$ts-spacing-4 -4px auto;
    padding: 0;
  }

  .page-company-development__services-contact-us-button {
    display: inline-block;
    margin-top: variables.$ts-spacing-4;
  }

  .page-company-development__who-chooses-company-development {
    margin-bottom: 200px;
  }

  .page-company-development__who-chooses-company-development__customers {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: variables.$ts-spacing-8;
    flex-wrap: wrap;
  }

  .page-company-development__who-chooses-company-development__customers
    ts-picture {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    flex-wrap: wrap;
    margin: 0 variables.$ts-spacing-6;
  }

  .page-company-development__who-chooses-company-development h3 {
    font-weight: 300;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    margin-bottom: variables.$ts-spacing-4;
  }

  .page-company-development__service {
    position: relative;
  }
  .page-company-development__service + .page-company-development__service {
    margin-top: 280px;
  }

  .page-company-development__service p {
    width: 100%;
    max-width: 580px;
  }

  .page-company-development__service h4 {
    margin-bottom: variables.$ts-spacing-3;
    line-height: 33px;
  }

  #page-company-development__clima_organizzativo {
    text-align: right;
  }

  #page-company-development__clima_organizzativo p {
    margin-left: auto;
  }

  .page-company-development__service-subservices {
    margin: variables.$ts-spacing-4 0;
    position: relative;
  }

  .page-company-development__service-subservices li {
    font-weight: 500;
    margin-bottom: variables.$ts-spacing-4;
  }

  #page-company-development__free-trial {
    position: absolute;
    right: 0;
  }

  #page-company-development__stress_lavoro_correlato {
    &,
    p {
      text-align: right;
      margin-left: auto;
    }
  }

  .contact-us {
    margin-bottom: variables.$ts-spacing-10;
  }

  .page-company-development__our-plans {
    margin-top: 300px;
    text-align: center;

    .body-2 {
      margin-bottom: variables.$ts-spacing-6;
    }
  }

  ts-pricing-table {
    margin: variables.$ts-spacing-1-5 0 0;
    display: block;
  }

  .page-company-development__our-plans-accordion ts-collapsible-section {
    margin: variables.$ts-spacing-1-5 0;
    display: block;
  }

  .page-company-development__enterprise-blob {
    margin: 280px auto 180px;
    display: flex;
    justify-content: center;
  }

  .page-company-development__enterprise-blob__content {
    padding: variables.$ts-spacing-6 0;
    text-align: center;

    & .title-6 {
      font-weight: 300;
    }

    .body-2 {
      margin: variables.$ts-spacing-3 0;
    }
  }

  .page-company-development__more-info-blob {
    margin: 200px auto;
    display: flex;
    justify-content: center;
  }

  .page-company-development__more-info-blob__content {
    padding: variables.$ts-spacing-8 0;
    text-align: center;

    .body-2 {
      margin: variables.$ts-spacing-3 0;
    }
  }

  .page-company-development__expertise-pricing-table-mobile {
    display: none;
    font-size: 20px;
  }

  .page-company-development__more-info-blob__content p {
    font-size: 20px;
  }

  .page-company-development__service-potential-copy {
    padding-left: 30%;
    padding-right: variables.$ts-spacing-8;
  }

  .page-company-development__service-potential-copy p {
    font-size: 18px;
    font-weight: 300;
    line-height: 150%;
    margin: 0;
  }

  .page-company-development__service-potential-test h4 {
    line-height: 14px;
    border-bottom: 1px solid black;
    padding-bottom: variables.$ts-spacing-1;
    margin: variables.$ts-spacing-2 0;
  }

  .page-company-development__service-potential-test ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .page-company-development__service-potential-test ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .page-company-development__service-potential-test li {
    font-weight: 300;
    font-size: 18px;
    padding: variables.$ts-spacing-3 0;
    border-bottom: 1px solid #404040;
    display: flex;
    align-items: center;
  }

  .page-company-development__service-potential-test li:last-child {
    border-bottom: 0;
  }

  #page-company-development__employees_engagement {
    margin-bottom: 200px;
  }

  @media only screen and (max-width: variables.$ts-tablet-max) {
    .page-company-development {
      padding: 0 variables.$ts-spacing-3;
      overflow-x: hidden;
    }

    .page-company-development__services-list,
    .page-company-development__service-subservices ol {
      font-size: 18px;
      width: 250px;
    }

    .page-company-development__services-list li::before,
    .page-company-development__service-subservices li::before {
      height: 24px;
      width: 24px;
      margin-right: variables.$ts-spacing-2;
    }

    .page-company-development__who-chooses-company-development__customers {
      margin: 0 -24px 0;
    }

    .page-company-development__who-chooses-company-development__customers
      ts-picture {
      margin: 0 variables.$ts-spacing-3 variables.$ts-spacing-2;
    }

    .page-company-development__service + .page-company-development__service {
      margin-top: variables.$ts-spacing-10;
    }

    .page-company-development__service h4 {
      margin-bottom: variables.$ts-spacing-3;
      font-style: normal;
      line-height: 24px;
    }

    .page-company-development__service-subservices ol {
      margin: variables.$ts-spacing-7 auto;
    }

    #page-company-development__free-trial {
      position: static;
      display: flex;
    }

    #page-company-development__free-trial ts-button {
      margin: auto;
    }

    .page-company-development__enterprise-blob__content {
      padding: variables.$ts-spacing-2 0;
    }

    .page-company-development__service-potential-copy {
      padding: variables.$ts-spacing-3 variables.$ts-spacing-1;
    }

    .page-company-development__service-potential-test {
      padding: 0 variables.$ts-spacing-1;
    }

    .page-company-development__enterprise-blob {
      margin-top: variables.$ts-spacing-8;
      height: 350px !important;
    }

    .page-company-development__more-info-blob {
      margin-top: variables.$ts-spacing-5;
      height: 350px !important;
    }
  }
</style>

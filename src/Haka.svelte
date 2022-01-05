<svelte:options tag="ts-page-haka" />

<script>
  import "@material/mwc-snackbar";

  let contactUsOpen = false;
  let contactUsElement = null;
  let snackbarElement = null;

  function handleClick() {
    contactUsOpen = true;

    setTimeout(() => {
      contactUsElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }, 200);
  }

  function handleContactUsSubmit() {
    contactUsOpen = false;
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

    <div bind:this={contactUsElement} class="contact-us">
      <ts-contact-us
        open={contactUsOpen}
        on:formsubmit={handleContactUsSubmit}
      />
    </div>
    <mwc-snackbar
      bind:this={snackbarElement}
      labelText="Grazie per aver inviato la tua candidatura spontanea!"
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
      <ts-button id="page-haka__free-trial" variant="secondary" href=""
        >PROVA GRATUITA</ts-button
      >
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
</ts-layout>

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  .page-haka {
    color: var(--ts-blue-color);
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

  @media only screen and (max-width: 900px) {
    .page-haka__copy {
      max-width: 80%;
    }
  }
</style>

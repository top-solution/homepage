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
      <li><a href="#competenza">Bilancio di competenza</a></li>
      <li><a href="#potenziale">Valutazione del potenziale</a></li>
    </ol>
    <ts-button
      class="page-haka__services-brochure-button"
      variant="primary"
      href="https://www.example.com"
      target="_blank">SCARICA BROCHURE</ts-button
    >
  </div>
  <div class="page-haka__who-choose-haka">
    <h3>Chi ha scelto <b>HAKA</b></h3>
    <div class="page-haka__who-choose-haka__customers">
      <ts-picture
        base="customers"
        src="unioneIndustriale"
        alt="Unione Industriale"
      />
      <ts-picture base="customers" src="confindustria" alt="Confindustria" />
    </div>
    <div class="page-haka__who-choose-haka__customers">
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
  </div></ts-layout
>

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

  .page-haka__services-list {
    margin: 0 auto;
    padding: 0;
    list-style: none;
    font-size: 28px;
    line-height: 28px;
    width: 390px;
    margin: 0 auto;
  }

  .page-haka__services-list li {
    margin-bottom: var(--ts-spacing-3);
  }

  .page-haka__services-list a {
    font-weight: 400;
  }

  .page-haka__services-list a:hover {
    text-decoration: underline;
  }

  .page-haka__services-list li::before {
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

  .page-haka__who-choose-haka__customers {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }

  .page-haka__who-choose-haka__customers ts-picture {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    flex-wrap: wrap;
    margin: 0 var(--ts-spacing-9);
  }

  .page-haka__who-choose-haka h3 {
    font-weight: 300;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    margin-bottom: var(--ts-spacing-4);
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

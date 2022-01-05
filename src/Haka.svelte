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
    <h1 class="title-2">haka</h1>
    <p>
      Top Solution nasce dall’associazione di una grande <b>expertise</b> nel
      settore della <b>consulenza informatica</b> e della
      <b>gestione delle risorse umane</b>. Il haka di informatici è affiancato
      da <b>psicologi del lavoro</b> per la realizzazione delle
      <b>piattaforme HR</b>
      e per la progettazione e la realizzazione di tutti i progetti rivolti alle
      <b>risorse umane</b>.
    </p>
  </div>
  <div class="people">
    <div class="people__spacer" />
    <ts-haka-person name="Paolo Andruetto" companyrole="CEO" />
    <ts-haka-person name="Gabriele Destefanis" companyrole="CTO" />
    <div class="people__spacer" />
    <ts-haka-person name="Luca Osti" companyrole="Backend Developer" />
    <ts-haka-person name="Gabriele Spada" companyrole="Frontend Developer" />
    <ts-haka-person name="Luca Barbetti" companyrole="Frontend Developer" />
    <div class="people__spacer" />
    <ts-haka-person name="Elisa Solinas" companyrole="Backend Developer" />
    <ts-haka-person name="Federico Valetti" companyrole="Analista Funzionale" />
    <div class="people__spacer" />
    <ts-haka-person name="Matteo Marsala" companyrole="Frontend Developer" />
    <ts-haka-person name="Martina Bilancieri" companyrole="UX/UI Designer" />
    <ts-haka-person src="img/question_mark.svg" name="Vuoi far parte del haka?">
      <ts-button
        id="people__contact-us-button"
        variant="primary"
        component="button"
        on:click={handleClick}>Candidati</ts-button
      >
    </ts-haka-person>
  </div>

  <div bind:this={contactUsElement} class="contact-us">
    <ts-contact-us open={contactUsOpen} on:formsubmit={handleContactUsSubmit} />
  </div>
  <mwc-snackbar
    bind:this={snackbarElement}
    labelText="Grazie per aver inviato la tua candidatura spontanea!"
  />
</ts-layout>

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  .page-haka {
    color: var(--ts-blue-color);
  }

  .people {
    margin: var(--ts-spacing-15) 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .people__spacer {
    flex: 0 1 16.6666%;
    max-width: 16.6666%;
  }

  ts-haka-person {
    margin: var(--ts-spacing-7) 0;
    flex: 0 1 33.3333%;
    max-width: 33.3333%;
  }

  #people__contact-us-button {
    margin-top: var(--ts-spacing-2);
  }

  .page-haka__giga-blob {
    display: block;
    position: absolute;
    width: 1400px;
    overflow: visible;
    top: -430px;
    left: -700px;
    z-index: -1;
  }

  .page-haka__giga-blob-mobile {
    display: none;
  }

  .contact-us {
    margin-bottom: var(--ts-spacing-10);
  }

  @media only screen and (max-width: 900px) {
    .page-haka__copy {
      max-width: 80%;
    }

    .people {
      margin: var(--ts-spacing-3) 0;
    }

    .page-haka__giga-blob {
      display: none;
    }

    .page-haka__giga-blob-mobile {
      display: block;
      position: absolute;
      width: 1400px;
      overflow: visible;
      top: -130px;
      left: -270px;
      z-index: -1;
    }

    ts-haka-person {
      margin: var(--ts-spacing-1) 2px;
      flex: 0 1 calc(50% - 4px);
      max-width: calc(50% - 4px);
    }

    .people__spacer {
      display: none;
    }
  }
</style>

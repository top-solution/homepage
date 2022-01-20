<svelte:options tag="ts-page-team" />

<script>
  import "@material/mwc-snackbar";
  import Blob from "./Blob.svelte";
  import Layout from "./Layout.svelte";
  import TeamPerson from "./TeamPerson.svelte";
  import ContactUs from "./ContactUs.svelte";

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

<ts-layout class="page-team">
  <div slot="external">
    <div class="page-team__giga-blob">
      <img src="img/giga-blob.svg" alt="" />
    </div>
    <div class="page-team__giga-blob-mobile">
      <img src="img/giga-blob-mobile.svg" alt="" />
    </div>
  </div>
  <div class="page-team__copy">
    <h1 class="title-2">Team</h1>
    <p>
      Top Solution nasce dall’associazione di una grande <b>expertise</b> nel
      settore della <b>consulenza informatica</b> e della
      <b>gestione delle risorse umane</b>. Il team di informatici è affiancato
      da <b>psicologi del lavoro</b> per la realizzazione delle
      <b>piattaforme HR</b>
      e per la progettazione e la realizzazione di tutti i progetti rivolti alle
      <b>risorse umane</b>.
    </p>
  </div>
  <div class="people">
    <div class="people__spacer" />
    <ts-team-person name="Paolo Andruetto" companyrole="CEO" />
    <ts-team-person name="Gabriele Destefanis" companyrole="CTO" />
    <div class="people__spacer" />
    <ts-team-person name="Luca Osti" companyrole="Backend Developer" />
    <ts-team-person name="Gabriele Spada" companyrole="Frontend Developer" />
    <ts-team-person name="Luca Barbetti" companyrole="Frontend Developer" />
    <div class="people__spacer" />
    <ts-team-person name="Elisa Solinas" companyrole="Backend Developer" />
    <ts-team-person name="Federico Valetti" companyrole="Analista Funzionale" />
    <div class="people__spacer" />
    <ts-team-person name="Matteo Marsala" companyrole="Frontend Developer" />
    <ts-team-person name="Martina Bilancieri" companyrole="UX/UI Designer" />
    <ts-team-person src="img/question_mark.svg" name="Vuoi far parte del team?">
      <ts-button
        id="people__contact-us-button"
        variant="primary"
        component="button"
        on:click={handleClick}>Candidati</ts-button
      >
    </ts-team-person>
  </div>

  <div bind:this={contactUsElement} class="contact-us">
    <ts-contact-us open={contactUsOpen} on:formsubmit={handleContactUsSubmit} />
  </div>
  <mwc-snackbar
    bind:this={snackbarElement}
    labelText="Grazie per aver inviato la tua candidatura spontanea!"
  />
</ts-layout>

<style lang="scss" global>
  @use "./styles/variables";

  @import "./styles/main.scss";

  .page-team {
    color: variables.$ts-blue-color;
  }

  .people {
    margin: variables.$ts-spacing-15 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .people__spacer {
    flex: 0 1 16.6666%;
    max-width: 16.6666%;
  }

  ts-team-person {
    margin: variables.$ts-spacing-7 0;
    flex: 0 1 33.3333%;
    max-width: 33.3333%;
  }

  #people__contact-us-button {
    margin-top: variables.$ts-spacing-2;
  }

  .page-team__giga-blob {
    display: block;
    position: absolute;
    width: 1400px;
    overflow: visible;
    top: -430px;
    left: -700px;
    z-index: -1;
  }

  .page-team__giga-blob-mobile {
    display: none;
  }

  .contact-us {
    margin-bottom: variables.$ts-spacing-10;
  }

  @media only screen and (max-width: 900px) {
    .page-team__copy {
      max-width: 80%;
    }

    .people {
      margin: variables.$ts-spacing-3 0;
    }

    .page-team__giga-blob {
      display: none;
    }

    .page-team__giga-blob-mobile {
      display: block;
      position: absolute;
      width: 1400px;
      overflow: visible;
      top: -130px;
      left: -270px;
      z-index: -1;
    }

    ts-team-person {
      margin: variables.$ts-spacing-1 2px;
      flex: 0 1 calc(50% - 4px);
      max-width: calc(50% - 4px);
    }

    .people__spacer {
      display: none;
    }
  }
</style>

<svelte:options tag="ts-page-team" />

<script>
  import Blob from "./Blob.svelte";
  import Layout from "./Layout.svelte";
  import TeamPerson from "./TeamPerson.svelte";
  import ContactUs from "./ContactUs.svelte";

  let contactUsOpen = false;
  let contactUsElement = null;

  function handleClick() {
    contactUsOpen = true;
  }

  function handleContactUsSubmit() {
    debugger;
    contactUsOpen = false;
  }
</script>

<ts-layout class="page-team">
  <div
    slot="external"
    class="giga-blob"
    style=" position: absolute; width: 1400px;  overflow: visible;"
  >
    <img src="img/giga-blob.svg" alt="" />
  </div>
  <div class="copy">
    <h1>Team</h1>
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
        on:click={(e) => {
          contactUsOpen = true;

          setTimeout(() => {
            contactUsElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          }, 200);
        }}>Candidati</ts-button
      >
    </ts-team-person>
  </div>

  <div bind:this={contactUsElement} class="contact-us">
    <ts-contact-us open={contactUsOpen} on:formsubmit={handleContactUsSubmit} />
  </div>
</ts-layout>

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  .page-team {
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

  ts-team-person {
    margin: var(--ts-spacing-7) 0;
    flex: 0 1 33.3333%;
    max-width: 33.3333%;
  }

  @media only screen and (max-width: 900px) {
    ts-team-person {
      margin: var(--ts-spacing-3) 0;
      flex: 0 1 calc(50% - 16px);
      max-width: calc(50% - 16px);
      margin-left: 8px;
      margin-right: 8px;
    }

    .people__spacer {
      display: none;
    }
  }

  #people__contact-us-button {
    margin-top: var(--ts-spacing-2);
  }

  .giga-blob {
    position: absolute;
    width: 1400px;
    overflow: visible;
    top: -450px;
    left: -700px;
    z-index: -1;
  }

  .contact-us {
    margin-bottom: var(--ts-spacing-10);
  }
</style>

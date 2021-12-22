<svelte:options tag="ts-page-team" />

<script>
  import Blob from "./Blob.svelte";
  import Layout from "./Layout.svelte";
  import TeamPerson from "./TeamPerson.svelte";
  import ContactUs from "./ContactUs.svelte";

  let contactUsOpen = false;

  function handleClick() {
    contactUsOpen = true;
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
    <div class="people__row">
      <ts-team-person name="Paolo Andruetto" companyrole="CEO" />
      <ts-team-person name="Gabriele Destefanis" companyrole="CTO" />
    </div>
    <div class="people__row">
      <ts-team-person name="Luca Osti" companyrole="Backend Developer" />
      <ts-team-person name="Gabriele Spada" companyrole="Frontend Developer" />
      <ts-team-person name="Luca Barbetti" companyrole="Frontend Developer" />
    </div>
    <div class="people__row">
      <ts-team-person name="Elisa Solinas" companyrole="Backend Developer" />
      <ts-team-person
        name="Federico Valetti"
        companyrole="Analista Funzionale"
      />
    </div>
    <div class="people__row">
      <ts-team-person name="Matteo Marsala" companyrole="Frontend Developer" />
      <ts-team-person name="Martina Bilancieri" companyrole="UX/UI Designer" />
      <ts-team-person
        src="img/question_mark.svg"
        name="Vuoi far parte del team?"
      >
        <button on:click={(e) => (contactUsOpen = true)}>Contattaci</button>
      </ts-team-person>
    </div>
  </div>

  <div class="contact-us" class:contact-us--open={contactUsOpen}>
    <ts-contact-us />
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
    margin: var(--ts-spacing-10) 0;
  }

  .people__row {
    margin: var(--ts-spacing-9) 0;
    display: flex;
    justify-content: center;
  }

  .giga-blob {
    position: absolute;
    width: 1400px;
    overflow: visible;
    top: -45px;
    left: -300px;
    z-index: -1;
  }

  .contact-us {
    max-height: 0;
    transition: max-height 250ms;
    overflow: hidden;
  }

  .contact-us--open {
    max-height: 950px;
  }
</style>

<svelte:options tag="ts-page-team" />

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

<ts-layout class="page-team">
  <ts-header-hexagons-desktop />
  <ts-header-hexagons-mobile />
  <div slot="external">
    <div class="page-team__giga-blob">
      <img src="img/giga-blob.svg" alt="" />
    </div>
    <div class="page-team__giga-blob-mobile">
      <img src="img/giga-blob-mobile.svg" alt="" />
    </div>
  </div>
  <h1 class="title-1">Team</h1>
  <div class="page-team__copy">
    <p class="body-1">
      Top Solution nasce dall’associazione di una grande <b>expertise</b> nel
      settore della <b>consulenza informatica</b> e della
      <b>gestione delle risorse umane</b>. Il team di informatici è affiancato
      da <b>psicologi del lavoro</b> per la realizzazione delle
      <b>piattaforme HR</b>
      e per la progettazione e la realizzazione di tutti i progetti rivolti alle
      <b>risorse umane</b>.
    </p>
  </div>
  <div class="page-team__people">
    <div class="page-team__people__spacer" />
    <ts-team-person name="Paolo Andruetto" companyrole="CEO" />
    <ts-team-person name="Gabriele Destefanis" companyrole="CTO" />
    <div class="page-team__people__spacer" />
    <ts-team-person name="Luca Osti" companyrole="Backend Developer" />
    <ts-team-person name="Gabriele Spada" companyrole="Frontend Developer" />
    <ts-team-person name="Luca Barbetti" companyrole="Frontend Developer" />
    <div class="page-team__people__spacer" />
    <ts-team-person name="Elisa Solinas" companyrole="Backend Developer" />
    <ts-team-person name="Federico Valetti" companyrole="Analista Funzionale" />
    <div class="page-team__people__spacer" />
    <ts-team-person name="Matteo Marsala" companyrole="Frontend Developer" />
    <ts-team-person name="Martina Bilancieri" companyrole="UX/UI Designer" />
    <ts-team-person src="img/question_mark.svg" name="Vuoi far parte del team?">
      <ts-button
        class="page-team__people__contact-us-button"
        variant="primary"
        component="button"
        on:click={handleClick}>Candidati</ts-button
      >
    </ts-team-person>
  </div>

  <div bind:this={contactUsElement} class="page-team__contact-us">
    <ts-contact-us open={contactUsOpen} on:formsubmit={handleContactUsSubmit} />
  </div>
  <mwc-snackbar
    bind:this={snackbarElement}
    labelText="Grazie per aver inviato la tua candidatura spontanea!"
  />
</ts-layout>

<style lang="scss">
  @use "../styles/variables";

  @import "../styles/main.scss";

  .page-team {
    color: variables.$ts-blue-color;

    ts-header-hexagons-desktop,
    ts-header-hexagons-mobile {
      z-index: -1;
    }

    &__people {
      margin: variables.$ts-spacing-15 0;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      &__spacer {
        flex: 0 1 16.6666%;
        max-width: 16.6666%;
      }

      &__contact-us-button {
        margin-top: variables.$ts-spacing-2;
      }
    }

    ts-team-person {
      margin: variables.$ts-spacing-7 0;
      flex: 0 1 33.3333%;
      max-width: 33.3333%;
    }

    &__giga-blob {
      display: block;
      position: absolute;
      width: 1400px;
      overflow: visible;
      top: -430px;
      right: 300px;
      z-index: -1;
    }

    &__giga-blob-mobile {
      display: none;
    }

    &__contact-us {
      margin-bottom: variables.$ts-spacing-10;
    }

    ts-contact-us {
      margin-top: 200px;
      display: block;
    }

    @media only screen and (min-width: variables.$ts-tablet-min) and (max-width: variables.$ts-tablet-max) {
      .title-1 {
        max-width: 60%;
        text-align: left;
      }

      &__giga-blob {
        right: 600px;
        top: -530px;
      }

      &__people {
        margin: variables.$ts-spacing-4 0;
      }

      &__copy {
        max-width: 60%;
      }
    }

    @media only screen and (max-width: variables.$ts-mobile-max) {
      &__copy {
        max-width: 80%;
      }

      &__people {
        margin: variables.$ts-spacing-3 0;

        &__spacer {
          display: none;
        }
      }

      &__giga-blob {
        display: none;
      }

      &__giga-blob-mobile {
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
    }
  }
</style>

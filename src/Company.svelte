<svelte:options tag="ts-page-company" />

<script>
  import "@material/mwc-snackbar";

  let contactUsOpen = false;
  let snackbarElement = null;

  const collapsibleHeights = {
    performance: 0,
    expertise180: 0,
    expertise360: 0,
    potential: 0,
  };

  let expandedSections = {};

  function handleRequestTrialSubmit() {
    snackbarElement.show();
  }

  console.log(window.innerWith);
</script>

<ts-layout class="page-company">
  <h1 class="title-1">Azienda</h1>
  <div class="page-company__row">
    <div
      class="page-company__logo"
      style="background-image: url(./img/start_cup.png)"
    />
    <div class="page-company__blob">
      <ts-blob
        interactive="true"
        shape={window.innerWith > 900 ? "rectanglehr" : "octagon"}
        fill="#EBEAF3"
        padding="24"
        variance={window.innerWith > 900 ? 1.4 : 1.2}
      >
        <div class="page-company__blob__content">
          <p class="body-1">
            Nasciamo come <b>vincitori</b> nel 2008 della IV edizione della Start
            Cup Torino Piemonte
          </p>
        </div>
      </ts-blob>
    </div>
  </div>
  <div class="page-company__row">
    <div
      class="page-company__logo"
      style="background-image: url(./img/i3p.png)"
    />
    <div class="page-company__blob">
      <ts-blob
        interactive="true"
        shape={window.innerWith > 900 ? "rectanglehr" : "octagon"}
        fill="#EBEAF3"
        padding="24"
        variance={window.innerWith > 900 ? 1.4 : 1.2}
      >
        <div class="page-company__blob__content">
          <p class="body-1">
            Nel 2012 ci siamo laureati come <b>impresa innovativa</b> presso I3P,
            siamo usciti dall'incubatore e abbiamo aperto il nostro primo ufficio
          </p>
        </div>
      </ts-blob>
    </div>
  </div>
  <div class="page-company__row">
    <div
      class="page-company__logo"
      style="background-image: url(./img/logo_name.svg)"
    />
    <div class="page-company__blob">
      <ts-blob
        interactive="true"
        shape={window.innerWith > 900 ? "rectanglehr" : "octagon"}
        fill="#EBEAF3"
        padding="24"
        variance={window.innerWith > 900 ? 1.4 : 1.2}
      >
        <div class="page-company__blob__content">
          <p class="body-1">
            <b>Oggi</b> siamo proiettati all’<b>industry 4.0</b> e allo sviluppo
            di applicazioni per l’<b>ottimizzazione</b>, l'<b>efficientamento</b
            >
            e l’<b>interazione</b> uomo-macchina
          </p>
        </div>
      </ts-blob>
    </div>
  </div>
</ts-layout>

<style lang="scss">
  @use "./styles/variables";

  @use "./styles/main.scss";

  .page-company {
    display: block;
    color: variables.$ts-blue-color;
    box-sizing: border-box;
    margin-bottom: variables.$ts-spacing-4;
  }

  .page-company__row {
    display: flex;
    align-items: center;
    flex-direction: row;
    max-height: 600px;
    justify-content: space-between;
    margin: 0 (variables.$ts-spacing-3 * -1);
    padding-left: variables.$ts-spacing-3;
    flex: 1 1 0;

    .page-company__logo {
      flex: 1 0 auto;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      min-width: 130px;
      max-width: 320px;

      height: 190px;
      width: auto;
    }

    &:nth-child(2n + 1) {
      flex-direction: row-reverse;
      padding-right: variables.$ts-spacing-3;
      padding-left: 0;
    }
  }

  .page-company__blob {
    display: flex;
    justify-content: center;
    min-width: 0;

    ts-blob {
      width: 520px;
      // margin-right: -(variables.$ts-spacing-10);
    }
  }

  .page-company__blob__content {
    padding: variables.$ts-spacing-2 variables.$ts-spacing-5;
    text-align: center;

    & .body-2 {
      margin: variables.$ts-spacing-3 0;
    }
  }

  @media only screen and (max-width: variables.$ts-mobile-max) {
    .page-company__row {
      max-height: 600px;

      img {
        max-width: 120px;
      }
    }

    .page-company__blob {
      min-width: 0;

      ts-blob {
        min-width: 80vw;
        margin-right: 0;
        // margin-left: -(variables.$ts-spacing-8);
      }
    }

    .page-company__blob__content {
      padding: variables.$ts-spacing-2 variables.$ts-spacing-4
        variables.$ts-spacing-2 variables.$ts-spacing-8;
      text-align: left;
    }

    .page-company__row {
      &:nth-child(2n + 1) {
        .page-company__blob__content {
          padding: variables.$ts-spacing-2 variables.$ts-spacing-8
            variables.$ts-spacing-2 variables.$ts-spacing-4;
          text-align: right;
        }
      }
    }

    .page-company__row {
      padding-left: variables.$ts-spacing-3;
      padding-right: variables.$ts-spacing-3;
    }
  }

  @media only screen and (min-width: variables.$ts-tablet-min) and (max-width: variables.$ts-tablet-max) {
    .page-company__row {
      img {
        max-width: 200px;
      }
    }

    .page-company__blob {
      ts-blob {
        min-width: 60vw;
      }
    }
  }
</style>

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
</script>

<ts-layout class="page-company">
  <h1 class="title-1">Azienda</h1>
  <div class="page-company__row">
    <img src="./img/start_cup.png" alt="" />
    <div class="page-company__blob">
      <ts-blob
        interactive="true"
        shape="rectanglehr"
        fill="#EBEAF3"
        padding="24"
        variance="1.4"
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
    <img src="./img/i3p.png" alt="" />
    <div class="page-company__blob">
      <ts-blob
        interactive="true"
        shape="rectanglehr"
        fill="#EBEAF3"
        padding="24"
        variance="1.4"
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
    <img src="./img/logo_name.svg" alt="" />
    <div class="page-company__blob">
      <ts-blob
        interactive="true"
        shape="rectanglehr"
        fill="#EBEAF3"
        padding="24"
        variance="1.4"
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

    ts-picture,
    img {
      max-height: 200px;
      height: auto;
      max-width: 320px;
      width: auto;

      width: auto;
    }
  }

  .page-company__row:nth-child(2n + 1) {
    flex-direction: row-reverse;

    ts-blob {
      margin-left: -(variables.$ts-spacing-6);
      margin-right: 0;
    }
  }

  .page-company__blob {
    margin: 200px auto;
    display: flex;
    justify-content: center;

    ts-blob {
      width: 520px;
      margin-right: -(variables.$ts-spacing-10);
    }
  }

  .page-company__blob__content {
    padding: variables.$ts-spacing-2 variables.$ts-spacing-5;
    text-align: center;

    & .body-2 {
      margin: variables.$ts-spacing-3 0;
    }
  }

  @media only screen and (max-width: variables.$ts-tablet-max) {
  }
</style>

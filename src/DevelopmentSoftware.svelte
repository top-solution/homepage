<svelte:options tag="ts-development-software" />

<script>
</script>

<div class="component-container">
  <h1>SVILUPPO SOFTWARE</h1>
  <div class="flex-container">
    <ts-blob
      interactive="true"
      shape="rectangle"
      style="max-width: 270px;"
      fill="#E3F1FA"
      padding="24"
    >
      <div class="center">
        <p>
          <img
            src="../img/icons/lens.svg"
            alt="devices icon"
            width="50"
            height="35"
          />
        </p>
        <b>APPLICAZIONI WEB E MOBILE</b>
        <p>
          Single page web applications, rest api, micro-services, hybrid apps
        </p>
      </div>
    </ts-blob>
    <ts-blob
      interactive="true"
      shape="rectangle"
      style="max-width: 270px;"
      fill="#E3F1FA"
      padding="24"
    >
      <div class="center">
        <p>
          <img
            src="../img/icons/palace.svg"
            alt="devices icon"
            width="50"
            height="35"
          />
        </p>
        <b>CONSULENZA SVILUPPO SW</b>
        <p>Kick-off progetti, sviluppo e manutenzione, disaster recovery</p>
      </div>
    </ts-blob>
    <ts-blob
      interactive="true"
      shape="rectangle"
      style="max-width: 270px;"
      fill="#E3F1FA"
      padding="24"
    >
      <div class="center">
        <p>
          <img
            src="../img/icons/user.svg"
            alt="devices icon"
            width="50"
            height="35"
          />
        </p>
        <b>CLOUD COMPUTING</b>
        <p>
          Utilizziamo servizi cloud per rendere i progetti sempre
          raggiungibili!!!
        </p>
      </div>
    </ts-blob>
  </div>
  <div class="button-container">
    <ts-button variant="outlined" href="randompage.html">Scopri</ts-button>
  </div>
</div>

<style lang="scss">
  @import "./styles/main.scss";

  .flex-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
    color: #312783;
  }

  .button-container {
    display: flex;
    justify-content: center;
  }

  ts-blob p {
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    margin-top: 0;
  }

  ts-blob b {
    display: block;
    font-size: 24px;
    margin-bottom: 8px;
  }
</style>

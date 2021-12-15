<svelte:options tag="ts-development-software" />

<script>
  //import Button from "./Button.svelte";
</script>

<div class="component-container">
  <h1>SVILUPPO SOFTWARE</h1>
  <div class="flex-container">
    <ts-blob
      interactive="true"
      shape="rectangle"
      style="max-width: 300px;"
      fill="#E3F1FA"
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
      style="max-width: 300px;"
      fill="#E3F1FA"
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
      shape="octagon"
      style="max-width: 300px;"
      fill="#E3F1FA"
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
    <!-- svelte-ignore missing-declaration -->
    <Button
      bg="transparent"
      textColor="#312783"
      text="Scopri"
      href="randompage.html"
      interactive="true"
      border="1px solid rgba(49, 39, 131, 0.5)"
    />
  </div>
</div>

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  .flex-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    color: #312783;
  }

  .button-container {
    display: flex;
    justify-content: center;
  }
</style>

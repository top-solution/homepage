<svelte:options tag="ts-development-hr" />

<script>
  //import Button from "./Button.svelte";
</script>

<div class="component-container">
  <h1>SVILUPPO DELLE RISORSE UMANE</h1>
  <div class="flex-container">
    <ts-blob
      interactive="true"
      shape="rectangle"
      style="max-width: 300px;"
      fill="#E9E8F2"
    >
      <div class="center">
        <p>
          <img
            src="../img/icons/devices.svg"
            alt="devices icon"
            width="50"
            height="35"
          />
        </p>
        <b>AUDIT COMPETENZE</b>
        <p>Analisi e mappatura delle competenze professionali</p>
      </div>
    </ts-blob>
    <ts-blob
      interactive="true"
      shape="octagon"
      style="max-width: 300px;"
      fill="#E9E8F2"
    >
      <div class="center">
        <p>
          <img
            src="../img/icons/optionPaper.svg"
            alt="devices icon"
            width="50"
            height="35"
          />
        </p>
        <b>SVILUPPO ORGANIZZATIVO</b>
        <p>Training, coaching e crescita professionale</p>
      </div>
    </ts-blob>
    <ts-blob
      interactive="true"
      shape="rectangle"
      style="max-width: 300px;"
      fill="#E9E8F2"
    >
      <div class="center">
        <p>
          <img
            src="../img/icons/cloud.svg"
            alt="devices icon"
            width="50"
            height="35"
          />
        </p>
        <b>SVILUPPO INDIVIDUALE</b>
        <p>Management diagnostic e clima organizzativo</p>
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

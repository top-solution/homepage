<svelte:options tag="svelte-customers" />

<script>
  import Picture from "./Picture.svelte";
</script>

<div class="component-container">
  <div class="main-title">I NOSTRI CLIENTI</div>
  <div class="flex-container">
    <Picture base="customers" src="sky" alt="sky img" />
    <Picture base="customers" src="reply" alt="reply img" />
    <Picture base="customers" src="collins" alt="skcollinsy img" />
    <Picture base="customers" src="sanmarco" alt="sanmarco img" />
    <Picture base="customers" src="whirpool" alt="whirpool img" />
    <Picture base="customers" src="confindustria" alt="confindustria img" />
  </div>

  <div class="flex-container">
    <Picture base="customers" src="sanPaolo" alt="sanPaolo img" />
    <Picture base="customers" src="vittorioAlfieri" alt="vittorioAlfieri img" />
    <Picture base="customers" src="unicredit" alt="unicredit img" />
    <Picture base="customers" src="alpitour" alt="alpitour img" />
  </div>

  <div class="flex-container">
    <Picture base="customers" src="poltronaFrau" alt="poltronaFrau img" />
    <Picture base="customers" src="qualityGroup" alt="qualityGroup img" />
    <Picture base="customers" src="costaCrociere" alt="costaCrociere img" />
    <Picture base="customers" src="carrefour" alt="carrefour img" />
    <Picture base="customers" src="arduino" alt="arduino img" />
    <Picture base="customers" src="generali" alt="generali img" />
    <Picture base="customers" src="avio" alt="avio img" />
  </div>
  <div class="flex-container">
    <Picture base="customers" src="apl" alt="apl img" />
    <Picture base="customers" src="mido" alt="mido img" />
    <Picture base="customers" src="norbertoRosa" alt="v img" />
    <Picture base="customers" src="euroSearch" alt="euroSearch img" />
    <Picture base="customers" src="stellantis" alt="stellantis img" />
    <Picture base="customers" src="magna" alt="magna img" />
  </div>
  <div class="flex-container">
    <Picture base="customers" src="hotelCube" alt="hotelCube img" />
    <Picture base="customers" src="helsinn" alt="helsinn img" />
    <Picture base="customers" src="torino" alt="torino img" />
    <Picture
      base="customers"
      src="unioneIndustriale"
      alt="unioneIndustriale img"
    />
    <Picture base="customers" src="aidp" alt="aidp img" />
  </div>
</div>

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  .flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }
</style>

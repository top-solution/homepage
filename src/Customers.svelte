<svelte:options tag="ts-customers" />

<script>
  import Picture from "./Picture.svelte";
</script>

<div class="component-container">
  <h1>I NOSTRI CLIENTI</h1>
  <div class="flex-container">
    <Picture base="customers" src="sky" alt="Sky"  />
    <Picture base="customers" src="reply" alt="Reply" />
    <Picture base="customers" src="collins" alt="Collins" />
    <Picture base="customers" src="sanMarco" alt="San Marco" />
    <Picture base="customers" src="whirpool" alt="Whirpool" />
    <Picture base="customers" src="confindustria" alt="Confindustria" />

    <Picture base="customers" src="sanPaolo" alt="Intesa SanPaolo" />
    <Picture base="customers" src="vittorioAlfieri" alt="Vittorio Alfieri" />
    <Picture base="customers" src="unicredit" alt="Unicredit" />
    <Picture base="customers" src="alpitour" alt="Alpitour" />

    <Picture base="customers" src="poltronaFrau" alt="Poltrona Frau" />
    <Picture base="customers" src="qualityGroup" alt="Quality Group" />
    <Picture base="customers" src="costaCrociere" alt="Costa Crociere" />
    <Picture base="customers" src="carrefour" alt="Carrefour" />
    <Picture base="customers" src="arduino" alt="Arduino" />
    <Picture base="customers" src="generali" alt="Generali" />
    <Picture base="customers" src="avio" alt="Avio" extension="svg" />

    <Picture base="customers" src="apl" alt="APL" />
    <Picture base="customers" src="mido" alt="Mido" extension="svg" />
    <Picture base="customers" src="norbertoRosa" alt="Norberto Rosa" />
    <Picture base="customers" src="euroSearch" alt="Euro Search" />
    <Picture base="customers" src="stellantis" alt="Stellantis" />
    <Picture base="customers" src="magna" alt="Magna" extension="svg" />

    <Picture base="customers" src="hotelCube" alt="Hotel Cube" />
    <Picture base="customers" src="helsinn" alt="Helsinn" />
    <Picture base="customers" src="torino" alt="Torino" />
    <Picture
      base="customers"
      src="unioneIndustriale"
      alt="Unione Industriale"
    />
    <Picture
      base="customers"
      src="aidp"
      alt="Associazione Italiana per la Direzione del Personale"
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
    align-items: center;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }
</style>

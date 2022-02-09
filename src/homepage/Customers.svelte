<svelte:options tag="ts-customers" />

<div class="customer-container" id="customers">
  <div class="customer-container__title title-2">I NOSTRI CLIENTI</div>
  <div class="customer-container__images">
    <ts-picture base="customers" src="sky" alt="Sky" />
    <ts-picture base="customers" src="reply" alt="Reply" />
    <ts-picture base="customers" src="collins" alt="Collins" />
    <ts-picture base="customers" src="sanMarco" alt="San Marco" />
    <ts-picture base="customers" src="whirpool" alt="Whirpool" />
    <ts-picture base="customers" src="confindustria" alt="Confindustria" />

    <ts-picture base="customers" src="sanPaolo" alt="Intesa SanPaolo" />
    <ts-picture base="customers" src="vittorioAlfieri" alt="Vittorio Alfieri" />
    <ts-picture base="customers" src="unicredit" alt="Unicredit" />
    <ts-picture base="customers" src="alpitour" alt="Alpitour" />

    <ts-picture base="customers" src="poltronaFrau" alt="Poltrona Frau" />
    <ts-picture base="customers" src="qualityGroup" alt="Quality Group" />
    <ts-picture base="customers" src="costaCrociere" alt="Costa Crociere" />
    <ts-picture base="customers" src="carrefour" alt="Carrefour" />
    <ts-picture base="customers" src="arduino" alt="Arduino" />
    <ts-picture base="customers" src="generali" alt="Generali" />
    <ts-picture base="customers" src="avio" alt="Avio" extension="svg" />

    <ts-picture base="customers" src="apl" alt="APL" />
    <ts-picture base="customers" src="mido" alt="Mido" extension="svg" />
    <ts-picture base="customers" src="norbertoRosa" alt="Norberto Rosa" />
    <ts-picture base="customers" src="euroSearch" alt="Euro Search" />
    <ts-picture base="customers" src="stellantis" alt="Stellantis" />
    <ts-picture base="customers" src="magna" alt="Magna" extension="svg" />

    <ts-picture base="customers" src="hotelCube" alt="Hotel Cube" />
    <ts-picture base="customers" src="helsinn" alt="Helsinn" />
    <ts-picture base="customers" src="torino" alt="Torino" />
    <ts-picture
      base="customers"
      src="unioneIndustriale"
      alt="Unione Industriale"
    />
    <ts-picture
      base="customers"
      src="aidp"
      alt="Associazione Italiana per la Direzione del Personale"
    />
  </div>
  <div class="customers-hexs">
    <img class="hex" src="img/hexagons/hex_small.svg" alt="small hex" />
  </div>
</div>

<style lang="scss">
  @use "../styles/variables";

  @import "../styles/main.scss";

  .customer-container {
    margin-top: variables.$ts-spacing-9 * 2;

    &__title {
      margin-bottom: variables.$ts-spacing-9;
      text-align: center;
    }
    &__images {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 24px;
      flex-wrap: wrap;

      & > ts-picture {
        margin: variables.$ts-spacing-2;

        @media only screen and (max-width: variables.$ts-mobile-max) {
          margin: variables.$ts-spacing-1;
          max-width: 25%;
          height: auto;
        }
      }
    }
  }

  .customers-hexs {
    position: relative;
    height: 100px;
  }

  .hex {
    position: absolute;
    top: 20px;
    left: 455px;

    @media only screen and (max-width: variables.$ts-mobile-max) {
      left: 155px;
    }
  }
</style>

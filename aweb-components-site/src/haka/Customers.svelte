<svelte:options tag="ts-haka-customers" />

<div class="haka-customers">
  <h3 class="title-3 title-form">Chi ha scelto <b>HAKA</b></h3>
  <div class="haka-customers__customers">
    <div class="haka-customers__customers__customer">
      <ts-picture
        base="customers"
        src="unioneIndustriale"
        alt="Unione Industriale"
      />
    </div>
    <div class="haka-customers__customers__customer">
      <ts-picture base="customers" src="confindustria" alt="Confindustria" />
    </div>
    <div class="haka-customers__customers__customer">
      <ts-picture
        base="customers"
        src="carrefour"
        alt="Carrefour"
        extension="svg"
      />
    </div>
    <div class="haka-customers__customers__customer">
      <ts-picture base="customers" src="sanMarco" alt="San Marco" />
    </div>
    <div class="haka-customers__customers__customer">
      <ts-picture base="customers" src="euroSearch" alt="Euro Search" />
    </div>
  </div>
</div>

<style lang="scss" global>
  @use "../styles/variables";

  @use "../styles/main.scss";

  .haka-customers {
    h3 {
      font-weight: 300;
      font-size: 28px;
      line-height: 33px;
      text-align: center;
      margin-bottom: variables.$ts-spacing-4;
    }

    &__customers {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      &__customer {
        width: 200px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 variables.$ts-spacing-4 variables.$ts-spacing-6;

        ts-picture {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }

    @media only screen and (max-width: variables.$ts-tablet-max) {
      &__who-chooses-haka {
        margin-top: variables.$ts-spacing-8;

        &__customers {
          &__customer {
            margin: 0 variables.$ts-spacing-2 variables.$ts-spacing-6;

            ts-picture {
              margin: variables.$ts-spacing-2;
            }
          }
        }

        margin-bottom: variables.$ts-spacing-15;
      }
    }

    @media only screen and (max-width: variables.$ts-mobile-max) {
      &__who-chooses-haka {
        &__customers {
          &__customer {
            margin: 0;
            width: 33%;
            height: 20vw;

            ts-picture {
              margin: variables.$ts-spacing-2;
            }
          }
        }
      }
    }
  }
</style>

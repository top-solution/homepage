<svelte:options tag="ts-web-applications-customers" />

<div class="main-box">
  <h3 class="title-3 title-form">Chi ci ha <b>scelto</b></h3>
  <div class="main-box__customers">
    <div class="main-box__customers__customer">
      <ts-picture
        base="customers"
        src="unioneIndustriale"
        alt="Unione Industriale"
      />
    </div>
    <div class="main-box__customers__customer">
      <ts-picture base="customers" src="confindustria" alt="Confindustria" />
    </div>
    <div class="main-box__customers__customer">
      <ts-picture base="customers" src="avio" alt="Avio" />
    </div>
    <div class="main-box__customers__customer">
      <ts-picture base="customers" src="sanMarco" alt="San Marco" />
    </div>
    <div class="main-box__customers__customer">
      <ts-picture base="customers" src="magna" alt="Magna" extension="svg" />
    </div>
  </div>
</div>

<style lang="scss" global>
  @use "../styles/variables";

  @use "../styles/main.scss";

  .main-box {
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
      &__who-chooses-company-development {
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
      &__who-chooses-company-development {
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

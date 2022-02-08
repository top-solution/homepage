<svelte:options tag="ts-page-contacts" />

<script>
  import "@material/mwc-snackbar";
  let snackbarElement = null;

  function handleContactUsSubmit() {
    snackbarElement.show();
  }
</script>

<ts-layout class="page-contacts">
  <ts-header-hexagons-desktop />
  <ts-header-hexagons-mobile />
  <div class="page-contacts__copy">
    <h1 class="title-1">Contatti</h1>
    <div class="page-contacts__contacts-container">
      <div class="page-contacts__office-map-container">
        <ts-office-map />
      </div>
      <ol class="page-contacts__contacts body-1">
        <li
          class="page-contacts__contacts__contact page-contacts__contacts__contact-email"
        >
          <img src="img/icons/mail.svg" alt="" /><a
            href="mailto:info@topsolution.it">info@topsolution.it</a
          >
        </li>
        <li class="page-contacts__contacts__contact">
          <img src="img/icons/pin.svg" alt="" />
          Sede Legale: Corso Regina Margherita, 254 10144 Torino TO
        </li>
        <li
          class="page-contacts__contacts__contact page-contacts__contacts__contact-phone"
        >
          <img src="img/icons/phone.svg" alt="" /><a href="tel:+39 0112488280"
            >+39 0112488280</a
          >
        </li>
        <li class="page-contacts__contacts__contact">
          <img src="img/icons/pin.svg" alt="" />Sede Operativa: Via Livorno, 60
          B2 Lab, 10144 Torino TO
        </li>
      </ol>
    </div>
  </div>

  <div class="contact-us">
    <ts-request-info open={true} on:formsubmit={handleContactUsSubmit} />
  </div>
  <mwc-snackbar
    bind:this={snackbarElement}
    labelText="La tua richiesta è stata presa in carico dal nostro team"
  />
</ts-layout>

<style lang="scss">
  @use "../styles/variables";

  @import "../styles/main.scss";

  .page-contacts {
    &__contacts-container {
      display: flex;
      margin-top: variables.$ts-spacing-8;
      margin-bottom: variables.$ts-spacing-15;
      align-items: flex-start;
    }

    &__contacts {
      flex: 0 0 305px;
      list-style: none;
      padding-left: 0;
      padding-left: variables.$ts-spacing-3;
      margin: 0;
      font-weight: 400;
      display: flex;
      flex-direction: column;

      &__contact {
        flex: 1 0 50%;
        display: flex;
        margin-bottom: variables.$ts-spacing-2;
        order: 4;
        line-height: 35px;

        &-email {
          order: 1;
        }

        &-phone {
          order: 2;
        }

        &:last-of-type {
          margin-bottom: 0;
        }

        a {
          font-weight: inherit;
        }
      }

      img {
        width: 20px;
        height: 20px;
        margin-right: variables.$ts-spacing-3;
        margin-top: 8px;
      }
    }

    ts-request-info {
      margin-top: variables.$ts-spacing-15;
      display: block;
    }

    &__office-map-container {
      flex: 1 1 480px;
      border-right: 1px solid variables.$ts-blue-color;

      ts-office-map {
        height: auto;
        display: block;
        margin-right: auto;
        width: 480px;
        height: 300px;
        position: relative;
        z-index: 2000;
      }
    }

    @media only screen and (max-width: variables.$ts-tablet-max) {
      &__contacts {
        padding: 0;
        display: flex;
        flex-direction: column;

        &__contact {
          flex: 0 0 auto;

          &-phone {
            order: 1;
          }
        }

        &-container {
          flex-direction: column;
          align-items: stretch;
          margin-top: variables.$ts-spacing-2;
        }

        img {
          width: 22px;
          height: 22px;
          margin-top: 3px;
          margin-right: variables.$ts-spacing-3;
        }
      }

      &__office-map-container {
        border-right: 0;
        max-height: 320px;
        margin-bottom: variables.$ts-spacing-7;

        ts-office-map {
          height: auto;
          display: block;
          flex: 1 1 0;
          max-width: 100%;
          margin-right: 0;
          width: 100%;
        }
      }
    }

    @media only screen and (max-width: variables.$ts-mobile-max) {
      ts-request-info {
        margin-top: variables.$ts-spacing-10;
        display: block;
      }

      &__office-map-container {
        max-height: 240px;
      }
    }
  }
</style>

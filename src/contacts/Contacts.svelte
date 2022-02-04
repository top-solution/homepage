<svelte:options tag="ts-page-contacts" />

<script>
  import "@material/mwc-snackbar";
  let snackbarElement = null;

  function handleContactUsSubmit() {
    contactUsOpen = false;
    snackbarElement.show();
  }
</script>

<ts-layout class="page-contacts">
  <div class="page-contacts__copy">
    <h1 class="title-1">Contatti</h1>
    <div class="page-contacts__contacts-container">
      <div class="page-contacts__office-map-container">
        <ts-office-map />
      </div>
      <ol class="page-contacts__contacts body-1">
        <li class="page-contacts__contacts__email">
          <img src="img/icons/mail.svg" alt="" /><a
            href="mailto:info@topsolution.it">info@topsolution.it</a
          >
        </li>
        <li>
          <img src="img/icons/pin.svg" alt="" />
          Sede Legale: Corso Regina Margherita, 254 10144 Torino TO
        </li>
        <li class="page-contacts__contacts__phone">
          <img src="img/icons/phone.svg" alt="" /><a href="tel:+39 0112488280"
            >+39 0112488280</a
          >
        </li>
        <li>
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
    }

    &__contacts li {
      flex: 1 0 50%;
      display: flex;
      margin-bottom: variables.$ts-spacing-2;
      order: 4;
      line-height: 35px;
    }

    &__contacts li:last-of-type {
      margin-bottom: 0;
    }

    &__contacts li a {
      font-weight: inherit;
    }

    &__contacts img {
      width: 20px;
      height: 20px;
      margin-right: variables.$ts-spacing-3;
      margin-top: 8px;
    }

    &__contacts__phone {
      order: 1;
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
      }
    }

    @media only screen and (max-width: variables.$ts-tablet-max) {
      &__contacts {
        border-left: 0;
      }

      &__contacts li {
        flex: 1 0 100%;
      }

      &__contacts img {
        width: 22px;
        height: 22px;
        margin-top: 3px;
        margin-right: variables.$ts-spacing-3;
      }

      ts-request-info {
        margin-top: variables.$ts-spacing-10;
        display: block;
      }

      ts-office-map {
        height: auto;
        display: block;
        flex: 1 1 0;
        max-width: 100%;
        margin-right: 0;
      }
    }

    @media only screen and (max-width: variables.$ts-mobile-max) {
      &__contacts-container {
        flex-direction: column;
        margin-top: variables.$ts-spacing-2;
      }

      ts-office-map {
        min-height: 240px;
        margin-bottom: variables.$ts-spacing-7;
      }
    }
  }
</style>

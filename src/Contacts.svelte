<svelte:options tag="ts-page-contacts" />

<script>
  import "@material/mwc-snackbar";
  import RequestInfo from "./RequestInfo.svelte";

  let contactUsOpen = false;
  let contactUsElement = null;
  let snackbarElement = null;

  const mapCenter = { lat: 45.0876111, lng: 7.6729824 };
  let map = null;

  function handleClick() {
    contactUsOpen = true;

    setTimeout(() => {
      contactUsElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }, 200);
  }

  function handleContactUsSubmit() {
    contactUsOpen = false;
    snackbarElement.show();
  }
</script>

<ts-layout class="page-contacts">
  <div class="page-contacts__copy">
    <h1 class="title-2">Contatti</h1>
    <div class="page-contacts__contacts-container">
      <ts-office-map />
      <ol class="page-contacts__contacts">
        <li id="page-contacts__contacts__email">
          <img src="img/icons/mail.svg" alt="" /><a
            href="mailto:info@topsolution.it">info@topsolution.it</a
          >
        </li>
        <li>
          <img src="img/icons/pin.svg" alt="" />
          Sede Legale: Corso Regina Margherita, 254 10144 Torino TO
        </li>
        <li id="page-contacts__contacts__phone">
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

  <div bind:this={contactUsElement} class="contact-us">
    <ts-request-info open={true} on:formsubmit={handleContactUsSubmit} />
  </div>
  <mwc-snackbar
    bind:this={snackbarElement}
    labelText="La tua richiesta è stata presa in carico dal nostro team"
  />
</ts-layout>

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  .page-contacts {
    color: var(--ts-blue-color);
  }

  .page-contacts__contacts-container {
    display: flex;
    margin-top: var(--ts-spacing-8);
    margin-bottom: var(--ts-spacing-15);
  }

  .page-contacts__contacts {
    flex: 0 0 224px;
    list-style: none;
    font-size: 18px;
    padding-left: 0;
    padding-left: var(--ts-spacing-3);
    border-left: 1px solid var(--ts-blue-color);
    margin: 0;
  }

  .page-contacts__contacts li {
    flex: 1 0 50%;
    display: flex;
    align-items: flex-start;
    margin-bottom: var(--ts-spacing-3);
    order: 4;
  }

  .page-contacts__contacts li:last-of-type {
    margin-bottom: 0;
  }

  .page-contacts__contacts li a {
    font-weight: inherit;
  }

  .page-contacts__contacts img {
    width: 20px;
    height: 20px;
    margin-right: var(--ts-spacing-3);
    margin-top: 2px;
  }

  #page-contacts__contacts__phone {
    order: 1;
  }

  ts-request-info {
    margin-top: var(--ts-spacing-15);
    display: block;
  }

  ts-office-map {
    height: auto;
    display: block;
    flex: 1 1 0;
    max-width: 50%;
  }

  @media only screen and (max-width: 900px) {
    .page-contacts__copy h1 {
      text-align: left;
      margin: var(--ts-spacing-2) 0 var(--ts-spacing-1);
    }

    .page-contacts__contacts {
      font-size: 20px;
      border-left: 0;
    }

    .page-contacts__contacts li {
      flex: 1 0 100%;
    }

    .page-contacts__contacts img {
      width: 22px;
      height: 22px;
      margin-top: 3px;
      margin-right: var(--ts-spacing-3);
    }

    ts-request-info {
      margin-top: var(--ts-spacing-10);
      display: block;
    }

    ts-office-map {
      height: auto;
      display: block;
      flex: 1 1 0;
      max-width: 100%;
    }
  }

  @media only screen and (max-width: 600px) {
    .page-contacts__contacts-container {
      flex-direction: column;
      margin-top: var(--ts-spacing-2);
    }

    ts-office-map {
      min-height: 240px;
      margin-bottom: var(--ts-spacing-7);
    }
  }
</style>

<svelte:options tag="ts-page-contacts" />

<script>
  import "@material/mwc-snackbar";
  import Blob from "./Blob.svelte";
  import Layout from "./Layout.svelte";
  import TeamPerson from "./TeamPerson.svelte";
  import RequestInfo from "./RequestInfo.svelte";

  let contactUsOpen = false;
  let contactUsElement = null;
  let snackbarElement = null;

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
    <ol class="page-contacts__contacts">
      <li id="page-contacts__contacts__email">
        <img src="img/icons/mail.svg" alt="" />info@topsolution.it
      </li>
      <li>
        <img src="img/icons/pin.svg" alt="" />Sede Legale: Corso Regina
        Margherita, 254 10144 Torino TO
      </li>
      <li id="page-contacts__contacts__phone">
        <img src="img/icons/phone.svg" alt="" />+39 0112488280
      </li>
      <li>
        <img src="img/icons/pin.svg" alt="" />Sede Operativa: Via Livorno, 60
        10144 Torino TO
      </li>
    </ol>
  </div>

  <div bind:this={contactUsElement} class="contact-us">
    <ts-request-info open={true} on:formsubmit={handleContactUsSubmit} />
  </div>
  <mwc-snackbar
    bind:this={snackbarElement}
    labelText="Grazie per aver inviato la tua candidatura spontanea!"
  />
</ts-layout>

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  .page-contacts {
    color: var(--ts-blue-color);
  }

  .page-contacts__contacts {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    font-size: 18px;
    padding-left: 0;
    margin-top: var(--ts-spacing-9);
  }

  .page-contacts__contacts li {
    flex: 1 0 50%;
    display: flex;
    align-items: flex-start;
    margin-bottom: var(--ts-spacing-1-5);
  }

  .page-contacts__contacts img {
    width: 20px;
    height: 20px;
    margin-right: var(--ts-spacing-2);
    margin-top: 2px;
  }

  ts-request-info {
    margin-top: var(--ts-spacing-15);
    display: block;
  }

  @media only screen and (max-width: 900px) {
    .page-contacts__copy h1 {
      text-align: left;
      margin: var(--ts-spacing-2) 0 var(--ts-spacing-1);
    }

    .page-contacts__contacts {
      font-size: 20px;
      margin-top: var(--ts-spacing-2);
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
  }
</style>

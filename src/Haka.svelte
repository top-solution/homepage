<svelte:options tag="ts-page-haka" />

<script>
  import "@material/mwc-snackbar";

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

<ts-layout class="page-haka">
  <div class="page-haka__copy">
    <h1 class="title-2">測 HAKA</h1>
    <p>
      Le <b>Risorse Umane</b> sono il cardine delle organizzazioni: le idee
      guidano il
      <b>cambiamento</b>, le <b>persone</b> lo realizzano.
    </p>
    <video class="page-haka__video" controls>
      <source src="videos/haka.mp4" type="video/mp4" />
    </video>
  </div>

  <div bind:this={contactUsElement} class="contact-us">
    <ts-contact-us open={contactUsOpen} on:formsubmit={handleContactUsSubmit} />
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

  .page-haka {
    color: var(--ts-blue-color);
  }

  .page-haka__copy,
  .page-haka__copy h1 {
    text-align: center;
  }

  .page-haka__copy h1 {
    margin-top: var(--ts-spacing-15);
  }

  .page-haka__video {
    width: 100%;
    height: auto;
    margin: var(--ts-spacing-3) 0;
  }

  .contact-us {
    margin-bottom: var(--ts-spacing-10);
  }

  @media only screen and (max-width: 900px) {
    .page-haka__copy {
      max-width: 80%;
    }
  }
</style>

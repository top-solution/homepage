<svelte:options tag="ts-page-hr-development" />

<script>
</script>

<ts-top-banner
  title="Sviluppo delle Risorse Umane"
  mobilealignleft="true"
  title2={false}
>
  <div class="claim" slot="text">
    I nostri <b>servizi</b> vengono proposti in modalità SaaS e sono rivolti
    allo sviluppo delle <b>Risorse Umane</b> e del <b>Marketing Aziendale</b>
  </div>
  <div
    slot="actions"
    style="display: flex; flex-direction: column; max-width: 175px; margin: auto;"
  >
    <ts-button variant="primary" href="/contacts.html">Contattaci </ts-button>
  </div>
</ts-top-banner>
<ts-layout class="page-hr-development">
  <div class="page-hr-development__copy">
    <p class="claim">
      Le nostre piattaforme permettono di integrare in un <b>unico sistema</b>
      di comunicazione on-line, diversi moduli per la <b>gestione</b> delle
      attività del <b>personale</b> interno ed esterno
    </p>
    <ts-hr-svg />
  </div>
  <div class="page-hr-development__our-services">
    <h2 class="title-3 title-form">I nostri <b>servizi</b></h2>
    <ol>
      <li>
        <span class="title-5">AUDIT COMPETENZE</span><ts-button
          variant="outlined"
          href="randompage.html">Scopri</ts-button
        >
      </li>
      <li>
        <span class="title-5">SVILUPPO ORGANIZZATIVO</span><ts-button
          variant="outlined"
          href="randompage.html">Scopri</ts-button
        >
      </li>
      <li>
        <span class="title-5">SVILUPPO INDIVIDUALE</span><ts-button
          variant="outlined"
          href="randompage.html">Scopri</ts-button
        >
      </li>
    </ol>
    <svg
      class="page-hr-development__hexagon"
      viewBox="0 0 616 573"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M615.851 371.212L588.675 228.197L560.868 85.3133L407.215 42.7312L253.339 0.697273L126.861 101.13L0.791841 201.98L27.968 344.995L55.7745 487.878L209.428 530.461L363.304 572.495L489.781 472.062L615.851 371.212Z"
        fill="#E3F1FA"
      />
    </svg>
  </div>
  <ts-blob
    class="page-hr-development__blob"
    interactive="true"
    shape="hexagon"
    fill="#EBEAF3"
    padding="48"
    variance="1.4"
  >
    <div class="page-hr-development__blob-content">
      <p class="body-2">
        I nostri <b>prodotti</b> sono continuamente rinnovati utilizzando le più
        <b>moderne tecnologie</b> web garantendo al cliente una
        <b>user experience</b> sempre aggiornata e performance adeguate
      </p>
      <ts-button
        variant="primary"
        href="/contacts.html"
        style="display: inline-block;">Contattaci</ts-button
      >
    </div>
  </ts-blob>
</ts-layout>

<style lang="scss">
  @use "../styles/variables";

  @use "../styles/main.scss";

  .page-hr-development {
    display: block;
    color: variables.$ts-blue-color;
    box-sizing: border-box;
  }

  .page-hr-development__copy {
    display: flex;
    align-items: center;
    margin-top: variables.$ts-spacing-8;

    p {
      flex: 1 1 0;
    }

    img,
    svg,
    ts-hr-svg {
      display: block;
      max-width: 320px;
      flex: 0 1 320px;
      overflow: visible;
    }
  }

  .page-hr-development__our-services {
    max-width: 540px;
    margin: variables.$ts-spacing-20 auto;
    position: relative;

    .title-3 {
      text-align: center;
    }

    ol {
      list-style: none;
    }

    li {
      margin-bottom: variables.$ts-spacing-3;

      ts-button {
        display: inline-block;
        margin-left: variables.$ts-spacing-8;
      }
    }

    .page-hr-development__hexagon {
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
      width: 110%;
    }
  }

  .page-hr-development__blob {
    display: block;
    max-width: 540px;
    margin: 220px auto variables.$ts-spacing-10;
  }

  .page-hr-development__blob-content {
    text-align: center;

    ts-button {
      margin-top: variables.$ts-spacing-3;
    }
  }
</style>

<svelte:options tag="ts-web-application-mobile" />

<script>
  let singlePageWebApplicationElement = null;
  let restApiElement = null;
  let microServicesElement = null;
  let hybridAppsElement = null;
</script>

<ts-top-banner
  title="Applicazioni Web e Mobile"
  mobilealignleft="true"
  title2={true}
>
  <div class="claim" slot="text">
    Utilizziamo le <b>tecnologie open source</b> più all'avanguardia per
    offrirti il massimo delle performance, la <b>libertà</b> da <b>licenze</b> e
    <b>lock-in</b>, la possibilità di scegliere l'ambiente che preferisci.
  </div>
  <div
    slot="actions"
    style="display: flex; flex-direction: column; max-width: 175px; margin: auto;"
  >
    <ts-button variant="primary" href="/contacts.html">Contattaci </ts-button>
  </div>
  <div slot="external">
    <ts-header-hexagons-desktop />
    <ts-header-hexagons-mobile />
    <ts-hex
      class="web-application-mobile__floating-hex-1"
      width="56"
      fill="#E3F1FA"
      shadow="true"
    />
  </div>
</ts-top-banner>
<ts-layout class="web-application-mobile">
  <div class="web-application-mobile__copy">
    <p class="body-1">
      Realizziamo <b>web applications</b> e <b>app mobile</b> (iOS e Android) su
      misura per il tuo business, prendendoci cura di tutto il processo:
      <b>dall'analisi</b>
      dei requisiti allo <b>sviluppo back-end</b> e <b>front-end</b>.
    </p>
    <video class="web-application-mobile__video" controls>
      <source src="videos/test.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="web-application-mobile__services">
    <div class="web-application-mobile__services-blob">
      <ts-blob
        shape="potato"
        variance="0.25"
        style="min-width: 900px;"
        flip="true"
        fill="#E3F1FA"
      >
        <div style="min-width: 900px; height: 500px; " />
      </ts-blob>
    </div>
    <h3 class="title-3 title-form web-application-mobile__choose-services">
      Scegli tra i <b>SERVIZI</b>
    </h3>
    <ol class="web-application-mobile__services-list">
      <li>
        <a
          class="body-2"
          href="#web-application-mobile__anchor-1"
          on:mouseup={() =>
            singlePageWebApplicationElement.scrollIntoView({
              behavior: "smooth",
            })}
        >
          Single page web applications
        </a>
      </li>
      <li>
        <a
          class="body-2"
          href="#web-application-mobile__anchor-2"
          on:mouseup={() =>
            restApiElement.scrollIntoView({ behavior: "smooth" })}
        >
          Rest api
        </a>
      </li>
      <li>
        <a
          class="body-2"
          href="#web-application-mobile__anchor-3"
          on:mouseup={() =>
            microServicesElement.scrollIntoView({ behavior: "smooth" })}
        >
          Micro services
        </a>
      </li>
      <li>
        <a
          class="body-2"
          href="#web-application-mobile__anchor-4"
          on:mouseup={() =>
            hybridAppsElement.scrollIntoView({ behavior: "smooth" })}
        >
          Hybrid apps
        </a>
      </li>
    </ol>
    <ts-button
      class="web-application-mobile__services-contact-us-button"
      variant="primary"
      href="/contacts.html"
    >
      Contattaci
    </ts-button>
    <ts-hex
      class="web-application-mobile__floating-hex-2"
      width="44"
      fill="#312783"
      opacity=".7"
      shadow="false"
      rotation="-4"
    />
  </div>
  <ts-web-applications-customers />
  <div
    id="web-application-mobile__anchor-1"
    class="web-application-mobile__service"
  >
    <h4 bind:this={singlePageWebApplicationElement} class="title-4">
      Single page web applications
    </h4>
    <ts-snail color="#8D88BA" flip="true" paddingtop="true" />
    <p class="body-2">
      Sono il nostro pane quotidiano, le tecnologie che utilizziamo sono <b
        >React</b
      >
      (con <b>Redux</b>), <b>Vue.js</b>, <b>Angular.io</b>,
      <b>Svelte a angularJs</b>. Nella nostra cassetta degli attrezzi c'è anche
      posto per
      <b
        >Babel, Webpack, RxJS, Gulp, Socket.io, Google Material, Material UI,
        Bootstrap, SASS...</b
      >
    </p>
  </div>
  <div
    id="web-application-mobile__anchor-2"
    class="web-application-mobile__service"
  >
    <h4 bind:this={restApiElement} class="title-4">Rest api</h4>
    <ts-snail color="#4C429C" paddingtop="true" />
    <p class="body-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus amet
      varius arcu dignissim. Aliquet nisl blandit nibh cursus duis sed.
      Phasellus rutrum facilisi sagittis vestibulum arcu viverra.
    </p>
  </div>
  <div
    id="web-application-mobile__anchor-3"
    class="web-application-mobile__service"
  >
    <h4 bind:this={microServicesElement} class="title-4">Micro services</h4>
    <ts-snail color="#4857A3" flip="true" paddingtop="true" />
    <p class="body-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In parturient
      nulla ultricies faucibus. Adipiscing mauris eget adipiscing maecenas
      aliquam risus. Rhoncus nulla tempus pharetra augue mauris arcu.
    </p>
  </div>
  <div
    id="web-application-mobile__anchor-2"
    class="web-application-mobile__service"
  >
    <h4 bind:this={hybridAppsElement} class="title-4">Hybrid apps</h4>
    <ts-snail color="#4C429C" paddingtop="true" />
    <p class="body-2">
      Sviluppiamo applicazioni <b>iOS</b> e <b>Android</b> con prestazioni pari
      alle app native con <b>Flutter</b>, oppure <b>convertiamo</b> applicazioni
      web con Ionic e Apache Cordova. Se vuoi un'applicazione per Windows, Linux
      e Mac OS non ci sono problemi: realizziamo applicazioni desktop utilizzando
      Electron e le più moderne tecnologie web.
    </p>
  </div>
</ts-layout>

<style lang="scss" global>
  @use "../styles/variables";

  @use "../styles/main.scss";

  ts-layout {
    margin-bottom: variables.$ts-spacing-15;
  }

  .web-application-mobile {
    display: block;
    color: variables.$ts-blue-color;
    box-sizing: border-box;

    &__floating-hex {
      &-1 {
        position: absolute;
        bottom: -200px;
        left: 50%;
      }
      &-2 {
        position: absolute;
        bottom: -200px;
        left: 50%;
        transform: translateX(-50%);
      }

      &-3 {
        position: absolute;
        left: 73%;
        top: -60px;
      }
    }

    &__copy {
      & p {
        text-align: center;
        margin: variables.$ts-spacing-15 0 variables.$ts-spacing-6;
      }
    }

    &__video {
      width: 100%;
      height: auto;
      margin: variables.$ts-spacing-3 0;
    }

    &__services {
      margin-top: variables.$ts-spacing-15;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      margin-bottom: 310px;

      &-blob {
        width: 1100px;
        position: absolute;
        top: -90px;
        left: -150px;
        z-index: -1;
      }

      & h2 {
        text-transform: none;
        text-align: center;
        margin-bottom: variables.$ts-spacing-6;
      }

      &-list a {
        font-weight: 400;
      }

      &-list a:hover {
        text-decoration: underline;
      }

      &-contact-us-button {
        display: inline-block;
        margin-top: variables.$ts-spacing-4;
      }
    }

    &__services-list li::before,
    &__service-subservices li::before {
      content: "";
      display: inline-block;
      height: 28px;
      width: 28px;
      background-image: url("img/icons/hexagon-list-item.svg");
      background-size: cover;
      margin: 0 variables.$ts-spacing-4 -4px auto;
      padding: 0;
    }

    &__services-list,
    &__service-subservices ol {
      margin: 0 auto;
      padding: 0;
      list-style: none;
      line-height: 28px;
      margin: 0 auto;
      text-align: left;
    }

    &__services-list li,
    &__service-subservices li {
      margin-bottom: variables.$ts-spacing-3;
    }

    &__choose-services {
      margin-bottom: variables.$ts-spacing-6;
    }

    ts-company-development-customers {
      margin-bottom: variables.$ts-spacing-15;
      display: block;
    }

    &__service {
      position: relative;

      & + & {
        margin-top: 280px;
      }

      & p {
        width: 100%;
        max-width: 580px;
      }

      & h4 {
        margin-bottom: variables.$ts-spacing-3;
        line-height: 33px;
      }
    }

    #web-application-mobile {
      &__anchor-2 {
        text-align: right;
      }
      &__anchor-2 p {
        margin-left: auto;
      }
    }

    &__service {
      &-subservices {
        margin: variables.$ts-spacing-4 0;
        position: relative;
      }

      &-subservices li {
        font-weight: 500;
        margin-bottom: variables.$ts-spacing-4;
      }
    }

    #web-application-mobile__stress_lavoro_correlato {
      &,
      p {
        text-align: right;
        margin-left: auto;
      }
    }

    &__our-plans {
      margin-top: 300px;
      text-align: center;

      .body-2 {
        margin-bottom: variables.$ts-spacing-6;
      }
    }
    @media only screen and (max-width: variables.$ts-tablet-max) {
      & {
        padding: 0 variables.$ts-spacing-3;
      }

      &__services-list li::before,
      &__service-subservices li::before {
        height: 24px;
        width: 24px;
        margin-right: variables.$ts-spacing-2;
      }

      &__services-blob {
        left: -260px;
      }

      &__who-chooses-company {
        &-development__customers {
          margin: 0 -24px 0;
        }

        &-development__customers ts-picture {
          margin: 0 variables.$ts-spacing-3 variables.$ts-spacing-2;
        }
      }

      &__service {
        & + & {
          margin-top: variables.$ts-spacing-10;
        }

        & h4 {
          margin-bottom: variables.$ts-spacing-3;
          font-style: normal;
          line-height: 24px;
        }

        & p {
          box-sizing: border-box;
          padding-right: 60px;
        }

        &-subservices ol {
          margin: variables.$ts-spacing-7 auto;
        }
      }

      #web-application-mobile {
        &__anchor-2,
        &__stress_lavoro_correlato {
          p {
            padding-left: 60px;
            padding-right: 0;
          }
        }
      }
    }

    @media only screen and (max-width: variables.$ts-mobile-max) {
      .claim {
        max-width: 80%;
      }

      &__services {
        margin-bottom: 180px;

        &-blob {
          left: -480px;
        }
      }

      &__floating {
        &-hex-2 {
          top: 480px;
        }

        &-hex-3 {
          display: none;
        }
      }

      &__services-list,
      &__service-subservices ol {
        font-size: 18px;
        width: 250px;
      }
    }
  }

  @media only screen and (max-width: variables.$ts-mobile-max) {
    ts-header-hexagons-desktop {
      display: none;
    }

    ts-header-hexagons-mobile {
      display: block;
      width: 100%;
    }
  }
</style>

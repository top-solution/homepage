<svelte:options tag="ts-page-self-development" />

<script>
  let formazioneSuMisuraElement = null;
  let sentieriDiCarrieraElement = null;
  let coachingElement = null;
</script>

<ts-top-banner
  title="Sviluppo Individuale"
  mobilealignleft="true"
  title2={true}
>
  <div class="claim" slot="text">
    Il <b>sapere</b> delle<br /> persone rappresenta <br /> il bene immateriale
    <br /> <b>più importante</b> delle organizzazioni.
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="page-company-development__hex-1"
      fill="none"
      width="219"
      height="225"
      viewBox="0 0 219 225"
    >
      <g filter="url(#page-company-development__hex-1__filter-a)">
        <path
          fill="#312783"
          fill-opacity=".5"
          d="m135.983 14.568-14.356-7.071L107.244.482 93.943 9.38l-13.266 8.949 1.054 15.967 1.116 15.964 14.356 7.07 14.383 7.015 13.301-8.896 13.266-8.949-1.054-15.968-1.116-15.963Z"
        />
      </g>
      <defs>
        <filter
          id="page-company-development__hex-1__filter-a"
          width="217.477"
          height="223.862"
          x=".676"
          y=".482"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="80" />
          <feGaussianBlur stdDeviation="40" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            values="0 0 0 0 0.192157 0 0 0 0 0.152941 0 0 0 0 0.513726 0 0 0 0.25 0"
          />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_750_11774"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_750_11774"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  </div>
</ts-top-banner>
<ts-layout class="page-self-development">
  <div class="page-self-development__copy">
    <p class="body-1">
      Far crescere con continuità le <b>competenze</b> delle persone è, oltre a
      un dovere, una <b>necessità</b> legata alla <b>continuità</b> del
      <b>business</b>
      e dell’organizzazione. Le <b>persone</b> sono quindi il fulcro di tutte le
      <b>organizzazioni</b>
      e le <b>competenze</b> sono l’<b>asset strategico</b> sul quale costruire l’identità
      aziendale.
    </p>
  </div>
  <div class="page-self-development__services">
    <div class="page-self-development__services-blob">
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
    <h3 class="title-3 title-form page-self-development__choose-services">
      Scegli tra i <b>SERVIZI</b>
    </h3>
    <ol class="page-self-development__services-list">
      <li>
        <a
          class="body-2"
          href="#page-self-development__formazione-su-misura"
          on:mouseup={() =>
            formazioneSuMisuraElement.scrollIntoView({ behavior: "smooth" })}
        >
          Formazione su misura
        </a>
      </li>
      <li>
        <a
          class="body-2"
          href="#page-self-development__sentieri-di-carriera"
          on:mouseup={() =>
            sentieriDiCarrieraElement.scrollIntoView({ behavior: "smooth" })}
        >
          Sentieri di carriera
        </a>
      </li>
      <li>
        <a
          class="body-2"
          href="#page-self-development__coaching"
          on:mouseup={() =>
            coachingElement.scrollIntoView({ behavior: "smooth" })}
        >
          Coaching
        </a>
      </li>
    </ol>
    <ts-button
      class="page-self-development__services-contact-us-button"
      variant="primary"
      href="/contacts.html"
      target="_blank">Contattaci</ts-button
    >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="page-company-development__hex-2"
      fill="none"
      width="44"
      height="49"
      viewBox="0 0 44 49"
    >
      <path
        fill="#312783"
        fill-opacity=".7"
        d="m20.421.892-10.088 6.5L.27 13.93l.72 11.783.766 11.78 10.807 5.282 10.83 5.242 10.087-6.5 10.063-6.538-.72-11.783-.766-11.78L31.25 6.133 20.42.892Z"
      />
    </svg>
  </div>
  <div
    id="page-self-development__formazione-su-misura"
    class="page-self-development__service"
  >
    <h4 bind:this={formazioneSuMisuraElement} class="title-4">
      Formazione su misura
    </h4>
    <p class="body-2">
      Investire sulle <b>conoscenze</b> e <b>competenze</b> professionali delle
      persone è l’elemento centrale per la continuità e/o la crescita del
      business. Il <b>Training che offriamo è di tipo <b>esperienziale</b>. </b>
    </p>
    <ts-snail color="#8D88BA" flip="true" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="page-company-development__hex-3"
      fill="none"
      width="250"
      height="297"
      viewBox="0 0 250 297"
    >
      <g filter="url(#page-company-development__hex-3__filter-a)">
        <path
          fill="#211A58"
          d="M164.489 59.284 142.268 49.07l-22.26-10.127-19.956 14.137-19.9 14.214 2.265 24.35 2.36 24.342 22.22 10.213 22.261 10.128 19.955-14.137 19.901-14.215-2.265-24.35-2.36-24.341Z"
        />
      </g>
      <defs>
        <filter
          id="page-company-development__hex-3__filter-a"
          width="248.961"
          height="257.384"
          x=".152"
          y="38.943"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="80" />
          <feGaussianBlur stdDeviation="40" />
          <feColorMatrix
            values="0 0 0 0 0.117647 0 0 0 0 0.117647 0 0 0 0 0.396078 0 0 0 0.25 0"
          />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_830_13347"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_830_13347"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  </div>
  <div
    id="page-self-development__sentieri-di-carriera"
    class="page-self-development__service"
  >
    <h4 bind:this={sentieriDiCarrieraElement} class="title-4">
      Sentieri di carriera
    </h4>
    <p class="body-2">
      Nell’ottica del <b>miglioramento continuo</b>, lo sviluppo delle
      competenze professionali evolve con la maturità professionale dei singoli.
      <b>Pianificare</b> la crescita professionale permette all’organizzazione
      lo sviluppo delle competenze e la continuità aziendale nel
      <b>ricercare</b>
      gli
      <b>obiettivi d’impresa</b>.
    </p>
    <ts-snail color="#4C429C" />
  </div>
  <div
    id="page-self-development__coaching"
    class="page-self-development__service"
  >
    <h4 bind:this={coachingElement} class="title-4">Coaching</h4>
    <p class="body-2">
      Il Coaching è una metodologia formativa che <b>permette</b> ai manager e
      ai responsabili di funzione di apprendere tecniche e strumenti innovativi
      per
      <b>migliorare</b> la <b>performance</b> professionale e organizzativa. È
      un processo utile a sostenere l’apprendimento e a far emergere le
      potenzialità individuali di <b>guida</b> e di <b>orientamento</b> al
      <b>business</b>.
    </p>
    <ts-snail color="#4857A3" flip="true" />
  </div>
</ts-layout>

<style lang="scss" global>
  @use "../styles/variables";

  @use "../styles/main.scss";

  body {
    background-color: red;
    color: #0084f6;
    transition: background-color 0.3s;
  }
  html {
    background-color: #1d3040;
    color: #bfc2c7;
  }

  ts-header-hexagons-desktop,
  ts-header-hexagons-mobile {
    position: absolute;
  }

  ts-header-hexagons-desktop {
    right: 0px;
    width: 100%;
    top: 0px;
  }

  ts-header-hexagons-mobile {
    display: none;
  }

  #page-company-development__hex-1 {
    position: absolute;
    bottom: -250px;
    left: 50%;
  }

  #page-company-development__hex-2 {
    position: absolute;
    bottom: -130px;
    left: 50%;
    transform: translateX(-50%);
  }

  #page-company-development__hex-3 {
    position: absolute;
    left: 70%;
    top: -230px;
  }

  .page-self-development {
    display: block;
    color: variables.$ts-blue-color;
    box-sizing: border-box;
  }

  .page-self-development__copy {
    & p {
      text-align: center;
      margin: variables.$ts-spacing-15 0 variables.$ts-spacing-6;
    }
  }

  .page-self-development__services {
    margin-top: variables.$ts-spacing-15;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-bottom: 310px;
  }

  .page-self-development__services-blob {
    width: 1000px;
    position: absolute;
    top: 120%;
    left: 42%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  .page-self-development__services h2 {
    text-transform: none;
    text-align: center;
    margin-bottom: variables.$ts-spacing-6;
  }

  .page-self-development__choose-services {
    margin-bottom: variables.$ts-spacing-6;
  }

  .page-self-development__services-list,
  .page-self-development__service-subservices ol {
    margin: 0 auto;
    padding: 0;
    list-style: none;
    line-height: 28px;
    margin: 0 auto;
    text-align: left;
  }

  .page-self-development__services-list li,
  .page-self-development__service-subservices li {
    margin-bottom: variables.$ts-spacing-3;
  }

  .page-self-development__services-list a {
    font-weight: 400;
  }

  .page-self-development__services-list a:hover {
    text-decoration: underline;
  }

  .page-self-development__services-list li::before,
  .page-self-development__service-subservices li::before {
    content: "";
    display: inline-block;
    height: 28px;
    width: 28px;
    background-image: url("img/icons/hexagon-list-item.svg");
    background-size: cover;
    margin: 0 variables.$ts-spacing-4 -4px auto;
    padding: 0;
  }

  .page-self-development__services-contact-us-button {
    display: inline-block;
    margin-top: variables.$ts-spacing-4;
  }

  .page-self-development__service {
    position: relative;
  }
  .page-self-development__service + .page-self-development__service {
    margin-top: 280px;
  }

  .page-self-development__service p {
    width: 100%;
    max-width: 580px;
  }

  .page-self-development__service h4 {
    margin-bottom: variables.$ts-spacing-3;
    line-height: 33px;
  }

  #page-self-development__sentieri-di-carriera {
    text-align: right;
  }

  #page-self-development__sentieri-di-carriera p {
    margin-left: auto;
  }

  .page-self-development__service-subservices {
    margin: variables.$ts-spacing-4 0;
    position: relative;
  }

  .page-self-development__service-subservices li {
    font-weight: 500;
    margin-bottom: variables.$ts-spacing-4;
  }

  #page-self-development__free-trial {
    position: absolute;
    right: 0;
  }

  #page-self-development__stress_lavoro_correlato {
    &,
    p {
      text-align: right;
      margin-left: auto;
    }
  }

  .contact-us {
    margin-bottom: variables.$ts-spacing-10;
  }

  .page-self-development__our-plans {
    margin-top: 300px;
    text-align: center;

    .body-2 {
      margin-bottom: variables.$ts-spacing-6;
    }
  }

  #page-self-development__coaching {
    margin-bottom: 200px;
  }

  @media only screen and (max-width: variables.$ts-tablet-max) {
    .page-self-development {
      padding: 0 variables.$ts-spacing-3;
    }

    .page-self-development__services-list,
    .page-self-development__service-subservices ol {
      font-size: 18px;
      width: 250px;
    }

    .page-self-development__services-list li::before,
    .page-self-development__service-subservices li::before {
      height: 24px;
      width: 24px;
      margin-right: variables.$ts-spacing-2;
    }

    .page-self-development__service + .page-self-development__service {
      margin-top: variables.$ts-spacing-10;
    }

    .page-self-development__service h4 {
      margin-bottom: variables.$ts-spacing-3;
      font-style: normal;
      line-height: 24px;
    }

    .page-self-development__service p {
      padding-right: 60px;
    }

    .page-self-development__services-blob {
      top: 105%;
    }

    #page-self-development__sentieri-di-carriera,
    #page-self-development__stress_lavoro_correlato {
      p {
        padding-left: 60px;
        padding-right: 0;
      }
    }

    .page-self-development__service-subservices ol {
      margin: variables.$ts-spacing-7 auto;
    }

    #page-self-development__free-trial {
      position: static;
      display: flex;
    }

    #page-self-development__free-trial ts-button {
      margin: auto;
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

    .page-self-development__services-blob {
      top: 130%;
    }
  }
</style>

<svelte:options tag="ts-page-home" />

<script>
  import Blob from "./Blob.svelte";
  import Layout from "./Layout.svelte";
  import HomeHero from "./HomeHero.svelte";
  import TripleBlob from "./TripleBlob.svelte";
  import Customers from "./Customers.svelte";

  let developmentHumanResourceBlobs = [
    {
      icon: "devices.svg",
      title: "AUDIT COMPETENZE",
      subtitle: "Analisi e mappatura delle competenze professionali",
      color: "#e9e8f2",
      width: "240px",
    },
    {
      icon: "optionPaper.svg",
      title: "SVILUPPO ORGANIZZATIVO",
      subtitle: "Training, coaching e crescita professionale",
      color: "#e9e8f2",
      width: "245px",
    },
    {
      icon: "cloud.svg",
      title: "SVILUPPO INDIVIDUALE",
      subtitle: "Management diagnostic e clima organizzativo",
      color: "#e9e8f2",
      width: "240px",
    },
  ];

  let developmentSoftwareBlobs = [
    {
      icon: "lens.svg",
      title: "APPLICAZIONI WEB E MOBILE",
      subtitle:
        "Single page web applications, rest api, micro-services, hybrid apps",
      color: "#e3f1fa",
      width: "260px",
    },
    {
      icon: "palace.svg",
      title: "CONSULENZA SVILUPPO SW",
      subtitle: "Kick-off progetti, sviluppo e manutenzione, disaster recovery",
      color: "#e3f1fa",
      width: "260px",
    },
    {
      icon: "user.svg",
      title: "CLOUD COMPUTING",
      subtitle:
        "Utilizziamo servizi cloud per rendere i progetti sempre raggiungibili!!!",
      color: "#e3f1fa",
      width: "260px",
    },
  ];
</script>

<ts-layout class="homepage">
  <div
    style="max-width: 960px; margin: 0 auto; position: relative; width: 100%"
  >
    <div slot="external">
      <div class="home__header-blob">
        <img src="img/blob-header-homepage.svg" alt="" />
      </div>
      <div class="home__header-mobile">
        <img src="img/blob-header-homepage.svg" alt="" />
      </div>
    </div>
    <ts-home-hero />
    <ts-triple-blob
      title="SVILUPPO DELLE RISORSE UMANE"
      buttonLink="random.html"
      blobs={developmentHumanResourceBlobs}
    />
    <ts-triple-blob
      title="SVILUPPO SOFTWARE"
      buttonLink="random.html"
      blobs={developmentSoftwareBlobs}
    />
    <div slot="external">
      <div class="home__middle-blob">
        <img src="img/blob-middle-homepage.svg" alt="" />
      </div>
      <div class="home__middle-mobile">
        <img src="img/blob-middle-homepage.svg" alt="" />
      </div>
    </div>
    <ts-customers />
  </div>
</ts-layout>

<style lang="scss" global>
  @use "./styles/variables";

  @import "./styles/main.scss";

  .homepage {
    color: variables.$ts-blue-color;
  }

  .home__header-blob {
    display: none;
  }

  .home__header-mobile {
    display: block;
    position: absolute;
    width: 1400px;
    overflow: visible;
    top: -180px;
    left: -870px;
    z-index: -1;
  }

  .home__middle-blob {
    display: none;
  }

  .home__middle-mobile {
    display: block;
    position: absolute;
    width: 1400px;
    overflow: visible;
    right: -1125px;
    top: 1450px;
    z-index: -1;
  }
</style>

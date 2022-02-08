<svelte:options tag="ts-page-home" />

<script>
  import { onMount } from "svelte";

  let customersElement = null;

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

  onMount(() => {
    if (window.location.hash === "#customers") {
      window.addEventListener("load", function () {
        setTimeout(() => {
          customersElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 500);
      });
    }
  });
</script>

<ts-layout class="homepage">
  <div slot="external">
    <div class="homepage__header-blob">
      <img src="img/homepage/blob-header-homepage.svg" alt="" />
    </div>
    <div class="homepage__header-blob-mobile">
      <img src="img/homepage/blob-header-homepage.svg" alt="" />
    </div>
    <div class="homepage__header-hex">
      <img src="img/homepage/group-hex-header-desktop.svg" alt="" />
    </div>
    <div class="homepage__header-hex-mobile">
      <img src="img/homepage/group-hex-header-desktop.svg" alt="" />
    </div>
    <div class="homepage__header-hex-logo">
      <img src="img/homepage/hex-logo-header.svg" alt="" />
    </div>
    <div class="homepage__header-hex-logo-mobile">
      <img src="img/homepage/hex-logo-header.svg" alt="" />
    </div>

    <!-- FIXME: Update it with a group-->
    <div class="homepage__hex-mobile-1">
      <img src="img/homepage/homepage-mobile-hex-1.svg" alt="" />
    </div>
    <div class="homepage__hex-mobile-2">
      <img src="img/homepage/homepage-mobile-hex-2.svg" alt="" />
    </div>
    <div class="homepage__hex-mobile-3">
      <img src="img/homepage/homepage-mobile-hex-3.svg" alt="" />
    </div>
    <div class="homepage__hex-mobile-4">
      <img src="img/homepage/homepage-mobile-hex-4.svg" alt="" />
    </div>
    <div class="homepage__hex-mobile-5">
      <img src="img/homepage/homepage-mobile-hex-5.svg" alt="" />
    </div>
    <div class="homepage__hex-mobile-6">
      <img src="img/homepage/homepage-mobile-hex-6.svg" alt="" />
    </div>
  </div>
  <ts-home-hero />
  <ts-triple-blob
    title="SVILUPPO DELLE RISORSE UMANE"
    buttonLink="hr-development.html"
    blobs={developmentHumanResourceBlobs}
  />
  <ts-triple-blob
    title="SVILUPPO SOFTWARE"
    buttonLink="error.html"
    blobs={developmentSoftwareBlobs}
  />
  <div slot="external">
    <div class="homepage__middle-blob">
      <img src="img/homepage/blob-middle-homepage.svg" alt="" />
    </div>
    <div class="homepage__middle-hex">
      <img src="img/homepage/group-hex-middle-desktop.svg" alt="" />
    </div>
    <div class="homepage__middle-hex-mobile">
      <img src="img/homepage/group-hex-middle-mobile.svg" alt="" />
    </div>
    <div class="homepage__middle-hex-tablet">
      <img src="img/homepage/group-hex-middle-mobile.svg" alt="" />
    </div>
  </div>
  <ts-customers bind:this={customersElement} />
</ts-layout>

<style lang="scss" global>
  @use "./styles/variables";

  @import "./styles/main.scss";

  .homepage {
    color: variables.$ts-blue-color;

    &__header-blob-mobile {
      display: block;
      position: absolute;
      width: 1400px;
      overflow: visible;
      top: -400px;
      left: -900px;
      z-index: -1;

      @media only screen and (max-width: variables.$ts-mobile-max) {
        transform: scaleX(-1);
        left: -50px;
        top: -350px;
      }
    }

    &__header-hex-mobile {
      display: block;
      position: absolute;
      width: 1400px;
      overflow: visible;
      top: -650px;
      left: -1150px;
      z-index: -1;
    }

    &__header-hex-logo-mobile {
      display: block;
      position: absolute;
      width: 1400px;
      overflow: visible;
      top: -480px;
      left: -390px;
      z-index: -1;
    }

    &__middle-blob {
      display: block;
      position: absolute;
      width: 1400px;
      overflow: visible;
      right: -1125px;
      top: 1525px;
      z-index: -1;
    }

    &__middle-hex {
      display: block;
      position: absolute;
      width: 1400px;
      overflow: visible;
      right: -1125px;
      top: 1225px;
      z-index: -1;
    }

    &__middle-hex-tablet,
    &__middle-hex-mobile,
    &__header-hex,
    &__header-hex-logo,
    &__header-blob {
      display: none;
    }

    &__hex-mobile-1,
    &__hex-mobile-2,
    &__hex-mobile-3,
    &__hex-mobile-4,
    &__hex-mobile-5,
    &__hex-mobile-6 {
      display: none;
    }

    @media only screen and (max-width: variables.$ts-mobile-max) {
      &__hex-mobile-1,
      &__hex-mobile-2,
      &__hex-mobile-3,
      &__hex-mobile-4,
      &__hex-mobile-5,
      &__hex-mobile-6 {
        display: block;
        position: absolute;
        overflow: visible;
        z-index: -1;
      }
      &__hex-mobile {
        &-1 {
          top: -100px;
          left: 300px;
        }
        &-2 {
          top: -70px;
          left: 380px;
        }
        &-3 {
          top: 170px;
          left: 450px;
        }
        &-4 {
          top: 170px;
          left: 300px;
        }
        &-5 {
          top: 175px;
          left: 25px;
        }
        &-6 {
          top: 300px;
          left: 275px;
        }
      }

      &__header-hex-mobile,
      &__header-hex-logo-mobile,
      &__middle-blob,
      &__middle-hex,
      &__middle-hex-tablet {
        display: none;
      }
      &__middle-blob-mobile {
        display: block;
        position: absolute;
        width: 1400px;
        overflow: visible;
        right: -1125px;
        top: 1275px;
        z-index: -1;
      }

      &__middle-hex-mobile {
        display: block;
        position: absolute;
        width: 1400px;
        overflow: visible;
        right: -1155px;
        top: 1450px;
        z-index: -1;
      }
    }

    @media only screen and (max-width: variables.$ts-tablet-max) {
      &__header-hex-logo-mobile {
        left: -450px;
      }

      &__header-hex-mobile {
        left: -1350px;
      }

      &__middle-blob,
      &__middle-hex {
        display: none;
      }

      &__middle-hex-tablet {
        display: block;
        position: absolute;
        width: 1400px;
        overflow: visible;
        right: -1155px;
        top: 1975px;
        z-index: -1;

        @media only screen and (max-width: variables.$ts-mobile-max) {
          display: none;
        }
      }
    }
  }
</style>

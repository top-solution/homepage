<svelte:options tag="ts-cloud-computing" />

<ts-top-banner
  title="Cloud Computing"
  mobilealignleft="true"
  title2={true}
  azure={true}
>
  <div class="claim" slot="text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
    suspendisse consequat elementum nibh ultrices euismod sodales sit.
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
      class="cloud-computing__floating-hex-1"
      width="56"
      fill="#312783"
      shadow="true"
    />
  </div>
</ts-top-banner>
<ts-layout class="cloud-computing">
  <div class="cloud-computing__copy">
    <p class="body-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam adipiscing
      elementum enim nec auctor faucibus dignissim ipsum proin. Pretium, urna
      quis dolor sit gravida elementum.
    </p>
  </div>
  <ts-cloud-computing-customers />
</ts-layout>

<style lang="scss" global>
  @use "../styles/variables";

  @use "../styles/main.scss";

  ts-layout {
    margin-bottom: variables.$ts-spacing-15;
  }

  .cloud-computing {
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

    #cloud-computing {
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

    #cloud-computing__stress_lavoro_correlato {
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

      #cloud-computing {
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

  .layout {
    max-width: variables.$ts-tablet-max;
    margin: 0 auto;
    padding: 0 variables.$ts-spacing-3;
    position: relative;

    &__content {
      min-height: calc(100vh - 621px);
    }
  }
</style>

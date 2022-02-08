<svelte:options tag="ts-footer" />

<footer>
  <div class="footer-top">
    <div class="footer-top__link-box">
      <div class="title-6">Informazioni</div>
      <div><a href="company.html">Azienda</a></div>
      <div><a href="team.html">Team</a></div>
      <div><a href="index.html#customers">Clienti</a></div>
    </div>
    <div class="footer-top__link-box">
      <div class="title-6">Link utili</div>
      <div><a href="hr-development.html">HR</a></div>
      <!-- <div><a href="error.html">DEV</a></div> -->
      <div><a href="haka.html#plans">Tariffe</a></div>
      <div><a href="privacy-policy.html">Privacy Policy</a></div>
    </div>
    <div class="footer-top__box">
      <div class="title-6">Servizi</div>
      <div><a href="haka.html">Audit competenze</a></div>
      <div><a href="company-development.html">Sviluppo organizzativo</a></div>
      <div><a href="self-development.html">Sviluppo individuale</a></div>
      <!-- <div><a href="error.html">Applicazioni web e mobile</a></div>
      <div><a href="error.html">Consulenza sviluppo software</a></div>
      <div><a href="error.html">Cloud computing</a></div> -->
    </div>
    <div class="footer-top__bordered-box">
      <div class="title-6">Contatti</div>
      <div><a href="tel:+39 0112488280">+39 0112488280</a></div>
      <div><a href="mailto:info@topsolution.it">info@topsolution.it</a></div>
      <div>Sede Legale Corso Regina Margherita, 254, 10144 Torino TO</div>
      <div>Sede Operativa Via Livorno, 60 B2 Lab, 10144 Torino TO</div>
      <a target="_blank" href="https://twitter.com" rel="noopener noreferrer">
        <ts-picture base="footer" src="twitter" alt="Twitter" extension="svg" />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/"
        rel="noopener noreferrer"
      >
        <ts-picture
          class="footer-top--spacing"
          base="footer"
          src="linkedin"
          alt="Linkedin"
          extension="svg"
        />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/"
        rel="noopener noreferrer"
      >
        <ts-picture
          class="footer-top--spacing"
          base="footer"
          src="instagram"
          alt="Instagram"
          extension="svg"
        />
      </a>
    </div>
  </div>
  <hr />
  <div class="footer-bottom">
    <div class="footer-bottom__container">
      <img
        src="img/topsolution_footer_logo_dark.svg"
        alt="top-solution_logo"
        width="79"
        height="79"
        class="footer-bottom__img"
      />
      <div class="footer-bottom__text">
        Entra in contatto con noi Scopri le opportunità per il tuo business
        offerte dalle nostre soluzioni
      </div>
    </div>
    <div class="footer-bottom__iva">
      <span class="footer-bottom__company">© Top Solution s.r.l </span>
      <span><strong>P.IVA/CF </strong> 10031960015</span>
    </div>
  </div>
</footer>

<style lang="scss">
  @use "./styles/variables";

  @import "./styles/main.scss";

  footer {
    background-color: variables.$ts-blue-color-footer;
    width: 100%;
    font-weight: 300;
    color: variables.$ts-white-color;

    a {
      color: variables.$ts-white-color;
    }

    .footer-top {
      display: flex;
      justify-content: space-evenly;
      margin: 0 auto;
      padding: variables.$ts-spacing-3 0;
      max-width: variables.$ts-tablet-max;
      line-height: 28px;

      &__box,
      &__link-box {
        flex: 0 0 20%;

        & > div {
          margin: variables.$ts-spacing 0;

          & > a {
            color: variables.$ts-white-color;
          }
        }
      }

      &__bordered-box {
        flex: 0 0 32%;
        border-left: 1px solid variables.$ts-white-color;
        padding-left: variables.$ts-spacing-3;
        margin-left: variables.$ts-spacing-3;

        & > div {
          margin: variables.$ts-spacing 0;
        }
      }

      &--spacing {
        margin-left: variables.$ts-spacing-2;
      }
    }

    .footer-bottom {
      margin-top: 28px;
      min-height: 180px;
      background-color: variables.$ts-blue-color-footer;

      &__text {
        border-left: 1px solid variables.$ts-white-color;
        font-size: 15px;
        line-height: 18px;
        padding-left: 16px;
        width: 173px;
      }

      &__iva {
        font-size: 15px;
        line-height: 18px;
        text-align: center;
      }

      &__company {
        margin-right: 20px;
      }

      &__container {
        display: flex;
        margin-bottom: variables.$ts-spacing-5;
        justify-content: center;
      }

      &__img {
        margin-right: 18px;
      }
    }

    @media only screen and (max-width: variables.$ts-mobile-max) {
      .footer-top {
        flex-wrap: wrap;
        padding: variables.$ts-spacing-3;
        justify-content: flex-start;
        line-height: 28px;

        &__link-box {
          flex: 0 0 50%;
        }
        &__box {
          flex: 0 0 50%;
        }

        &__bordered-box {
          flex: 0 0 100%;
          border-top: 1px solid variables.$ts-white-color;
          border-bottom: 1px solid variables.$ts-white-color;
          border-left: none;
          padding: variables.$ts-spacing-3 0;
          margin-left: 0;
          margin-top: variables.$ts-spacing-3;
          text-align: center;

          a {
            color: variables.$ts-white-color;
          }
        }
      }
      hr {
        display: none !important;
      }
    }
  }

  @media only screen and (max-width: variables.$ts-tablet-max) {
    footer {
      height: auto;
    }
    .footer-top {
      &__bordered-box {
        flex: 0 0 10%;
      }
    }
  }
</style>

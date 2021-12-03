<svelte:options tag="svelte-footer" />

<footer>
  <div class="footer-top">
    <div><a href="about.html">HOME</a></div>
    <div><a href="about.html">L'AZIENDA</a></div>
    <div><a href="about.html">IL TEAM</a></div>
    <div><a href="about.html">CONTATTI</a></div>
  </div>
  <hr />
  <div class="footer-bottom">
    <img
      src="img/topsolution_footer_logo_dark.svg"
      alt="top-solution_logo"
      width="150"
      height="150"
    />
    <div class="footer-bottom__text">
      <div>+39 0112488280</div>
      <div>info@topsolution.it</div>
      <div>Sede Legale Corso Regina Margherita, 254, 10144 Torino TO</div>
      <div>Sede Operativa Via Livorno, 60, 10144 Torino TO</div>
      <div>
        <span class="footer-bottom__iva">P.IVA/CF</span><span
          class="footer-bottom__number">10031960015</span
        >
      </div>
      <br />
      <div class="footer-bottom__mark">© Top Solution s.r.l</div>
    </div>
  </div>
</footer>

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  footer {
    min-height: 325px;
    position: absolute;
    bottom: 0;
    background-color: var(--ts-blue-color);
    width: 100%;
    font-weight: 300;
  }

  /*
  @media only screen and (max-width: 600px) {
    .footer-top {
      background-color: red;
    }
  } */

  /*
  @media screen (width: 600px) {
    .footer-top {
      background-color: red;
    }
  } */
  .footer-top {
    max-width: 850px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 116px;
    color: var(--ts-white-color);
    font-size: var(--ts-size-24);
  }

  .footer-bottom {
    min-height: 208px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer-bottom__text {
    margin-left: 75px;
    color: var(--ts-white-color);
    font-size: var(--ts-size-18);
  }

  .footer-bottom__iva {
    font-weight: 500;
  }

  .footer-bottom__number {
    margin-left: 30px;
  }

  .footer-bottom__mark {
    color: var(--ts-white-color);
    font-size: 15px;
    line-height: 17px;
  }

  a:hover {
    padding-bottom: 5px;
    box-shadow: inset 0 -2px 0 0 var(--ts-white-color);
  }
</style>

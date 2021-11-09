<svelte:options tag="svelte-footer" />

<footer>
  <div class="footer-top">
    <div><a href="about.html">HOME eee</a></div>
    <div><a href="about.html">L'AZIENDA</a></div>
    <div><a href="about.html">IL TEAM</a></div>
    <div><a href="about.html">CONTATTI</a></div>
  </div>
  <hr />
  <div class="footer-bottom">
    <div class="footer-bottom__img">
      <img
        src="img/topsolution_footer_logo_dark.svg"
        alt="top-solution_logo"
        width="150"
        height="150"
      />
    </div>
    <div class="footer-bottom__text">
      <div>+39 0112488280</div>
      <div>info@topsolution.it</div>
      <div>Sede Legale Corso Regina Margherita, 254, 10144 Torino TO</div>
      <div>Sede Operativa Via Livorno, 60, 10144 Torino TO</div>
      <div>P.IVA/CF 10031960015</div>
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
    height: 325px;
    padding: 0;
    list-style: none;
    position: absolute;
    bottom: 0;
    background-color: #312783;
    width: 100%;
  }

  .footer-top {
    max-width: 850px;
    text-align: center;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 116px;
    line-height: 116px;
    color: white;
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
    font-style: normal;
  }

  .footer-bottom {
    max-width: 960px;
    text-align: center;
    margin: 0 auto;
    margin-top: 35px;
    display: flex;
    justify-content: center;
  }

  .footer-bottom__text {
    text-align: left;
    margin-left: 75px;
    color: white;
    font-size: 18px;
    line-height: 21px;
    font-weight: 400;
    font-style: normal;
  }

  .footer-bottom__mark {
    color: white;
    font-size: 15px;
    line-height: 17px;
  }

  ul {
    height: 116px;
    line-height: 116px;
    margin: 0;
  }

  a {
    font-weight: 400;
    margin: 0;
  }

  ul li {
    list-style: none;
    display: inline;
    color: white;
    font-size: 24px;
    line-height: 28px;
    font-weight: 400 !important;
    font-style: normal;
  }

  /*
  hr {
    width: 100vw;
    position: absolute;
    left: 0;
    margin: 0;
  } */

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    padding-bottom: 5px;
    box-shadow: inset 0 -2px 0 0 #fff;
  }
</style>

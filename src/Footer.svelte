<svelte:options tag="svelte-footer" />

<footer>
  <div class="footer-top">
    <div class="footer-top__link-box">
      <div class="footer-title">Informazioni</div>
      <div><a href="about.html">Azienda</a></div>
      <div><a href="about.html">Team</a></div>
      <div><a href="about.html">Clienti</a></div>
    </div>
    <div class="footer-top__link-box">
      <div class="footer-title">Link utili</div>
      <div><a href="about.html">HR</a></div>
      <div><a href="about.html">DEV</a></div>
      <div><a href="about.html">Tariffe</a></div>
      <div><a href="about.html">Privacy Policy</a></div>
    </div>
    <div class="footer-top__box">
      <div class="footer-title">Servizi</div>
      <div><a href="about.html">Audit competenze</a></div>
      <div><a href="about.html">Sviluppo organizzativo</a></div>
      <div><a href="about.html">Sviluppo individuale</a></div>
      <div><a href="about.html">Applicazioni web e mobile</a></div>
      <div><a href="about.html">Consulenza sviluppo software</a></div>
      <div><a href="about.html">Cloud computing</a></div>
    </div>
    <div class="footer-top__bordered-box">
      <div class="footer-title">Contatti</div>
      <div>+39 0112488280</div>
      <div>info@topsolution.it</div>
      <div>Sede Legale Corso Regina Margherita, 254, 10144 Torino TO</div>
      <div>Sede Operativa Via Livorno, 60, 10144 Torino TO</div>
    </div>
  </div>
  <hr />
  <div class="footer-bottom">
    <div class="flex-container">
      <img
        src="img/topsolution_footer_logo_dark.svg"
        alt="top-solution_logo"
        width="79"
        height="79"
        class="logo-img"
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

<style>
  @import "css/main.css";
  @import "css/normalize.css";
  @import "css/style.css";

  footer {
    height: 477px;
    background-color: var(--ts-blue-color);
    width: 100%;
    font-weight: 300;
    color: white;
  }

  .footer-top {
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    padding: 30px 0;
    max-width: 960px;
  }

  .footer-title {
    font-weight: 500;
    font-size: 20px;
  }

  .footer-top__link-box {
    flex: 0 0 20%;
  }
  .footer-top__box {
    flex: 0 0 22%;
  }

  .footer-top__bordered-box {
    flex: 0 0 32%;
    border-left: 1px solid #fff;
    padding-left: 29px;
    margin-left: 29px;
  }

  .footer-top__link-box > div {
    margin: 7px 0;
  }
  .footer-top__box > div {
    margin: 7px 0;
  }
  .footer-top__bordered-box > div {
    margin: 7px 0;
  }

  .footer-bottom {
    margin-top: 36px;
  }

  .footer-bottom__text {
    border-left: 1px solid #fff;
    font-size: 15px;
    line-height: 18px;
    padding-left: 18px;
    width: 173px;
  }
  .footer-bottom__iva {
    font-size: 15px;
    line-height: 18px;
    text-align: center;
  }

  .footer-bottom__company {
    margin-right: 20px;
  }

  .flex-container {
    display: flex;
    margin-bottom: 40px;
    justify-content: center;
  }

  .logo-img {
    margin-right: 18px;
  }
</style>

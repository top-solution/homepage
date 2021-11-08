class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .sub-header{
          background-color: gray;
        }

        nav {
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color:  transparent;

        }

        .nav__logo{
          flex
        }

        ul {
          padding: 0;
        }

        a {
          margin: 0 25px;
          text-decoration: none;
          font-size: 24px;
          line-height: 28px;
        }

        a:hover {
          padding-bottom: 5px;
          box-shadow: inset 0 -2px 0 0 #fff;
        }
      </style>
      <div class="sub-header"></div>
      <header>
        <nav>
        <div class="nav__logo"><img src="img/topsolution_logo_dark.svg" alt="top-solution_logo" width="150" height="150" /></div>
        <div class="nav__link">
          <ul>
            <li><a href="about.html">L'AZIENDA</a></li>
            <li><a href="work.html">IL TEAM</a></li>
            <li><a href="contact.html">CONTATTI</a></li>
          </ul>
          </div>
        </nav>
      </header>
    `;
  }
}

customElements.define("header-component", Header);

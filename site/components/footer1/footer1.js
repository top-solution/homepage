class Footer1 extends HTMLElement {
  constructor() {
    super();

    //const pages = this.pages;
    //const pages = this.getAttribute("content");
    this._title = "unkwno"; //tryMe

    const shadow = this.attachShadow({ mode: "open" });

    const footer = document.createElement("footer");

    const footerTop = document.createElement("div");
    footerTop.setAttribute("class", "footer-top");

    const footerHome = document.createElement("div");
    const footerHomeLink = document.createElement("a");
    footerHomeLink.setAttribute("href", "index.html");
    const textHome = this.getAttribute("home"); //FIXME
    footerHomeLink.textContent = "HOME";

    const footerCompany = document.createElement("div");
    const footerCompanyLink = document.createElement("a");
    footerCompanyLink.setAttribute("href", "index.html");
    footerCompanyLink.textContent = "L'AZIENDA";

    const footerTeam = document.createElement("div");
    const footerTeamLink = document.createElement("a");
    footerTeamLink.setAttribute("href", "index.html");
    footerTeamLink.textContent = "IL TEAM";

    const footerAbout = document.createElement("div");
    const footerAboutLink = document.createElement("a");
    footerAboutLink.setAttribute("href", "index.html");
    footerAboutLink.textContent = "CONTATTI";

    const hr = document.createElement("hr");

    const footerBottom = document.createElement("div");
    footerBottom.setAttribute("class", "footer-bottom");

    const footerBottomImgContainer = document.createElement("div");
    footerBottomImgContainer.setAttribute("class", "footer-bottom__img");

    const footerBottomImg = document.createElement("img");
    footerBottomImg.setAttribute("src", "img/topsolution_footer_logo_dark.svg");
    footerBottomImg.setAttribute("alt", "top-solution_logo");
    footerBottomImg.setAttribute("width", "150");
    footerBottomImg.setAttribute("height", "150");

    const footerBottomText = document.createElement("div");
    footerBottomText.setAttribute("class", "footer-bottom__text");

    const footerBottomNumber = document.createElement("div");
    footerBottomNumber.textContent = "+39 0112488280";

    const footerBottomMail = document.createElement("div");
    footerBottomMail.textContent = "+info@topsolution.it";

    const footerBottomLegalAddress = document.createElement("div");
    footerBottomLegalAddress.textContent =
      "Sede Legale Corso Regina Margherita, 254, 10144 Torino TO";

    const footerBottomOperativAddress = document.createElement("div");
    footerBottomOperativAddress.textContent =
      "Sede Operativa Via Livorno, 60, 10144 Torino TO";

    const footerBottomIva = document.createElement("div");
    footerBottomIva.textContent = "P.IVA/CF    10031960015";

    const br = document.createElement("br");

    const footerBottomMark = document.createElement("div");
    footerBottomMark.setAttribute("class", "footer-bottom__mark");
    footerBottomMark.textContent = "© Top Solution s.r.l";

    const style = document.createElement("style");
    style.textContent = `
    footer {
      height: 325px;
      padding: 0;
      list-style: none;
      position: absolute;
      bottom: 0;
      background-color: #312783;
      width: 100%;
      font-weight: 300;
    }

    .footer-top {
      max-width: 800px;
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
      font-style: normal;
    }

    .footer-bottom {
      max-width: 960px;
      text-align: center;
      margin: 0 auto;
      margin-top: 35px;
      display: flex;
      justify-content: center;

      &__img {
        flex: 0 0 50%;
      }
    }

    .footer-bottom__text {
      text-align: left;
      margin-left: 75px;
      color: white;
      font-size: 18px;
      line-height: 21px;
    }

    .footer-bottom__iva {
      color: white;
      font-size: 15px;
      line-height: 17px;
    }

    ul {
      height: 116px;
      line-height: 116px;
      margin: 0;
    }

    ul li {
      list-style: none;
      display: inline;
      color: white;
      font-size: 24px;
      line-height: 28px;
      font-style: normal;
    }

    hr {
      width: 99.8vw;
      position: absolute;
      left: 0;
      margin: 0;
    }

    a {
      color: white;
      text-decoration: none;
      margin: 0;
      color: #fff;
    }

    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }

    .iva {
      margin-left: 40px;
    }
  `;

    shadow.appendChild(style);
    shadow.appendChild(footer);
    footer.appendChild(footerTop);
    footerTop.appendChild(footerHome);
    footerHome.appendChild(footerHomeLink);
    footerTop.appendChild(footerCompany);
    footerCompany.appendChild(footerCompanyLink);
    footerTop.appendChild(footerTeam);
    footerTeam.appendChild(footerTeamLink);
    footerTop.appendChild(footerAbout);
    footerAbout.appendChild(footerAboutLink);

    footer.appendChild(hr);

    footerBottom.appendChild(footerBottomImgContainer);
    footerBottomImgContainer.appendChild(footerBottomImg);

    footerBottom.appendChild(footerBottomText);
    footerBottomText.appendChild(footerBottomNumber);
    footerBottomText.appendChild(footerBottomMail);
    footerBottomText.appendChild(footerBottomLegalAddress);
    footerBottomText.appendChild(footerBottomOperativAddress);
    footerBottomText.appendChild(footerBottomIva);
    footerBottomText.appendChild(br);
    footerBottomText.appendChild(footerBottomMark);

    footer.appendChild(footerBottom);
  }

  get home() {
    return this.getAttribute("home") || "";
  }

  get title() {
    console.log("title", this.getAttribute("title"));
    //return this.getAttribute("title") || "";
    return this._title;
  }

  set title(val) {
    this._title = val;
    this.setAttribute("title", val);
  }

  get pages() {
    console.log(
      "get",
      this,
      this.getAttribute("pages"),
      JSON.parse(this.getAttribute("pages"))
    );
    return JSON.parse(this.getAttribute("pages")) || [];
    //return this.getAttribute("pages") || [];
  }
}

customElements.define("footer-component1", Footer1);

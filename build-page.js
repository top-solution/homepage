const { join } = require('path');
const { readFileSync, writeFileSync } = require('fs');
const Handlebars = require('handlebars');
const sass = require('sass');


Handlebars.registerPartial(
  "head-start",
  `
<!DOCTYPE html />
<html class="no-js" lang="it">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0" />
    <link rel="manifest" href="site.webmanifest" />
    <link rel="shortcut icon" type="image/svg" href="./img/logo.svg" />
    <link rel="stylesheet" href="./global.css">
`)

Handlebars.registerPartial(
  "head-end",
  ` <script src="./build/Footer.js"></script>
    <script src="./build/Header.js"></script>
  </head>
`)


Handlebars.registerPartial(
  "body-start",
  `
  <body>
    <div style="max-width: 900px; margin: 0 auto">
      <ts-header />
    </div>
`)

Handlebars.registerPartial(
  "body-end", `
  <footer itemscope itemtype="https://schema.org/Organization">
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
      <!-- <div><a href="software-development.html">DEV</a></div> -->
      <div><a href="haka.html#plans">Tariffe</a></div>
      <div><a href="privacy-policy.html">Privacy Policy</a></div>
    </div>
    <div class="footer-top__box">
      <div class="title-6">Servizi</div>
      <div><a href="haka.html">Audit competenze</a></div>
      <div><a href="company-development.html">Sviluppo organizzativo</a></div>
      <div><a href="self-development.html">Sviluppo individuale</a></div>
      <!-- <div>
        <a href="web-applications-mobile.html">Applicazioni web e mobile</a>
      </div>
      <div>
        <a href="software-development-consulting.html"
          >Consulenza sviluppo software</a
        >
      </div>
      <div><a href="cloud-computing.html">Cloud computing</a></div> -->
    </div>
    <div class="footer-top__bordered-box">
      <div class="title-6">Contatti</div>
      <div>+39 011 248 82 80</div>
      <div>info@topsolution.it</div>
      <div>Sede Legale: Corso Regina Margherita, 254, 10144 Torino TO</div>
      <div>Sede Operativa: Via Livorno, 60 B2 Lab, 10144 Torino TO</div>
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
      <!-- <a
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
      </a> -->
    </div>
  </div>
  <hr />
  <div class="footer-bottom">
    <div class="footer-bottom__container">
      <a href="/index.html">
        <img
          src="img/topsolution_footer_logo_dark.svg"
          alt="top-solution_logo"
          width="79"
          height="79"
          class="footer-bottom__img"
          itemprop="logo"
        />
      </a>
      <div class="footer-bottom__text">
        Entra in contatto con noi Scopri le opportunità per il tuo business
        offerte dalle nostre soluzioni
      </div>
    </div>
    <div class="footer-bottom__iva">
      <span class="footer-bottom__company" itemprop="legalName">© Top Solution s.r.l </span>
      <span itemprop="vatID"><strong>P.IVA/CF </strong> 10031960015</span>
    </div>
  </div>
</footer>
    <style>
    {{{css}}}
    </style>
  </body>
</html>
`)

Handlebars.registerPartial("metadata", `
    <title>{{#if title}}{{ title }} - {{ siteName }}{{else}}{{ siteName }} - {{siteSlogan}}{{/if}}</title>
    <meta name="description" content="{{ description }}" />

    <meta property="og:title" content="{{#if title}}{{ title }}{{else}}{{ siteName }} - {{siteSlogan}}{{/if}}" />
    <meta property="og:description" content="{{ description }}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{{ url }}/{{ fileName }}" />
    <meta property="og:locale" content="{{ locale }}" />
    <meta property="og:image" content="{{ url }}/{{ image }}" />
    <meta property="og:site_name" content="{{ siteName }}" />
    <meta name="twitter:card" content="summary"></meta>
    <meta name="twitter:site" content="{{ url }}/{{ fileName }}"></meta>
    <meta name="twitter:description" content="{{ description }}"></meta>
    <meta name="twitter:title" content="{{#if title}}{{ title }}{{else}}{{ siteName }} - {{siteSlogan}}{{/if}}"></meta>
    <meta name="twitter:image" content="{{ url }}/{{ image }}" />
    <meta name="twitter:image:alt" content="{{ siteName }} - {{ siteSlogan }}" />
    <link rel="canonical" href="{{ url }}/{{ fileName }}" />
`);

const fileRelPath = process.argv[2];
const fileName = fileRelPath.substring(fileRelPath.lastIndexOf('/') + 1)
const fileSourcePath = join(__dirname, fileRelPath);
const fileDestPath = join(__dirname, 'public', fileName);
const fileSource = readFileSync(fileSourcePath, 'utf-8');
const template = Handlebars.compile(fileSource);

writeFileSync(fileDestPath, template({
  siteName: "Top Solution",
  siteSlogan: "Ideas for the future",
  url: process.env.DEPLOY_TO === 'prod' ? `https://topsolution.it` : `https://www.topsolution.dev`,
  fileName: fileName,
  locale: 'it_IT',
  image: 'img/topsolution_og_logo.png',
  css: sass.compile(fileSourcePath.replace('.html', '.scss'), {
    sourceMap: false,
    verbose: false,
    style: "compressed"
  }).css
}));


const result = sass.compile(join(__dirname, 'src', 'styles', 'global.scss'), {
  style: "compressed"
});

writeFileSync(join(__dirname, 'public', 'global.css'), result.css);
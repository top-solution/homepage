const { join } = require('path');
const { readFileSync, writeFileSync } = require('fs');
const Handlebars = require('handlebars');


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
    <ts-footer />
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
  image: 'img/topsolution_og_logo.png'
}));


const sass = require('sass');

const result = sass.compile(join(__dirname, 'src', 'styles', 'global.scss'), {
  style: "compressed"
});

writeFileSync(join(__dirname, 'public', 'global.css'), result.css);
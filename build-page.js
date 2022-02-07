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
    <style>
      /* manrope-300 - latin */
      @font-face {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 300;
        src: url('./fonts/manrope-v8-latin-300.eot'); /* IE9 Compat Modes */
        src: local(''),
            url('./fonts/manrope-v8-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('./fonts/manrope-v8-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
            url('./fonts/manrope-v8-latin-300.woff') format('woff'), /* Modern Browsers */
            url('./fonts/manrope-v8-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
            url('./fonts/manrope-v8-latin-300.svg#Manrope') format('svg'); /* Legacy iOS */
        font-display: swap;
      }

      /* manrope-regular - latin */
      @font-face {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 400;
        src: url('./fonts/manrope-v8-latin-regular.eot'); /* IE9 Compat Modes */
        src: local(''),
            url('./fonts/manrope-v8-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('./fonts/manrope-v8-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
            url('./fonts/manrope-v8-latin-regular.woff') format('woff'), /* Modern Browsers */
            url('./fonts/manrope-v8-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
            url('./fonts/manrope-v8-latin-regular.svg#Manrope') format('svg'); /* Legacy iOS */
        font-display: swap;
      }

      /* manrope-500 - latin */
      @font-face {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        src: url('./fonts/manrope-v8-latin-500.eot'); /* IE9 Compat Modes */
        src: local(''),
            url('./fonts/manrope-v8-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('./fonts/manrope-v8-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
            url('./fonts/manrope-v8-latin-500.woff') format('woff'), /* Modern Browsers */
            url('./fonts/manrope-v8-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
            url('./fonts/manrope-v8-latin-500.svg#Manrope') format('svg'); /* Legacy iOS */
        font-display: swap;
      }

      /* manrope-700 - latin */
      @font-face {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        src: url('./fonts/manrope-v8-latin-700.eot'); /* IE9 Compat Modes */
        src: local(''),
            url('./fonts/manrope-v8-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('./fonts/manrope-v8-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
            url('./fonts/manrope-v8-latin-700.woff') format('woff'), /* Modern Browsers */
            url('./fonts/manrope-v8-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
            url('./fonts/manrope-v8-latin-700.svg#Manrope') format('svg'); /* Legacy iOS */
        font-display: swap;
      }
    </style>
`)

Handlebars.registerPartial(
  "head-end",
  `
    <style>
      html, body {
        margin: 0;
        width: 100%;
        overflow-x: hidden;
      }
      body {
        overflow-y: hidden;
      }
    </style>

    <script src="./build/Footer.js"></script>
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

const fileName = process.argv[2];
const fileSourcePath = join(__dirname, fileName);
const fileDestPath = join(__dirname, 'public', fileName.substr(fileName.lastIndexOf('/')));
const fileSource = readFileSync(fileSourcePath, 'utf-8');
const template = Handlebars.compile(fileSource);

writeFileSync(fileDestPath, template({}));

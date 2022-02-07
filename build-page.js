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

const fileName = process.argv[2];
const fileSourcePath = join(__dirname, fileName);
const fileDestPath = join(__dirname, 'public', fileName.substr(fileName.lastIndexOf('/')));
const fileSource = readFileSync(fileSourcePath, 'utf-8');
const template = Handlebars.compile(fileSource);

writeFileSync(fileDestPath, template({}));


const sass = require('sass');

const result = sass.compile(join(__dirname, 'src', 'styles', 'global.scss'), {
  style: "compressed"
});

writeFileSync(join(__dirname, 'public', 'global.css'), result.css);
const { join } = require('path');
const { readFileSync, writeFileSync } = require('fs');
const Handlebars = require('handlebars');


Handlebars.registerPartial(
  "head-start",
  `
<!DOCTYPE html />
<html class="no-js" lang="">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="manifest" href="site.webmanifest" />
    <link rel="shortcut icon" type="image/svg" href="./img/logo.svg" />

    <link
      href="http://fonts.googleapis.com/css?family=Roboto:200,300,400,500,600,700,900|Work+Sans:100,200,300,400,500,600,700,800,900&display=swap"
      rel="stylesheet"
      type="text/css"
    />
`)

Handlebars.registerPartial(
  "head-end",
  `
    <style>
      html, body {
        margin: 0;
      }
    </style>

    <script src="./build/Footer.js"></script>
    <script src="./build/Header.js"></script>
  </head>
`)


Handlebars.registerPartial(
  "body-start",
  `
  <body style="overflow-x: hidden;">
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

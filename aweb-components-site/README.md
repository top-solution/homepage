# Top Solution homepage

This is the source code for Top Solution srl homepage, hosted at [https://topsolution.it/](https://topsolution.it/)

## 🚀 Quick start

### Start developing

   ```sh
   npm install
   npm run start
   ```

   #### Explanation
   The `start` npm task launches concurrently three other npm tasks:
   1. `watch`: Watches all `.svelte` files in the `src` directory and rebuilds a single component when it changes.
   2. `watch-pages`: Watches all `.html` page templates in the `src/pages` directory and rebuilds a single page when it changes.
   3. `serve`: serve all the content in the `/public` directory on `0.0.0.0:8080`. Cache should be disabled by default.

### Create a new component

   To implement a new component you need to create a `.svelte` file. Don't forget to include the necessary tag at line 1 of the file:

   ```html
   <svelte:options tag="svelte-component" />
   ```

### Components style

All site style is written with [SCSS](https://sass-lang.com/). The only exception is the small CSS snippet to style the `html` and `body` page elements, which is injected in each page template (see below).

Due to the WebComponents CSS isolation, all common styles must be included in each web component. Usually adding

```scss
  @import "./styles/main";
```

at the top of the component style tag does the trick. `main.scss` conveniently includes all common styles.

Each component has his own style inside, not accessible from the outside.


### Page templates

In order to reduce duplicated code to a minimum, the common code shared by them is injected on build time with the help of the [Handlebar](https://handlebarsjs.com/) template engine.

Each site page should contain only the page metadata, the WebComponents imports, and the bare minimum page code (most of it should be in a Svelte component anyway).

The common page parts are in the `/build-page.js` file.

## 💫 Deploy

### Deploy to S3 + Cloudfront

#### Using the CI

Push your changes to the `master` to deploy to [development website](https://www.topsolution.dev)
Push a git tag to deploy to [production website](https://www.topsolution.it)

#### Manually

To build, upload to Amazon S3 and invalidate the Cloudfront cache run:

- `npm run deploy:dev` to deploy to [development website](https://www.topsolution.dev)
- `npm run deploy:prod` to deploy to [production website](https://www.topsolution.it)

#### Figma file

- [Figma sito](https://www.figma.com/file/ML7gW0hjLLrSC2pCLTL3hb/Restyling-Sito-Top-Solution)
- [Prototipo di utilizzo](https://www.figma.com/proto/ML7gW0hjLLrSC2pCLTL3hb/Restyling-Sito-Top-Solution?node[…]aling=min-zoom&page-id=0%3A1&starting-point-node-id=175%3A1061)

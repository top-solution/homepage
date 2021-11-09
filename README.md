# Top Solution homepage

This is the source code for Top Solution srl homepage, hosted at [https://topsolution.it/](https://topsolution.it/)

## 🚀 Quick start

1. **Start developing.**

   ```sh
   npm install
   npm run dev #Watch svelte files and build when any of them change
   npm start #start a simple web server on public directory
   ```

2. **Create a new component**

   To create a new component you need to create a `.svelte` file. Don't forget to include the necessary tag:

   ```html
   <svelte:options tag="svelte-component" />
   ```

   You need to import the common style in your component:

   ```css
   @import "css/main.css";
   @import "css/normalize.css";
   @import "css/style.css";
   ```

## 💫 Deploy

### Deploy to S3 + Cloudfront

#### Using the CI

Push your changes to the `master` to deploy to [development website](https://www.topsolution.dev)
Push a git tag to deploy to [production website](https://www.topsolution.it)

#### Manually

To build, upload to Amazon S3 and invalidate the Cloudfront cache run:

- `npm run deploy:dev` to deploy to [development website](https://www.topsolution.dev)
- `npm run deploy:prod` to deploy to [production website](https://www.topsolution.it)

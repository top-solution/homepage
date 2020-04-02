# Top Solution homepage

This is the source code for Top Solution srl homepage, hosted at [https://topsolution.it/](https://topsolution.it/)

## 🚀 Quick start

1. **Install the Gatsby CLI.**

    The Gatsby CLI helps you create new sites using Gatsby starters (like this one!)

    ```sh
    # install the Gatsby CLI globally
    npm install -g gatsby-cli
    ```

2. **Clone this repo.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```sh
    git clone git@gitlab.com:top-solution/ts-homepage.git
    ```

3. **Start developing.**

    Navigate into the site’s directory and start it up.

    ```sh
    cd ts-homepage/
    npm run start
    ```

4. **Open the source code and start editing!**

    The website preview is now running at `http://localhost:8000`!

    *Note: You'll also see a second link: `http://localhost:8000___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://next.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*

    Open the the `ts-homepage` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## ✏️ Editing content


## 💫 Deploy

### Deploy to S3 + Cloudfront

#### Using the CI

Push your changes to the `master` to deploy to [development website](https://www.topsolution.dev)
Push a git tag to deploy to [production website](https://www.topsolution.it)

#### Manually

To build, upload to Amazon S3 and invalidate the Cloudfront cache run:

* `npm run deploy:dev` to deploy to [development website](https://www.topsolution.dev)
* `npm run deploy:prod` to deploy to [production website](https://www.topsolution.it)

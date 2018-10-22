const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Top Solution',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'src', 'editorial'),
        name: 'pages',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'top-solution',
        short_name: 'topsolution',
        start_url: '/',
        background_color: '#312783',
        theme_color: '#312783',
        display: 'minimal-ui',
        icon: 'src/images/top-solution/logo.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            includePaths: [
              path.join(__dirname, 'src'),
              path.join(__dirname, 'node_modules'),
            ],
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
              quality: 80,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}

const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Top Solution',
    description: 'Top Solution permette alle aziende di realizzare progetti ed attività finalizzate a facilitare il cambiamento e/o il consolidamento del proprio business.',
    keywords: ['Top', 'Solution', 'Topsolution', 'Topsolution srl'],
    siteUrl: 'https://www.topsolution.it',
    company: {
      name: 'Top Solution s.r.l',
      streetAddress: 'Via Livorno 60 – B2 LAB',
      locality: 'Turin',
      region: 'TO',
      postalCode: 10144,
      countryName: 'Italy',
      latitude: 45.087562,
      longitude: 7.673475,
      vatId: '10031960015'
    },
    contacts: {
      phone: '+39 011 2488280‬',
      email: 'info@topsolution.it',
    },
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
    // 'gatsby-plugin-offline',
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
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-51082295-10',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        // respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Enables Google Optimize using your container Id
        // optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        // Any additional create only fields (optional)
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        cookieDomain: 'www.topsolution.it',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        // policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    'gatsby-plugin-sitemap',
  ],
}

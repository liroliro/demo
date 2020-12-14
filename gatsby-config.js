const siteUrl = 'https://demo.com'

require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    description: 'WDN Demo',
    name: 'WDN Demo',
    siteUrl: siteUrl,
    menuItems: [
      {
        title: 'Hem',
        link: '/',
        partiallyActive: false,
      },
    ],
  },
  plugins: [
    {
      resolve: '@accodeing/gatsby-theme-heimr',
      options: {
        manifest: {
          name: 'WDN demo',
          short_name: 'WDN',
          background_color: '#FFF',
          theme_color: '#FFF',
        },
        siteUrl: siteUrl,
        matomoSiteId: 'TODO',
      },
    },
    {
      resolve: `gatsby-source-google-docs`,
      options: {
        folders: [process.env.GOOGLE_DOCS_FOLDER],
        demoteHeadings: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: ['gatsby-remark-images'],
      },
    },
  ],
}

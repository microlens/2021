import type { GatsbyConfig, PluginRef } from "gatsby"

const config: GatsbyConfig = {
  pathPrefix: `/2021`,
  siteMetadata: {
    siteTitle: `2021`,
    siteTitleAlt: `2021 | Photos by Long Nhat Nguyen`,
    siteHeadline: `2021 | Photos by Long Nhat Nguyen`,
    siteUrl: `https://microlens.github.io/2021`,
    siteDescription: "Photos by Long Nhat Nguyen",
    siteImage: `/og-image.jpg`,
    author: `@torn4dom4n`,
  },
  trailingSlash: `never`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: `2021`,
        socialMedia: [{}],
        showThemeAuthor: false,
        location: `Vietnam`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `2021 | Photos by Long Nhat Nguyen`,
        short_name: `2021`,
        description: `Photos by Long Nhat Nguyen`,
        start_url: `/`,
        background_color: `#fff`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
        ],
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config

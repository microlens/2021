module.exports = {
  pathPrefix: "/2021",
  siteMetadata: {
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-emilia-core/gatsby-config.js
    siteTitle: `2021`,
    siteTitleAlt: `2021 | 📷 by Long Nhat Nguyen`,
    siteHeadline: `2021 | 📷 by Long Nhat Nguyen`,
    siteUrl: `https://retro90s.github.io/2021/`,
    siteDescription: "Photos by Long Nhat Nguyen",
    siteLanguage: `en`,
    author: `@torn4dom4n`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: `2021`,
        socialMedia: [{}],
        location: `Vietnam`,
      },
    },
  ],
}

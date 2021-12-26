module.exports = {
  pathPrefix: "/2021",
  siteMetadata: {
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-emilia-core/gatsby-config.js
    siteTitle: `2021`,
    siteTitleAlt: `2021 | 📷 from Long Nhat Nguyen`,
    siteHeadline: `2021 | 📷 from Long Nhat Nguyen`,
    siteUrl: `https://retro90s.github.io/2021/`,
    siteDescription: "📷 from Long Nhat Nguyen in 2021",
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

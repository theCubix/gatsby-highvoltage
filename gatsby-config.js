module.exports = {
  siteMetadata: {
    title: 'Voltage Arc',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: "src/"
      }
    },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        precision: 8, // SASS default: 5
      },
    },
  ],
}

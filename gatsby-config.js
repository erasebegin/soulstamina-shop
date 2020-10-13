require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path')

module.exports = {
  siteMetadata: {
    title: "Soulstamina",
    author: "Yana",
    imageUrl: "https://i.imgur.com/Vz81GEl.png",
    description: "Welcome to the Soulstamina shop!",
    keywords: `canvas print postcards estonia tallinn artwork painting photography`,
    etsy: "https://www.etsy.com/shop/soulstaminart",
    email: "yana@soulstamina.shop",
    instagram: "https://www.instagram.com/soulstamina/",
    siteUrl: `https://www.soulstamina.shop`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
              withWebp: true,
              loading: "lazy",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Makefolio",
        short_name: "Makefolio",
        start_url: "/",
        display: "standalone",
        icon: "src/images/favicon_foxy38px.png",
        orientation: "portrait",
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-XXXXXXXX-X",
        // Setting this parameter is optional (requried for some countries such as Germany)
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-snipcartv3',
      options: {
        apiKey: process.env.SNIPCART_API_KEY
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
  ],
};
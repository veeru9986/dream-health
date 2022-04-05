const path = require(`path`);
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Dream Health",
    titleTemplate: "Dream Health",
    description: "Dream Health",
    image: "/Icon.svg",
    siteUrl: "https://dreamhealth.netlify.app",
    author: "veeresh",
    authorSite: "",
    twitterUsername: "@dreamhealth",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Dream Health`,
        short_name: `Dream Health`,
        description: `Dream Health`,
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://infinite-retreat-91320.herokuapp.com",
        singleTypes: [
          "home",
          "navbar",
          "service",
          "about",
          "signin",
          "signup",
          "footer",
        ],
      },
    },

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

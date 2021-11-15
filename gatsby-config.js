module.exports = {
  siteMetadata: {
    siteUrl: "https://www.example.it",
    title: "milligram-starter",
    description: "Starter Gatsby template with milligram css",
    author: "Andrea B.",
    keywords: ["gatsbyjs, starter, javascript, react"],
    lang: "it",
    ogImage: "images/og-image.jpg",
    url: "https://www.example.it",
    favicon: {
      ico: 'images/favicon.ico',
      sm: 'images/favicon-16x16.png',
      lg: 'images/favicon-32x32.png'
    }
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

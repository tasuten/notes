module.exports = {
  siteMetadata: {
    title: "忘れな草稿",
    author: "tasuten",
    description: "技術や科学について備忘録も兼ねて記しているサイト",
    url: "https://tasuten.github.io/notes", // without trailing slash
    lang: "ja",
    ogpImagePath: "/ogp.png", // under static/
  },
  pathPrefix: "/notes",
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/articles`,
        name: "articles",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              quality: 80,
              loading: "auto",
            },
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              noInlineHighlight: true,
            },
          },
          {
            resolve: "gatsby-remark-katex",
            options: {},
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require("sass"),
      },
    },
    "gatsby-plugin-no-sourcemaps",
  ],
};

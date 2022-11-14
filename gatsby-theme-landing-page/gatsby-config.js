// theme config
module.exports = (opts = {}) => {
  return {
    plugins: [
      "gatsby-plugin-image",
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`, // Needed for dynamic images
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          footnotes: true,
          gfm: true,
          plugins: [],
        },
      },
    ],
  };
};

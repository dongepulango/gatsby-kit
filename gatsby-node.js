const path = require(`path`);

exports.onCreateWebpackConfig = ({ getConfig, stage, actions }) => {
  const config = getConfig();
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom"
    };
  };
  //absolute import
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};
//////////////////////////////////////////////////////

exports.createPages = ({graphql, actions}) => {

  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
                id
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
          path: node.frontmatter.slug,
          component: path.resolve('./src/templates/post.js'),
          context: {
            id: node.frontmatter.id
          },
        });
      });
      resolve();
    });
  });

};
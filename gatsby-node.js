const path = require(`path`);

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
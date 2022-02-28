const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allStrapiTestPages {
        nodes {
          data {
            attributes {
              slug
            }
          }
        }
      }
    }
  `);
  const templatePath = path.resolve(`./src/templates/testPage.js`);

  result.data.allStrapiTestPages.nodes.forEach((node) => {
    const NODE_SLUG = node.data[0].attributes.slug;
    createPage({
      path: NODE_SLUG,
      component: templatePath,
      context: {
        slug: NODE_SLUG,
      },
    });
  });
};

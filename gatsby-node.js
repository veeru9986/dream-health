const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allStrapiTestPage {
        nodes {
          slug
        }
      }
    }
  `);
  const templatePath = path.resolve(`./src/templates/testPage.js`);


    result.data.allStrapiTestPage.nodes.forEach((node) => {
      const NODE_SLUG = node.slug;
      createPage({
        path: NODE_SLUG,
        component: templatePath,
        context: {
          slug: NODE_SLUG,
        },
      });
    });
};

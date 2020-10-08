const path = require(`path`);
const slash = require(`slash`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
      {
        allContentfulProduct {
          edges {
            node {
              id
              title
            }
          }
        }
        allContentfulProductCategories {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `
  )
  .then((result) => {
    console.log(result)
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors);
      }

      const generateSlug = (string) => {
        return string.replace(/\W+/g, "-");
      };

      // Resolve the paths to our template
      const productTemplate = path.resolve("./src/templates/productPage.js");
      // Then for each result we create a page.
      result.data.allContentfulProduct.edges.forEach((edge) => {
        createPage({
          path: `/${generateSlug(edge.node.title)}/`,
          component: slash(productTemplate),
          context: {
            slug: generateSlug(edge.node.title),
            id: edge.node.id,
            title: edge.node.title
          },
        });
      });


      const categoryTemplate = path.resolve("./src/templates/categoryPage.js");

      result.data.allContentfulProductCategories.edges.forEach((edge) => {
        createPage({
          path: `/categories/${generateSlug(edge.node.title)}/`,
          component: slash(categoryTemplate),
          context: {
            slug: generateSlug(edge.node.title),
            id: edge.node.id,
          },
        });
      });
    })
    .catch((error) => {
      console.log("Error retrieving contentful data", error);
    });
};

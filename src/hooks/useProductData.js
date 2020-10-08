import { useStaticQuery, graphql } from "gatsby";

const useProductData = id => {
  const {
    data: { products }
  } = useStaticQuery(graphql`
    {
      data: allContentfulProduct(sort: { fields: createdAt }) {
        products: edges {
          node {
            id
            price
            category {
              title
            }
            title
            description {
              internal {
                content
              }
            }
          }
        }
      }
    }
  `);

  return id ? products.find(product => product.node.id === id) : products;
};

export default useProductData;

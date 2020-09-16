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
            slug
            productCategory
            title
            image {
              file {
                url
              }
            }
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

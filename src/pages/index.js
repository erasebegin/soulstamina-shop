import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Header from "../components/header/header";
import ProductList from "../components/products/ProductList";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    window.innerWidth <= 800 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  window.onresize = function() {
    window.innerWidth <= 800 ? setIsMobile(true) : setIsMobile(false);
  };

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Header background={data.img} isMobile={isMobile} />
        <ProductList items={data.featured} isMobile={isMobile} />
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    img: contentfulDesignElement {
      homePageHeaderImage {
        file {
          url
        }
      }
    }
    product: allContentfulProduct(sort: { fields: createdAt }) {
      edges {
        node {
          description {
            internal {
              content
            }
          }
          image {
            file {
              url
            }
          }
          id
          price
          productCategory
          slug
          title
        }
      }
    }
    featured: allContentfulProduct(
      filter: { featured: { eq: true } }
      sort: { fields: createdAt }
    ) {
      edges {
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
`;

export default IndexPage;

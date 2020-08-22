import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Header from "../components/header/header";
import ProductList from "../components/products/ProductList";
import FeaturedProduct from "../components/products/productCardFeatured";
import Title from "../components/globals/Title"
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  const [isMobile, setIsMobile] = useState(null); 

  useEffect(() => {
    window.innerWidth <= 800 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  if (typeof window === 'undefined') {
    global.window = {}
  }

  window.onresize = function() {
    window.innerWidth <= 800 ? setIsMobile(true) : setIsMobile(false);
  };

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Header background={data.img} isMobile={isMobile} />
        <FeaturedProduct data={data.recent.edges[0].node} isMobile={isMobile} />
        <section className="section recent-products">
          <Title title="recent."/>
          <ProductList items={data.recent.edges} isMobile={isMobile} />
        </section>
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
    recent: allContentfulProduct(
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

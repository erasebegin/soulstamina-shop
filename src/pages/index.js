import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import ProductList from "../components/products/ProductList";
import FeaturedProduct from "../components/products/productCardFeatured";
import Title from "../components/globals/Title";
import Carousel from "../components/carousel";
import SEO from "../components/seo";

import "../components/style.scss";

const IndexPage = ({ data }) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    window.innerWidth <= 800 ? setIsMobile(true) : setIsMobile(false);
  });

  if (typeof window === "undefined") {
    global.window = {};
  }

  window.onresize = function() {
    window.innerWidth <= 800 ? setIsMobile(true) : setIsMobile(false);
  };

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Carousel data={data.hero.edges} isMobile={isMobile} />
        <FeaturedProduct
          data={data.featured.edges[0].node}
          isMobile={isMobile}
        />
        <section className="section recent-products">
          <Title title="recent." />
          <ProductList items={data.featured.edges} isMobile={isMobile} />
        </section>
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    hero: allContentfulHomePageHeroSlide(
      limit: 5
      sort: { fields: updatedAt }
    ) {
      edges {
        node {
          textColor
          title
          largeImage {
            file {
              url
            }
          }
          smallImage {
            file {
              url
            }
          }
          product {
            image {
              file {
                url
              }
            }
            slug
            title
          }
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

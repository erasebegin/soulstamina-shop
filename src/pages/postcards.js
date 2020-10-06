import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import ProductList from "../components/products/ProductList";
import FeaturedProduct from "../components/products/ProductCardFeatured";
import Title from "../components/globals/Title";
import SEO from "../components/seo";

const PostcardsPage = ({ data }) => {
  const [isMobile, setIsMobile] = useState(null);
  const [list, setList] = useState(null);

  const removeFeaturedItem = () => {
    const newList = data.postcards.edges.filter(item => {
      return item.node.id !== data.featured.edges[0].node.id;
    });

    setList(newList);
  };

  useEffect(() => {
    window.innerWidth <= 1000 ? setIsMobile(true) : setIsMobile(false);

    removeFeaturedItem();
  }, []);

  if (typeof window === "undefined") {
    global.window = {};
  }

  window.onresize = function() {
    window.innerWidth <= 800 ? setIsMobile(true) : setIsMobile(false);
  };

  return (
    <>
      <SEO title="Postcards" />
      <Layout>
        <Title title="postcards" subtitle="by yana soulstamina" />
        <FeaturedProduct
          data={data.featured.edges[0].node}
          isMobile={isMobile}
        />
        <section className="section recent-products">
          <ProductList items={list} isMobile={isMobile} />
        </section>
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    featured: allContentfulProduct(
      filter: { featured: { eq: true }, productCategory: { eq: "Postcards" } }
      sort: { fields: createdAt }
    ) {
      edges {
        node {
          id
          price
          slug
          productCategory
          title
          gallery {
            fluid(resizingBehavior: CROP, cropFocus: CENTER) {
              ...GatsbyContentfulFluid
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
    postcards: allContentfulProduct(
      filter: { productCategory: { eq: "Postcards" } }
      sort: { fields: createdAt }
    ) {
      edges {
        node {
          id
          price
          slug
          productCategory
          title
          gallery {
            fluid(resizingBehavior: CROP, cropFocus: CENTER) {
              ...GatsbyContentfulFluid
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

export default PostcardsPage;

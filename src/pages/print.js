import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import ProductList from "../components/products/ProductList";
import FeaturedProduct from "../components/products/ProductCardFeatured";
import Title from "../components/globals/Title";
import SEO from "../components/seo";

const PrintPage = ({ data }) => {
  const [isMobile, setIsMobile] = useState(null);
  const [list, setList] = useState(null);

  const featuredItem =
    data.featured.edges[0].length > 0 ? data.featured.edges[0].node : null;

  const removeFeaturedItem = () => {
    const newList = data.print.edges.filter(item => {
      return item.node.id !== data.featured.edges[0].node.id;
    });

    setList(newList);
  };

  useEffect(() => {
    window.innerWidth <= 1000 ? setIsMobile(true) : setIsMobile(false);

    if (featuredItem) {
      removeFeaturedItem();
    } else {
      setList(data.print.edges);
    }
  }, []);

  if (typeof window === "undefined") {
    global.window = {};
  }

  window.onresize = function() {
    window.innerWidth <= 800 ? setIsMobile(true) : setIsMobile(false);
  };

  return (
    <>
      <SEO title="prints" />
      <Layout>
        <Title title="prints" subtitle="by yana soulstamina" />
        {featuredItem ? (
          <FeaturedProduct
            data={data.featured.edges[0].node}
            isMobile={isMobile}
          />
        ) : (
          ""
        )}
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
      filter: { featured: { eq: true }, productCategory: { eq: "Print" } }
      sort: { fields: createdAt }
    ) {
      edges {
        node {
          id
          price
          slug
          productCategory
          title
          fluid: image {
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
    print: allContentfulProduct(
      filter: { productCategory: { eq: "Print" } }
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

export default PrintPage;

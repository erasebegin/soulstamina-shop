import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import ProductList from "../components/products/ProductList";
import FeaturedProduct from "../components/products/ProductCardFeatured";
import Title from "../components/globals/Title";
import SEO from "../components/seo";

const CanvasPage = ({ data }) => {
  const [isMobile, setIsMobile] = useState(null);
  const [canvasList, setCanvasList] = useState(null);

  const removeFeaturedItem = () => {
    const newList = data.canvases.edges.filter(item => {
      return item.node.id !== data.featured.edges[0].node.id;
    });

    setCanvasList(newList);
  };

  useEffect(() => {
    window.innerWidth <= 800 ? setIsMobile(true) : setIsMobile(false);

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
      <SEO title="Canvases" />
      <Layout>
        <Title title="canvases." subtitle="by soulstamina" />
        <FeaturedProduct
          data={data.featured.edges[0].node}
          isMobile={isMobile}
        />
        <section className="section recent-products">
          <ProductList items={canvasList} isMobile={isMobile} />
        </section>
      </Layout>
    </>
  );
};

export const query = graphql`
  {
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
    canvases: allContentfulProduct(
      filter: { productCategory: { eq: "Canvas" } }
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
  }
`;

export default CanvasPage;

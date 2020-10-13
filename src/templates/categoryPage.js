import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import ProductList from "../components/products/ProductList";
import FeaturedProduct from "../components/products/ProductCardFeatured";
import Title from "../components/globals/Title";
import SEO from "../components/seo";

const CategoryPage = ({ data }) => {
  const [isMobile, setIsMobile] = useState(null);
  const [productList, setProductList] = useState(null);

  const featuredArr = data.categories.product.filter((item) => {
    return item.featured === true;
  });

  const featuredProduct = featuredArr[0];

  const removeFeaturedItem = () => {
    const newList = data.categories.product.filter((item) => {
      return item.id !== featuredProduct.id;
    });

    setProductList(newList);
  };

  useEffect(() => {
    window.innerWidth <= 1000 ? setIsMobile(true) : setIsMobile(false);
    removeFeaturedItem();
  }, []);

  if (typeof window === "undefined") {
    global.window = {};
  }

  window.onresize = function() {
    window.innerWidth <= 1000 ? setIsMobile(true) : setIsMobile(false);
  };

  return (
    <>
      <SEO title={data.categories.title} />
      <Layout>
        <Title title={data.categories.title} subtitle="by yana soulstamina" />
        <FeaturedProduct data={featuredProduct} isMobile={isMobile} />
        <section className="section recent-products">
          <ProductList nodeless={productList} isMobile={isMobile} />
        </section>
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    categories: contentfulProductCategories(id: { eq: $id }) {
      title
      product {
        id
        title
        featured
        price
        gallery {
          fluid(resizingBehavior: CROP, cropFocus: CENTER) {
            ...GatsbyContentfulFluid
          }
        }
        category {
          title
        }
        description {
          internal {
            content
          }
        }
      }
    }
  }
`;

export default CategoryPage;

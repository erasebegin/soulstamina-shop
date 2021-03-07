import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import ProductList from '../components/products/ProductList';
import FeaturedProduct from '../components/products/ProductCardFeatured';
import Title from '../components/globals/Title';
import SEO from '../components/seo';

const CategoryPage = ({ data }) => {
  const [isMobile, setIsMobile] = useState(null);
  const [productList, setProductList] = useState(null);
  const [featuredArr, setFeaturedArr] = useState([]);

  const createProductList = () => {
    if (featuredArr.length > 0) {
      setProductList(
        data.categories.product.filter((item) => item.id !== featuredArr[0].id)
      );
    } else {
      setProductList(data.categories.product);
    }
  };

  useEffect(() => {
    if (data) {
      const featured = data.categories.product.filter(
        (item) => item.featured === true
      );
      if (featured.length > 0) {
        setFeaturedArr(featured);
      }
    }
  }, []);


  useEffect(() => {
    window.innerWidth <= 1000 ? setIsMobile(true) : setIsMobile(false);
    console.log({ data });
    createProductList();
  }, []);

  if (typeof window === 'undefined') {
    global.window = {};
  }

  window.onresize = function() {
    window.innerWidth <= 1000 ? setIsMobile(true) : setIsMobile(false);
  };

  if (!productList) {
    return (
      <>
        <SEO title={data.categories.title} />
        <Layout title={data.categories.title}>
          <Title title={data.categories.title} subtitle="by yana soulstamina" />
          <ErrorMessage>Oops, it appears there's nothing here yet</ErrorMessage>
        </Layout>
      </>
    );
  }

  return (
    <>
      <SEO title={data.categories.title} />
      <Layout title={data.categories.title}>
        <Title title={data.categories.title} subtitle="by yana soulstamina" />
        <FeaturedProduct data={featuredArr[0]} isMobile={isMobile} />
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

const ErrorMessage = styled.p`
  font-family: 'Playfair Display';
  font-size: 1.2rem;
  text-align: center;
  margin-top: 4em;
`;

export default CategoryPage;

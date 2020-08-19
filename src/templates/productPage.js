import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import ProductPageHeader from "../components/product-page/ProductPageHeader";
import Layout from "../components/layout";
import Title from "../components/Title";
import SEO from "../components/seo";

const productPage = ({ data }) => {
  const { title, description, image, price } = data.contentfulProduct;

  return (
    <Layout>
      <SEO title={title} />
      <Container>
          <ProductPageHeader
            title={title}
            image={image}
            price={price}
            description={description}
          />
      </Container>
    </Layout>
  );
};
export default productPage;
const Container = styled.div``;
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      title
      slug
      image {
        file {
          url
        }
      }
      description {
        description
      }
    }
  }
`;

import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/react";
import ProductPageHeader from "../components/product-page/ProductPageHeader";
import ProductList from "../components/products/ProductList";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ProductPage = ({ data }) => {
  const {
    id,
    title,
    description,
    image,
    price,
    gallery,
    body,
    productCategory,
  } = data.singleProduct;

  console.log({ productCategory });

  const [isMobile, setIsMobile] = useState(null);
  const [relatedItems, setRelatedItems] = useState(null);

  const getRelatedItems = () => {
    const related = data.multipleProducts.edges.filter((item) => {
      return (
        item.node.productCategory === productCategory && item.node.id !== id
      );
    });
    setRelatedItems(related);
  };

  if (typeof window === "undefined") {
    global.window = {};
  }

  window.onresize = function() {
    window.innerWidth <= 800 ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    window.innerWidth <= 800 ? setIsMobile(true) : setIsMobile(false);
    getRelatedItems();
  }, []);
  console.log({ relatedItems });
  return (
    <Layout>
      <SEO title={title} />
      <Container className="container">
        <div className="columns">
          <div className="column">
            <ProductPageHeader
              title={title}
              image={image}
              price={price}
              description={description}
              gallery={gallery}
            />
            {body ? (
              <MDXProvider>
                <article>
                  <MDXRenderer>{body.childMdx.body}</MDXRenderer>
                </article>
              </MDXProvider>
            ) : (
              ""
            )}
            <div className="columns more-list">
              <h2 className="heading is-lowercase">
                more in the <span>{productCategory}</span> category
              </h2>
              <ProductList
                limit={3}
                items={relatedItems}
                isMobile={isMobile}
                cardClass="columns is-desktop is-centered"
              />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};
export default ProductPage;
const Container = styled.div`
  article {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 700px;
    padding: 1em;
    font-size: 1.3rem;
    margin-bottom: 2em;
    p {
      margin: 1em 0;
    }
  }

  .more-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid lightgray;
    h2 {
      margin-top: 1em;
      font-size: 2rem;
      font-family: "Playfair Display", serif;

      span {
        font-weight: bold;
      }
    }
  }
`;
export const pageQuery = graphql`
  query($slug: String!) {
    singleProduct: contentfulProduct(slug: { eq: $slug }) {
      id
      title
      productCategory
      slug
      image {
        file {
          url
        }
      }
      description {
        description
      }
      body {
        childMdx {
          body
        }
      }
      gallery {
        file {
          url
        }
      }
    }
    multipleProducts: allContentfulProduct(sort: { fields: createdAt }) {
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
  }
`;

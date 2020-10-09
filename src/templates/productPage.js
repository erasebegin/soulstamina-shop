import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/react";

import generateSlug from "../utils/GenerateSlug"
import ProductPageHeader from "../components/product-page/ProductPageHeader";
import ProductList from "../components/products/ProductList";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ProductPage = ({ data }) => {
  const {
    id,
    title,
    description,
    price,
    galleryThumbnail,
    galleryFixed,
    gallery,
    body,
    category,
  } = data.singleProduct;

  const [isMobile, setIsMobile] = useState(null);
  const [relatedItems, setRelatedItems] = useState(null);

  const getRelatedItems = () => {
    const related = data.multipleProducts.edges.filter((item) => {
      return item.node.category.title === category.title && item.node.id !== id;
    });
    setRelatedItems(related);
  };

  if (typeof window === "undefined") {
    global.window = {};
  }

  window.onresize = function() {
    window.innerWidth <= 1000 ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    window.innerWidth <= 1000 ? setIsMobile(true) : setIsMobile(false);
    getRelatedItems();
  }, []);

  return (
    <Layout>
      <SEO title={title} />
      <Container className="container">
        <div className="columns">
          <div className="column">
            <ProductPageHeader
              title={title}
              galleryFixed={galleryFixed}
              galleryThumbnail={galleryThumbnail}
              gallery={gallery}
              price={price}
              description={description}
              id={id}
              slug={generateSlug(title)}
              isMobile={isMobile}
            />
            {body ? (
              <MDXProvider>
                <article>
                  <MDXRenderer>{body.childMdx.body}</MDXRenderer>
                </article>
              </MDXProvider>
            ) : (
              <article>&nbsp;</article>
            )}
            <div className="section more-list">
              <h2 className="heading is-lowercase">
                more in the <span>{category.title}</span> category
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
      margin: 2em 0;
      font-size: 2rem;
      font-family: "Playfair Display", serif;

      span {
        font-weight: bold;
      }
    }
  }
`;
export const pageQuery = graphql`
  query($id: String!) {
    singleProduct: contentfulProduct(id: { eq: $id }) {
      id
      title
      category {
        title
      }
      price
      description {
        description
      }
      body {
        childMdx {
          body
        }
      }
      galleryThumbnail: gallery {
        fixed(
          resizingBehavior: FILL
          cropFocus: CENTER
          width: 150
          height: 150
        ) {
          ...GatsbyContentfulFixed
        }
      }
      gallery {
        fluid(resizingBehavior: FILL, cropFocus: CENTER) {
          ...GatsbyContentfulFluid
        }
      }
      galleryFixed: gallery {
        fixed(resizingBehavior: FILL) {
          ...GatsbyContentfulFixed
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
          gallery {
            fluid(resizingBehavior: CROP, cropFocus: CENTER) {
              ...GatsbyContentfulFluid
            }
          }
          id
          price
          category {
            title
          }
          title
        }
      }
    }
  }
`;

import React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/react";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../components/globals/Title";
import styled from "styled-components";

export default function about({ data }) {
  const aboutData = data.about.edges[0].node;

  return (
    <>
      <SEO title="About" />
      <Layout>
        <Container className="container">
          <div className="title-container">
            <Title
              title={aboutData.title}
              subtitle={aboutData.subtitle}
              styleClassH1="is-size-1 has-text-centered"
              styleClassH2="is-size-4 has-text-centered"
            />
          </div>
          <div className="header-container">
            <div className="title-image-container">
              <div className="image-container">
                <Img fluid={aboutData.image.fluid} className="image image1" />
              </div>

              <div className="image-container">
                <Img fluid={aboutData.image2.fluid} className="image image2" />
              </div>
              <div className="image-container">
                <Img fluid={aboutData.image3.fluid} className="image image3" />
              </div>
            </div>
            <div className="header-text-container">
              <div className="header-text">
                {aboutData.headerText.internal.content}
              </div>
            </div>
          </div>
          {aboutData.body ? (
            <MDXProvider>
              <article>
                <MDXRenderer>{aboutData.body.childMdx.body}</MDXRenderer>
              </article>
            </MDXProvider>
          ) : (
            <article>&nbsp;</article>
          )}
        </Container>
      </Layout>
    </>
  );
}

const Container = styled.div`
  max-width: 1000px;
  padding-top: 1em;

  .title-container {
    /* position: absolute; */
    font-family: "Playfair Display", serif;
    text-transform: lowercase;
    /* margin: 4em auto 4em 50%; */
    /* background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    z-index: 25;
    padding: 1em;
    padding-top: 0;
    backdrop-filter: blur(5px);
      margin-bottom: 1em;

    @media (min-width: 900px) {
      position: initial;
      background: none;
      box-shadow: none;
      padding: 0;
      margin-left: 10px;
      margin-bottom: 3em;
    }
  }

  .header-container {
    display: flex;
    flex-direction: column;

    .title-image-container {
      display: flex;
      align-items: center;
      justify-content: center;
      .image-container {
        transform: rotate(-5deg);
        background: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
        padding: 1em;
        margin-bottom: 3em;

        .image {
          width: 200px;
          height: 200px;
          margin-bottom: 20px;
        }

        &:nth-child(2) {
          transform: rotate(20deg);
          margin: 0 -1em 0 -2em;

          @media (min-width: 900px) {
            margin: 0 2em 0 1em;
          }
        }
      }
    }

    .header-text-container {
      margin: auto;
      padding: 1em;
      padding-left: 2em;
      max-width: 800px;
      font-size: 1.3rem;
      background: url(https://i.ibb.co/swKgdJh/61e4f93baa251a8d8c5475e81e1cd394-resize.jpg);
      transform: rotate(1deg);
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      z-index: 30;

      @media (min-width: 900px) {
        /* margin-left: 20%; */
      }
    }
  }

  article {
    padding: 0 2em;
    font-size: 1.2rem;
    max-width: 700px;
    margin: auto;
    margin-top: 4em;

    p {
      margin-bottom: 3em;
    }
  }
`;

export const query = graphql`
  {
    about: allContentfulAboutPage(limit: 1, sort: { fields: updatedAt }) {
      edges {
        node {
          body {
            childMdx {
              body
            }
          }
          image {
            fluid(resizingBehavior: CROP, cropFocus: CENTER) {
              ...GatsbyContentfulFluid
            }
          }
          image2 {
            fluid(resizingBehavior: CROP, cropFocus: CENTER) {
              ...GatsbyContentfulFluid
            }
          }
          image3 {
            fluid(resizingBehavior: CROP, cropFocus: CENTER) {
              ...GatsbyContentfulFluid
            }
          }
          title
          subtitle
          headerText {
            internal {
              content
            }
          }
        }
      }
    }
  }
`;

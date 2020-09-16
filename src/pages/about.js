import React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/react";

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
              <div className="image-container image1">
                <img src={aboutData.image.file.url} />
              </div>

              <div className="image-container image2">
                <img src={aboutData.image2.file.url} />
              </div>
              <div className="image-container image3">
                <img src={aboutData.image3.file.url} />
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
    position: absolute;
    font-family: "Playfair Display", serif;
    text-transform: lowercase;
    margin-left: 50%;
    margin-top: 4em;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    z-index: 25;
    padding: 1em;
    padding-top: 0;
    backdrop-filter: blur(5px);

    @media (min-width: 900px) {
      position: initial;
      background: none;
      box-shadow: none;
      padding: 0;
      margin-left: 10px;
      margin-bottom: -4em;
      margin-top: 0;
    }
  }

  .header-container {
    display: flex;
    flex-direction: column;

    .title-image-container {
      display: flex;
      align-items: center;
      justify-content: start;
      .image-container {
        padding: 0.5em;
        margin-left: 10%;
        object-fit: cover;
        transform: rotate(-5deg);
        z-index: 1;
        background: url(https://i.ibb.co/6bNQ0t0/29-05-13-paper07.jpg);

        @media (min-width: 900px) {
          padding: 1em;
          margin-top: 200px;
        }
      }

      .image1 {
        order: 2;
        max-width: 350px;
        position: relative;
        z-index: 20;

        @media (min-width: 900px) {
          position: initial;
          order: 1;
          max-width: 300px;
          z-index: 1;
        }
      }

      .image2,
      .image3 {
        margin: 0;
        max-width: 300px;

        @media (min-width: 900px) {
          max-width: 200px;
        }
      }

      .image2 {
        transform: rotate(1deg);
        order: 1;
        display: none;

        @media (min-width: 900px) {
          order: 2;
          display: initial;
          margin-bottom: -30px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
      }

      .image3 {
        margin-left: -2em;
        transform: rotate(5deg);
        order: 3;
        display: none;

        @media (min-width: 900px) {
          display: initial;
          margin-bottom: -40px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
      }
    }

    .header-text-container {
      margin: 0 0.5em;
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
        margin-top: -4em;
        margin-left: 20%;
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
            file {
              url
            }
          }
          image2 {
            file {
              url
            }
          }
          image3 {
            file {
              url
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

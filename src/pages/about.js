import React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/react";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../components/globals/Title";
import styled from "styled-components";

import loadable from "@loadable/component";

// import BackgroundImage from "gatsby-background-image";
// gatsby-background-image was causing HTML build error since it tried to access the window object which is not available at build time

// this setup will work for gatsby build, but will break when using gatsby develop. While using gatsby develop, switch BackgroundImage to normal
// import instead of using @loadable/component

const BackgroundImage = loadable(() => import("gatsby-background-image"));

export default function about({ data }) {
  const aboutData = data.about.edges[0].node;
  console.log({ data });

  return (
    <>
      <SEO title="About" />
      <Layout title="About">
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
              <Img
                className="image"
                fluid={aboutData.image.fluid}
                backgroundColor={`#040e18`}
              />
            </div>
            <BackgroundImage
              fluid={data.canvas.childImageSharp.fluid}
              className="header-text-container"
              style={
                aboutData.headerText
                  ? { display: "initial" }
                  : { display: "none" }
              }
            >
              <div
                className="header-text"
              >
                {aboutData.headerText
                  ? aboutData.headerText.internal.content
                  : ""}
              </div>
            </BackgroundImage>
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
    font-family: "Playfair Display", serif;
    text-transform: lowercase;
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

      .image {
        width: 600px;
        margin-bottom: 2em;
      }
    }

    .header-text-container {
      margin: auto;
      padding: 1em;
      padding-left: 2em;
      max-width: 800px;
      font-size: 1.3rem;
      background-size: 25%;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);

      @media (min-width: 900px) {
        margin-top: 1em;
      }
    }
  }

  article {
    padding: 0 2em;
    font-size: 1.2rem;
    max-width: 700px;
    margin: auto;
    margin-top: 2em;

    p {
      margin-bottom: 3em;
    }

    h3 {
      font-size: 2rem;
      margin-bottom: .75em;
    }
  }
`;

export const query = graphql`
  {
    polaroid: file(relativePath: { eq: "polaroid-frame.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    canvas: file(relativePath: { eq: "texture_canvas.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    about: allContentfulAboutPage(
      sort: { fields: updatedAt, order: DESC }
      limit: 1
    ) {
      edges {
        node {
          body {
            childMdx {
              body
            }
          }
          image {
            fluid {
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

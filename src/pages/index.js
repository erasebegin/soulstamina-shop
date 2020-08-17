import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Header from "../components/header";
import SEO from "../components/seo";

const IndexPage = ({data}) => {
  return (
    <>
      <SEO title="Home" />
      <Layout>
          <Header background={data.img}/>
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    img: contentfulDesignElement {
      homePageHeaderImage {
        file {
          url
        }
      }
    }
  }
`;

export default IndexPage;

import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Contact from "../components/contact";
import SEO from "../components/seo";

const ContactPage = () => {
  return (
    <Layout title="Contact">
      <SEO title="Contact" />
      <Contact />
    </Layout>
  );
};

export default ContactPage;

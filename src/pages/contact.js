import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Contact from "../components/contact";
import SEO from "../components/seo";

const ContactPage = ({ data }) => {
  
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    window.innerWidth <= 800 ? setIsMobile(true) : setIsMobile(false);
  });

  if (typeof window === "undefined") {
    global.window = {};
  }

  window.onresize = function() {
    window.innerWidth <= 800 ? setIsMobile(true) : setIsMobile(false);
  };

  return (
    <Layout>
      <SEO title="Contact" />
      <Contact />
    </Layout>
  );
};

export default ContactPage;

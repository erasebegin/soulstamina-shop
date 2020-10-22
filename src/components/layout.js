import React from "react";
import styled from "styled-components";

import "./style.scss";
import Helmet from "./helmet";
import Navbar from "../components/navbar";
import Footer from "./globals/footer";

const Layout = ({ children, title }) => (
  <Container className="columns">
    <div className="column main">
      <Helmet title={title} />
      <Navbar />
      <div className="columns is-centered">
        <div className="column main-body">{children}</div>
      </div>
      <Footer />
    </div>
  </Container>
);

const Container = styled.div`
  .main-body {
    min-height: 85vh;
  }

  .main {
    padding-bottom: 0;
  }
`;

export default Layout;
